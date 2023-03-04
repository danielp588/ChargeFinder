import React from 'react'
import UserRow from './UserRow'
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom/dist';

export default function AdminBox() {

    let navigate = useNavigate();
    const { users,setIsAdmin } = useContext(UserContext);
    const usersOnly = users.slice(1);//without the admin

    const AdminLogout = () => {
      setIsAdmin(false);
      navigate('/');
    }

  return (
    <>
      <button className="btn btn-primary" onClick={AdminLogout}>Logout</button>
       <div>
          {usersOnly.map((u,index) => (
           <UserRow key={index} user={u}/>
          ))}
       </div>
    </>
  )
}
