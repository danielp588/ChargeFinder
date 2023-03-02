import React from 'react'
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate} from 'react-router-dom/dist';

export default function ProfilePage() {

    let navigate = useNavigate();

    const {currentUser, setCurrentUser} = useContext(UserContext);

    const logOut = () => {
        setCurrentUser(null);
        navigate('/');
    }

  return (
    <>
    <h1>Profile {currentUser.id}</h1>
        <div className='profile-pic'>
            <img src={currentUser.image}/>
            {console.log(currentUser.image)}
        </div>
        <div>
            <p>Full name: {currentUser.firstname} {currentUser.lastname} </p>
            <p>Email: {currentUser.email}</p>
            <p>Adress: {currentUser.city} {currentUser.street} {currentUser.houseNumber}</p>
            <p>Birthday: {currentUser.dob}</p> 
        </div>
        <div>
            <button className="btn btn-primary">some action</button>
            <button className="btn btn-primary" onClick={logOut}>Log out</button>
            <button className="btn btn-primary" onClick={() => {
                navigate('/edit')
            }}>Edit Profile</button>
        </div>
    </>
  )
}
