const controller = require("../controllers/card.js");
const mongoose = require("mongoose");
const { luhnChk } = require("../helpers/luhn.js");

const mockResponse = () => {
  const response = {};
  response.status = jest.fn().mockReturnThis();
  response.send = jest.fn().mockReturnThis();
  response.json = jest.fn().mockReturnValue(response);
  return response;
};

const mockRequest = (data) => {
  return {
    body: data,
  };
};

describe("Testing credit card apis", () => {
  test("status code should be 400, if request is invalid", () => {
    const response = mockResponse();
    const reqJson = mockRequest({
      name: "",
      cardNumber: "",
      limit: "",
    });
    controller.addCard(reqJson, response, null);
    expect(response.status).toHaveBeenCalledWith(400);
  });

  test("status code should be 400, if credit card number is invalid", () => {
    const response = mockResponse();
    const reqJson = mockRequest({
      name: "sonakshi",
      cardNumber: "123",
      limit: "22",
    });
    controller.addCard(reqJson, response, null);
    expect(response.status).toHaveBeenCalledWith(400);
  });

  test("status code should be 400, if limit is empty", () => {
    const response = mockResponse();
    const reqJson = mockRequest({
      name: "sonakshi",
      cardNumber: "123",
      limit: "",
    });
    controller.addCard(reqJson, response, null);
    expect(response.status).toHaveBeenCalledWith(400);
  });

  test("status code should be 400, if name is empty", () => {
    const response = mockResponse();
    const reqJson = mockRequest({
      name: "",
      cardNumber: "123",
      limit: "22",
    });
    controller.addCard(reqJson, response, null);
    expect(response.status).toHaveBeenCalledWith(400);
  });

  test("result should be true, if request is valid", () => {
    const reqJson = mockRequest({
      name: "sonakshi",
      cardNumber: "6011000990139424",
      limit: "224",
    });
    let result = luhnChk(reqJson.body.cardNumber);
    expect(result).toBe(true);
  });
});
