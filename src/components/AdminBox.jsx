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
      <div className='d-flex justify-content-center align-items-center flex-column'>
          <div className='d-flex align-items-center'>
          <h1 className='p-2'>Admin</h1>
           <button className="btn btn-primary" onClick={AdminLogout}>Logout</button>
         </div>
        <h1 className='p-3'>Users:</h1>
      </div>
      <div className='d-flex justify-content-center align-items-center'>
       <div className='d-flex flex-column'>
          {usersOnly.map((u,index) => (
           <UserRow key={index} user={u}/>
          ))}
       </div>
       </div>
    </>
  )
}
