import React from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom/dist';
import { UserContext } from '../context/UserContext';

export default function UserRow({user}) {

    let navigate = useNavigate();  
    const { users, setCurrentUser, setUsers } = useContext(UserContext);

    const EditUser = () => {
      setCurrentUser(user);
      navigate('/edit'); 
    }

    const DeleteUser = () =>{
      let newUsers = users.filter(u => u.id != user.id)
      setUsers(newUsers);
      setCurrentUser(null);
    }

  return (
    <div>
        <p>{user.firstname} {user.lastname}</p>
        <p>{user.dob}</p>
        <p>{user.address}</p>
        <p>{user.email}</p>
        <button className="btn btn-primary" onClick={EditUser}>Edit</button>
        <button className="btn btn-primary" onClick={DeleteUser}>Delete</button>
    </div>
  )
}
