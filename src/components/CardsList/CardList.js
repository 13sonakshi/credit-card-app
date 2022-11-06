import classes from "./CardList.module.css";
import { Fragment, useEffect, useState } from "react";
import useHttp from "../../hooks/use-http";
import LoadingSpinner from "../../UI/LoadingSpinner";

const CardList = () => {
  const { isLoading, error, sendRequest: getAllCardsRequest } = useHttp();
  const [data, setData] = useState();

  const createAddCardTask = (taskText, taskData) => {
    const list = taskData?.map((item) => (
      <tr class={classes.table.tr}>
        <td>{item.name}</td>
        <td>{item.cardNumber}</td>
        <td>£{item.balance}</td>
        <td>£{item.limit}</td>
      </tr>
    ));
    setData(list);
  };

  useEffect(() => {
    getAllCardsRequest(
      {
        url: "http://localhost:4000/cards/",
        method: "GET",
      },
      createAddCardTask.bind(null, null)
    );
  }, [getAllCardsRequest]);

  const content = isLoading ? (
    <div class={classes.table}>
      <LoadingSpinner />
    </div>
  ) : (
    <div className={classes.label}>
      <h1>List of Existing Cards</h1>
      <div class={classes.table}>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Card Number</th>
              <th>Balance</th>
              <th>Limit</th>
            </tr>
          </thead>
          <tbody>{data}</tbody>
        </table>
      </div>
    </div>
  );

  return <Fragment>{content}</Fragment>;
};

export default CardList;
