import useInput from "../hook/use-input";
import { useEffect, useState } from "react";

const nameValidation = (n) => n.trim().length >= 3;

const BasicForm = (props) => {
  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput(nameValidation);

  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    setFormIsValid(nameIsValid);
  }, [nameIsValid]);

  // computed Classes
  const nameClasses = nameHasError ? "form-control invalid" : "form-control";

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    nameReset();
    console.log("result", nameValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={nameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            value={nameValue}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            type="text"
            id="name"
          />
          {nameHasError && <p className="error-text">Enter valid name</p>}
        </div>
        <div className="form-control">
          <label htmlFor="name">Password</label>
          <input type="password" id="name" />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="name">E-Mail Address</label>
        <input type="text" id="name" />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
