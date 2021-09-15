import React, { useState } from 'react'
import AddUser from './components/AddUser/AddUser';
import UsersList from './components/AddUser/UsersList';

function App() {

  const [addUser, setAddUser] = useState([])

  const addUserHandler = (uName, uAge) => {
    setAddUser((prevAddUser) => {
      return (
        [...prevAddUser, {name : uName , age : uAge}]
      )
    })
  }

  return (
    <div className="App">
       <AddUser onAddUser={addUserHandler} />
       <UsersList users={addUser} />
    </div>
  );
}

export default App;
