import React from 'react'
import { useState , useEffect, useContext } from 'react';
import { UserContext } from '../context/UserContext';



export default function LoginPage() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { authenticateUser,setCurrentUser, currentUser } = useContext(UserContext);

    function loginAttempt(e)
    {
        e.preventDefault();
        let user = authenticateUser(username, password); // authenticateUser() is imported from UserContext
        if(user == undefined){
          alert("No matching credentials.");
        }
        else{
          setCurrentUser(user);
          console.log(currentUser);
          //do something
        }
    }

    

  return (
    <>
    <form >
        <div>
          <label>Enter Username: </label>
          <input type="text"  onChange={(event) => setUsername(event.target.value)} />
        </div>
        <div>
          <label>Enter Password: </label>
          <input type="password"  onChange={(event) => setPassword(event.target.value)} />
        </div>
        <button onClick = {loginAttempt}>Login</button>
    </form>
    <small>Not registered yet?</small>
    <a>Register</a>
    </>
  )
}