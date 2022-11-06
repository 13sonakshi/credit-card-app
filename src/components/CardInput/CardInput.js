import classes from "./Card.module.css";
import useInput from "../../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";
const cardlength = (value) =>
  value.trim().length >= 14 && value.trim().length <= 19;
const limitCheck = (value) => parseFloat(value.trim()) >= 10.0;

const CardInput = (props) => {
  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(isNotEmpty);
  const {
    value: cardNumberValue,
    isValid: cardNumberIsValid,
    hasError: cardNumberHasError,
    valueChangeHandler: cardNumberChangeHandler,
    inputBlurHandler: cardNumberBlurHandler,
    reset: resetCardNumber,
  } = useInput(cardlength);
  const {
    value: limitValue,
    isValid: limitIsValid,
    hasError: limitHasError,
    valueChangeHandler: limitChangeHandler,
    inputBlurHandler: limitBlurHandler,
    reset: resetLimit,
  } = useInput(limitCheck);

  let formIsValid = false;

  if (nameIsValid && cardNumberIsValid && limitIsValid) {
    formIsValid = true;
  }

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    props.onAddCard({
      name: nameValue,
      cardNumber: cardNumberValue,
      limit: limitValue,
    });

    resetName();
    resetCardNumber();
    resetLimit();
  };

  const nameClasses = nameHasError ? "form invalid" : "form";
  const cardNumberClasses = cardNumberHasError ? "form invalid" : "form";
  const limitClasses = limitHasError ? "form invalid" : "form";

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.control}>
        <div className={nameClasses}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            value={nameValue}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
          {nameHasError && (
            <p className="error-text">Please enter a valid name</p>
          )}
        </div>
        <div className={cardNumberClasses}>
          <label htmlFor="name">Card Number</label>
          <input
            type="number"
            id="cardNumber"
            value={cardNumberValue}
            onChange={cardNumberChangeHandler}
            onBlur={cardNumberBlurHandler}
          />
          {cardNumberHasError && (
            <p className="error-text">Please enter a valid card number</p>
          )}
        </div>
        <div className={limitClasses}>
          <label htmlFor="limit">Limit</label>
          <input
            type="number"
            id="cardLimit"
            maxLength={19}
            value={limitValue}
            onChange={limitChangeHandler}
            onBlur={limitBlurHandler}
          />
          {limitHasError && (
            <p className="error-text">Please enter a valid card limit</p>
          )}
        </div>
        <div className={classes.actions}>
          <button disabled={!formIsValid}>Submit</button>
        </div>
        {props.error && <p className="error-text">{props.error}</p>}
      </div>
    </form>
  );
};

export default CardInput;
