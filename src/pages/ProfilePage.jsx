import React from 'react'
import { useState , useEffect, useContext } from 'react';
import { UserContext } from '../context/UserContext';

//works with current user. first checks if current user != null
export default function ProfilePage() {

    const {currentUser, setCurrentUser, users} = useContext(UserContext);
    
    //TODO as component
  return (
    <>
    
        <div>
            <img></img>
        </div>
        <div>
            <p>Full name: {currentUser.firstname} {currentUser.lastname} </p>
            <p>Email: {currentUser.email}</p>
            <p>Adress: {currentUser.adress}</p>
            <p>Birthday: {currentUser.dob}</p>
        </div>
        <div>
            <button>Edit profile</button>
            <button>Log out</button>
            <button>some action</button>
        </div>
    </>
  )
}
