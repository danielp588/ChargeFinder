import React from 'react'
import { useState , useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom/dist';



export default function LoginPage() {

  let navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { authenticateUser,setCurrentUser, setIsAdmin } = useContext(UserContext);

    function loginAttempt(e)
    {
        e.preventDefault();
        let user = authenticateUser(username, password); // authenticateUser() is imported from UserContext
        if(user == undefined){
          alert("No matching credentials.");
          return;
        }
        if(username == 'admin'){
          setIsAdmin(true);
          navigate('/admin')
        }
        else{
          setCurrentUser(user);
          navigate('/profile');
        }
    }
    
  return (
    <>
    <h1>Login</h1>
    <form >
        <div className="form-group">
          <label>Enter Username: </label>
          <input type="text" className="form-control" onChange={(event) => setUsername(event.target.value)} />
        </div>
        <div className="form-group">
          <label>Enter Password: </label>
          <input type="password" className="form-control" onChange={(event) => setPassword(event.target.value)} />
        </div>
        <button className="btn btn-primary" onClick = {loginAttempt}>Login</button>
    </form>
    <small>Not registered yet?</small>
    <button className="btn btn-primary" onClick={() => {
        navigate("/register");
      }}>Register</button>
    </>
  )
}