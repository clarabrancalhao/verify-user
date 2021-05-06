import React, { useState } from 'react';
import { Input, Label } from './styles';
import Button from '../Button/index';
import Card from '../Card';
import ErrorModal from '../ErrorModal';

const NewUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  const changeUsernameInputHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const changeAgeInputHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: 'Invalid Input.',
        message: 'Please, enter a valid name and age.',
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: 'Invalid Age.',
        message: 'Please, enter a valid age ( > 0 ).',
      });
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredAge('');
    setEnteredUsername('');
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card>
        <form action="submit">
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            type="text"
            onChange={changeUsernameInputHandler}
            value={enteredUsername}
          />
          <Label htmlFor="age">Age (Years)</Label>
          <Input
            id="age"
            type="number"
            onChange={changeAgeInputHandler}
            value={enteredAge}
          />
          <Button type="submit" onClick={formSubmitHandler}>
            Add User
          </Button>
        </form>
      </Card>
    </>
  );
};

export default NewUser;
