import React from 'react'
import UserRow from './UserRow'
import { UserContext } from '../context/UserContext';

export default function AdminBox() {

    const { users } = useContext(UserContext);

  return (
    <div>
        <UserRow userId={1}/>{/*to do with loop on all user id's*/}
    </div>
    //table of all users from database
    //for each row there's a delete button and edit button.
    //click on edit button will set currentUser with clicked user's id, and open editBox
    
    
  )
}
