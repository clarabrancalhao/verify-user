import { useState } from 'react';
import NewUser from './components/NewUser';
import UsersList from './components/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevState) => {
      return [...prevState, { name: uName, age: uAge }];
    });
  };
  return (
    <div>
      <NewUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
