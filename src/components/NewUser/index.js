import React, { useState, useRef } from 'react';
import { Input, Label } from './styles';
import Button from '../Button/index';
import Card from '../Card';
import ErrorModal from '../ErrorModal';

const NewUser = (props) => {
  const enteredUsername = useRef('');
  const enteredAge = useRef('');
  const [error, setError] = useState();

  const username = enteredUsername.current.value;
  const userAge = enteredAge.current.value;

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: 'Invalid Input.',
        message: 'Please, enter a valid name and age.',
      });
      return;
    }
    if (+userAge < 1) {
      setError({
        title: 'Invalid Age.',
        message: 'Please, enter a valid age ( > 0 ).',
      });
      return;
    }
    props.onAddUser(username, userAge);
    enteredUsername.current.value = '';
    enteredAge.current.value = '';
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
          <Input id="username" type="text" ref={enteredUsername} />
          <Label htmlFor="age">Age (Years)</Label>
          <Input id="age" type="number" ref={enteredAge} />
          <Button type="submit" onClick={formSubmitHandler}>
            Add User
          </Button>
        </form>
      </Card>
    </>
  );
};

export default NewUser;
