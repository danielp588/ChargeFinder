    import { createContext, useState, useEffect } from 'react';

    export const UserContext = createContext();

    export default function UserContextProvider({children}){

        const [users, setUsers] = useState([]);
        const [currentUser, setCurrentUser] = useState(null);
        const [globalId, setGlobalId] = useState(4);


        async function loadAccounts(){
            try{
                let res = await fetch('./data/accounts.json');
                let data = await res.json();
                setUsers(data);
            }
            catch(error){
                console.log(error);
            }
        }

        const authenticateUser = (username, password) => {
            let user = users.find((u) => u.username == username && u.password == password)
            return user;
        }
        
        const addUser = (username, password,image, firstname, lastname, email, dob, city, street, houseNumber) =>{
            users.push({
            "id":globalId,
            "username": username,
            "password": password,
            "image": image,
            "firstname": firstname,
            "lastname": lastname,
            "email": email,
            "dob": dob,
            "city": city,
            "street": street,
            "houseNumber": houseNumber
            });
            setGlobalId(globalId + 1);
            console.log(users);
        }

        const editUser = (username, password, image, firstname, lastname, email, dob, city, street, houseNumber) => {
            users[currentUser.id].username = username;
            users[currentUser.id].password = password;
            users[currentUser.id].image = image;
            users[currentUser.id].firstname = firstname;
            users[currentUser.id].lastname = lastname;
            users[currentUser.id].email = email;
            users[currentUser.id].dob = dob;
            users[currentUser.id].city = city;
            users[currentUser.id].street = street;
            users[currentUser.id].houseNumber = houseNumber; 
        }

        useEffect(() =>{
            loadAccounts();
        },[]);

        const value = {
            loadAccounts,
            users, setUsers,
            authenticateUser,
            addUser,editUser,
            currentUser, setCurrentUser
        }

        return(
            <UserContext.Provider value={value}>
                {children}
            </UserContext.Provider>
        )

    }