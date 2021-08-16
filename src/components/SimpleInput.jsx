import { useState, useRef } from "react";
const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);

  const nameInputRef = useRef();

  const nameInputChangeHandler = (event) => {
    console.log("keystroke");
    setEnteredName(event.target.value);
    // jei ivesta kazkas tai reiskia laukas yra valid
    if (event.target.value.trim() !== "") {
      setEnteredNameIsValid(true);
    }
  };
  const formSubmissionHandler = (event) => {
    // sustabdyti forma nuo siuntimo nustatytuoju budu
    event.preventDefault();

    // formos siuntimas reiskia kad visi laukai yra paliesti
    setEnteredNameTouched(true);

    // validacija
    if (enteredName.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }

    console.log("SubmitEvent");
    console.log("ivesta", enteredName);
    // naudojant ref gauti ivesties lauko reiksme
    const enteredValue = nameInputRef.current.value;
    console.log("value using ref", enteredValue);
    // isvalyti input po submit
    setEnteredName("");
    setEnteredNameIsValid(true);
    // nameInputRef.current.value = '' // nerekomenduojam updatinti dom rankiniu budu
  };
  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
    // validacija
    if (event.target.value.trim() === "") {
      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true);
  };

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          value={enteredName}
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          type="text"
          id="name"
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
