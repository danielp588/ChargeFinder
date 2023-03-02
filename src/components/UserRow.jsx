import React from 'react'
import { UserContext } from '../context/UserContext';

export default function UserRow({userId}) {

    const { users } = useContext(UserContext);
  return (
    <div>
        <p>{users[userId].firstname} {users[userId].lastname}</p>
        <p>{users[userId].dob}</p>
        <p>{users[userId].address}</p>
        <p>{users[userId].email}</p>
        <button>Edit</button>{/*function that sets currentUser and routes to editBox*/}
        <button>Delete</button>
    </div>
  )
}
