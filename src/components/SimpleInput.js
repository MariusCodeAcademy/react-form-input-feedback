import { useState, useRef } from "react";
const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const nameInputRef = useRef();
  const nameInputChangeHandler = (event) => {
    console.log('keystroke');
    setEnteredName(event.target.value);
  };
  const formSubmissionHandler = (event) => {
    // sustabdyti forma nuo siuntimo nustatytuoju budu 
    event.preventDefault();
    console.log('SubmitEvent');
    console.log('ivesta', enteredName);
    // naudojant ref gauti ivesties lauko reiksme
    const enteredValue = nameInputRef.current.value;
    console.log('value using ref', enteredValue)
    // isvalyti input po submit
    setEnteredName('')
    // nameInputRef.current.value = '' // nerekomenduojam updatinti dom rankiniu budu
  }
  return (
    <form onSubmit={formSubmissionHandler} >
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameInputRef}
          value={enteredName}
          onChange={nameInputChangeHandler}
          type="text"
          id="name"
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
