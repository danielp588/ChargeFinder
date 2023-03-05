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
    <div className='d-flex justify-content-end align-items-center'>
        <p className='px-2'>{user.firstname} {user.lastname}</p>
        <p className='px-2'>{user.dob}</p>
        <p className='px-2'>{user.address}</p>
        <p className='px-2'>{user.email}</p>
        <button className="btn btn-primary" onClick={EditUser}>Edit</button>
        <button className="btn btn-primary" onClick={DeleteUser}>Delete</button>
        <img className='profile-pic rounded-circle img-thumbnail' src={user.image}/>
    </div>
  )
}
