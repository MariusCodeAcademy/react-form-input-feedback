import { useState } from "react";
const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const nameInputChangeHandler = (event) => {
    console.log('keystroke');
    setEnteredName(event.target.value);
  };
  const formSubmissionHandler = (event) => {
    // sustabdyti forma nuo siuntimo nustatytuoju budu 
    event.preventDefault();
    console.log('SubmitEvent');
    console.log('ivesta', enteredName);
  }
  return (
    <form onSubmit={formSubmissionHandler} >
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
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
