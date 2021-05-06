import React from 'react';
import { Button, Contanier, Input, Label } from './styles';

const NewUser = () => {
  return (
    <Contanier>
      <Label>Username</Label>
      <Input />
      <Label>Age (Years)</Label>
      <Input />
      <Button>Add User</Button>
    </Contanier>
  );
};

export default NewUser;
