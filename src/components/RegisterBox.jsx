import React from 'react'
import { useContext, useState, useEffect } from 'react'
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom/dist';

export default function RegisterBox() {

    let navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [image, setImage] = useState();
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('');
    const [dob, setDob] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [houseNumber, setHouseNumber] = useState('');

    const { users, addUser } = useContext(UserContext);

    function Register(e) {
        e.preventDefault();

        // Check Username
        if (username.length < 4 || username.length > 60) return alert("Username must be between 4 to 60 characters!");

        // Check Password
        if (password.length < 7 || password.length > 12) return alert("Password must be between 7 to 12 characters!");
        let hasNumber = false;
        let hasCapitalLetter = false;
        let hasSpecialSign = false;
        for (let i = 0; i < password.length; i++) {
            if (!hasNumber && password[i] >= '0' && password[i] <= '9') hasNumber = true;
            else if (!hasCapitalLetter && password[i] >= 'A' && password[i] <= 'Z') hasCapitalLetter = true;
            else if (!hasSpecialSign && password[i] >= '!' && password[i] <= '/' || // !"#$%&'()*+,-./"
                password[i] >= ':' && password[i] <= '@' || // :;<=>?@
                password[i] >= '[' && password[i] <= '`' || // [\]^_`
                password[i] >= '{' && password[i] <= '~') // {|}~
                hasSpecialSign = true;
        }
        if (!hasNumber) return alert("Password must contain at least 1 number!");
        if (!hasCapitalLetter) return alert("Password must contain at least 1 capital letter!");
        if (!hasSpecialSign) return alert("Password must contain at least one special sign!");

        // Check Password Confirmation
        if (confirmPassword != password) return alert("Passwords do not match!");

        // Check Firstname
        if (firstname.length < 2) return alert("Invalid firstname!");
        for (let i = 0; i < firstname.length; i++) {
            if (firstname[i] < 'A' || firstname[i] > 'Z' &&
                firstname[i] < 'a' || firstname[i] > 'z' &&
                firstname[i] < 'א' || firstname[i] > 'ת') return alert("Firstname must contain English/Hebrew characters only!");
        }

        // Check Lastname
        if (lastname.length < 2) return alert("Invalid lastname!");
        for (let i = 0; i < lastname.length; i++) {
            if (lastname[i] < 'A' || lastname[i] > 'Z' &&
                lastname[i] < 'a' || lastname[i] > 'z' &&
                lastname[i] < 'א' || lastname[i] > 'ת') return alert("Lastname must contain English/Hebrew characters only!");
        }

        // Check Email
        let atCount = 0;
        for (let i = 0; i < email.length; i++) {
            if (email[i] == '@') atCount++;
        }
        if (atCount > 1 || atCount < 1) return alert("Invalid email address!");
        let suffix = "";
        for (let i = 4; i > 0; i--)
            suffix = suffix + email[email.length - i];
        if (suffix != ".com") return alert("Doesn't end with .com");
        if (users.find(element => element.email == email.toLowerCase())) return alert("This email is already registered in our systems!");

        // Check Date
        let today = new Date();
        if (new Date(dob) > today) return alert("Invalid date of birth!");

        // Check City (TO DO)
        if (city.length < 2) return alert("Invalid city name!");

        // Check Street
        if (street.length < 2) return alert("Invalid street name!");
        for (let i = 0; i < street.length; i++) {
            if (street[i] < 'א' || street[i] > 'ת') return alert("Street name can only be in Hebrew!");
        }

        // Check House Number
        if (houseNumber < 1) return alert("Invalid House Number!");

        addUser(username, password, image, firstname, lastname, email.toLowerCase(), dob, city, street, houseNumber);
        navigate('/');//moves to login page
    }

    function autoComplete(){
        let cities = ["Ashdod", "Raanana"];
        let autoCompleteList = document.getElementById("city-autocomplete");
        console.log(autoCompleteList);
        autoCompleteList.innerText = "";
        let res = cities.filter((e) => e.includes(city));
        res.forEach((e) =>{
            autoCompleteList.innerHTML += `<li>${e}</li>`;
        });
    }

    function previewImage(input){
        let file = input.files[0];
        if(file){
            let src = URL.createObjectURL(file);
            setImage(src);
        }
    }

    return (
        <>
        <div className='d-flex align-items-center flex-column'>
        <h1>Register</h1>
        <button className="btn btn-primary" onClick={()=>navigate('/')}>Back to Login</button>
            <form className="px-4 py-3">

                <div className="form-group">
                    <label htmlFor="username">Username:</label>
                    <input type="text" className="form-control" id="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    <label htmlFor="password-confirm">Confirm Password:</label>
                    <input type="password" className="form-control" id="password-confirm" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="picture">Profile Picture:</label>
                    <input type="file" className="form-control" id="picture" placeholder="Select .jpg or .jpeg" accept="img/jpg, img/jpeg" onChange={(e)=> previewImage(e.target)}/>
                    
                    <div className='d-flex justify-content-center'>
                        <img className='profile-pic rounded-circle img-thumbnail' src={image}/>
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="firstname">Firstname:</label>
                    <input type="text" className="form-control" id="firstname" placeholder="Firstname" onChange={(e) => setFirstname(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="lastname">Lastname:</label>
                    <input type="text" className="form-control" id="lastname" placeholder="Lastname" onChange={(e) => setLastname(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="email">E-Mail:</label>
                    <input type="text" className="form-control" id="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                    <small>So we can bombard your inbox and sell your information.</small>
                </div>

                <div className="form-group">
                    <label htmlFor="dob">Date of Birth:</label>
                    <input type="date" className="form-control" id="dob" placeholder="YYYY-MM-DD" onChange={(e) => setDob(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor="city">City:</label>
                    <input type="text" className="form-control" id="city" placeholder="City" onChange={(e) =>{setCity(e.target.value); autoComplete()}} />

                    <ul id="city-autocomplete" className='list-unstyled'>
                        <li></li>
                    </ul>
                    
                    <label htmlFor="street">Street:</label>
                    <input type="text" className="form-control" id="street" placeholder="Street" onChange={(e) => setStreet(e.target.value)} />
                    <label htmlFor="house-number">House Number:</label>
                    <input type="number" className="form-control" id="house-number" placeholder="House Number" onChange={(e) => setHouseNumber(e.target.value)} />
                </div>            
            </form>
            <button className="btn btn-primary" onClick={Register}>Register</button>
            </div>
        </>
    )
}
