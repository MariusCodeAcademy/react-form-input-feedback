import { useEffect, useState } from "react";
const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const [formIsValid, setFormIsValid] = useState(false);

  // prideti email input, ir ji pavaliduoti prie esamos logikos
  // email turi tureti @ ir taska po @. mail@gmail.com value.includes('.')

  const enteredNameIsValid = enteredName.trim().length >= 3;
  const nameInputHasError = !enteredNameIsValid && enteredNameTouched;

  useEffect(() => {
    enteredNameIsValid ? setFormIsValid(true) : setFormIsValid(false);
  }, [enteredNameIsValid]);

  const nameInputChangeHandler = (event) => {
    console.log("keystroke");
    setEnteredName(event.target.value);
  };
  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };
  const formSubmissionHandler = (event) => {
    // sustabdyti forma nuo siuntimo nustatytuoju budu
    event.preventDefault();

    // formos siuntimas reiskia kad visi laukai yra paliesti
    setEnteredNameTouched(true);

    // validacija
    if (!enteredNameIsValid) {
      return;
    }

    // isvalyti input po submit
    setEnteredName("");
    setEnteredNameTouched(false);
  };

  // computed classes
  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          value={enteredName}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          type="text"
          id="name"
        />
        {nameInputHasError && (
          <p className="error-text">Name must be at least 3 letters</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
