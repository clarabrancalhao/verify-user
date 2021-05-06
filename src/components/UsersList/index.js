import React from 'react';
import Card from '../Card';
import { Ul, Li } from './styles';

const UsersList = (props) => {
  return (
    <Card>
      <Ul>
        {props.users.map((user, index) => (
          <Li key={index}>
            {user.name} ({user.age} years old)
          </Li>
        ))}
      </Ul>
    </Card>
  );
};

export default UsersList;
