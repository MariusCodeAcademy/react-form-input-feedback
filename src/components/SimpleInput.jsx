import { useState, useRef } from "react";
const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

  const nameInputRef = useRef();

  const nameInputChangeHandler = (event) => {
    console.log("keystroke");
    setEnteredName(event.target.value);
  };
  const formSubmissionHandler = (event) => {
    // sustabdyti forma nuo siuntimo nustatytuoju budu
    event.preventDefault();

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
  const nameInputClasses = enteredNameIsValid
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          value={enteredName}
          onChange={nameInputChangeHandler}
          type="text"
          id="name"
        />
        {!enteredNameIsValid && (
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
