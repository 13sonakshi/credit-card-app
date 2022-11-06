let express = require("express"),
  router = express.Router();

const cardController = require("../controllers/card");

router.post("/add-card", cardController.addCard);
router.get("/", cardController.getCards);

module.exports = router;
