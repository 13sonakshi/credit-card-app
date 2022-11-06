import { useState } from "react";
import CardInput from "../CardInput/CardInput";
import useHttp from "../../hooks/use-http";
import Wrapper from "../../Helpers/Wrapper";
import ErrorModal from "../../UI/ErrorModal";

const CardForm = () => {
  const { isLoading, error, sendRequest: addCardRequest } = useHttp();

  const [infoModal, setInfoModal] = useState();

  const infoModelHandler = () => {
    setInfoModal(null);
  };

  const createAddCardTask = (taskText, taskData) => {
    console.log("apiResponse", taskData);

    setInfoModal({
      title: "Success",
      message: taskData.message,
    });
  };

  const addCardHandler = async (cardData) => {
    addCardRequest(
      {
        url: "http://localhost:4000/cards/add-card",
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: cardData,
      },
      createAddCardTask.bind(null, cardData)
    );
  };

  return (
    <Wrapper>
      {infoModal && (
        <ErrorModal
          title={infoModal.title}
          message={infoModal.message}
          onConfirm={infoModelHandler}
        />
      )}
      <CardInput onAddCard={addCardHandler} loading={isLoading} error={error} />
    </Wrapper>
  );
};

export default CardForm;
