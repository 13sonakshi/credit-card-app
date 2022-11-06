const cardSchema = require("../models/card");
const { luhnChk } = require("../helpers/luhn.js");

exports.addCard = (req, res, next) => {
  try {
    if (
      req.body?.name === "" ||
      req.body?.cardNumber === "" ||
      req.body?.limit === ""
    ) {
      throw "Please enter complete details";
    }

    const isCardValid = luhnChk(req.body.cardNumber);
    if (!isCardValid) {
      throw "Invalid card number";
    }

    console.log("cardSchema", cardSchema);
    console.log(req.body);

    cardSchema.findOne(
      { cardNumber: req.body.cardNumber },
      function (err, result) {
        try {
          if (err) throw "Bad request";
          if (result) {
            throw "Card already exist";
          } else {
            cardSchema.create(req.body, (error, data) => {
              if (error) {
                throw "Error Processing request.";
              } else {
                res.status(200).send({ message: "Card added Successfully" });
              }
            });
          }
        } catch (error) {
          return res.status(400).send({ message: error });
        }
      }
    );
  } catch (error) {
    return res.status(400).send({ message: error });
  }
};

exports.getCards = (req, res) => {
  try {
    cardSchema
      .find({}, { _id: 0, __v: 0 }, (error, data) => {
        if (error) {
          throw "Bad Request!";
        } else {
          res.status(200).send(data);
        }
      })
      .sort({ _id: -1 });
  } catch (error) {
    return res.status(400).send({ message: error });
  }
};
