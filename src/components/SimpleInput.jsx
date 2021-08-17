import { useEffect, useState } from "react";
import useInput from "../hook/use-input";

// 6. extra kas pasidaret pasidaryti kad name butu tik raides ir tarpai
// 8. Kas viska pasidare, pabandyti sukurti Input komponenta su visa sita logika kuris veikia
// per props
const nameValidation = (x) => x.trim().length >= 3;

const SimpleInput = (props) => {
  const {
    value: enteredName,
    hasError: nameInputHasError,
    isValid: enteredNameIsValid,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput(nameValidation);

  // email
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const [formIsValid, setFormIsValid] = useState(false);

  // email
  const enteredEmailIsValid =
    enteredEmail.includes("@") && enteredEmail.includes(".");
  const emailInputHasError = !enteredEmailIsValid && enteredEmailTouched;

  useEffect(() => {
    enteredNameIsValid && enteredEmailIsValid
      ? setFormIsValid(true)
      : setFormIsValid(false);
  }, [enteredNameIsValid, enteredEmailIsValid]);

  // email
  const emailInputChangeHandler = (event) => {
    console.log("keystroke");
    setEnteredEmail(event.target.value);
  };
  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const formSubmissionHandler = (event) => {
    // sustabdyti forma nuo siuntimo nustatytuoju budu
    event.preventDefault();

    // validacija
    if (!formIsValid) {
      return;
    }

    // isvalyti input po submit
    resetNameInput();

    setEnteredEmail("");
    setEnteredEmailTouched(false);

    console.log(enteredName, enteredEmail);
  };

  // computed classes
  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";
  // email
  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          value={enteredName}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          type="text"
          id="name"
        />
        {nameInputHasError && (
          <p className="error-text">Name must be at least 3 letters</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          value={enteredEmail}
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlurHandler}
          type="text"
          id="email"
        />
        {emailInputHasError && (
          <p className="error-text">Please provide valid email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
