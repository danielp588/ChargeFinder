    import { createContext, useState, useEffect } from 'react';

    export const UserContext = createContext();

    export default function UserContextProvider({children}){

        const [users, setUsers] = useState([]);
        const [currentUser, setCurrentUser] = useState(null);
        const [globalId, setGlobalId] = useState(4);//"static" id setting when registering new users
        const [isAdmin, setIsAdmin] = useState(false);


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
            let i = users.findIndex(u => u.id == currentUser.id)
            users[i].username = username;
            users[i].password = password;
            users[i].image = image;
            users[i].firstname = firstname;
            users[i].lastname = lastname;
            users[i].email = email;
            users[i].dob = dob;
            users[i].city = city;
            users[i].street = street;
            users[i].houseNumber = houseNumber; 
        }

        useEffect(() =>{
            loadAccounts();
        },[]);

        const value = {
            loadAccounts,
            users, setUsers,
            authenticateUser,
            addUser,editUser,
            currentUser, setCurrentUser,
            isAdmin, setIsAdmin
        }

        return(
            <UserContext.Provider value={value}>
                {children}
            </UserContext.Provider>
        )

    }