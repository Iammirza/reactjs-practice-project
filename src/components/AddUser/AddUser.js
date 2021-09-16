import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  // Alternative of useState and its uncontrolled component

  const nameInputRef = useRef('');
  const ageInputRef = useRef('');

//   const [enteredUsername, setEnteredUsername] = useState("");
//   const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();

    const nameRef = nameInputRef.current.value;
    const ageRef = ageInputRef.current.value

    if (nameRef.trim().length === 0 || ageRef.trim().length === 0) {
      setError({
        title: "Error",
        message: "Please Enter the Value Here",
      });
      return;
    }
    if (ageRef < 0) {
      setError({
        title: "Error",
        message: "Please Enter the Valid Age ( > 0)",
      });
      return;
    }

    props.onAddUser(nameRef, ageRef);
    nameInputRef.current.value = ''
    ageInputRef.current.value = ''


    // props.onAddUser(enteredUsername, enteredAge);
    // setEnteredUsername("");
    // setEnteredAge("");
  };

//   const usernameChangeHandler = (event) => {
//     setEnteredUsername(event.target.value);
//   };

//   const ageChangeHandler = (event) => {
//     setEnteredAge(event.target.value);
//   };

  const cancelHandler = () => {
    setError(false);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={cancelHandler}
        />
      )}

      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            // value={enteredUsername}
            // onChange={usernameChangeHandler}
            ref={nameInputRef}
          ></input>
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            // value={enteredAge}
            // onChange={ageChangeHandler}
            ref={ageInputRef}
          ></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
