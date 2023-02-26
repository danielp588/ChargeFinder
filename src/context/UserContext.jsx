    import { createContext, useState, useEffect } from 'react';

    export const UserContext = createContext();

    export default function UserContextProvider({children}){
        
        const [users, setUsers] = useState([]);
        const [currentUser, setCurrentUser] = useState(null);

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
        
        const addUser = (username, password, admin, image, firstname, lastname, email, dob, city, street, houseNumber) =>{
            users.push({"username": username,
            "password": password,
            "admin": admin,
            "image": image,
            "firstname": firstname,
            "lastname": lastname,
            "email": email,
            "dob": dob,
            "city": city,
            "street": street,
            "houseNumber": houseNumber
            });

            console.log(users);
        }

        useEffect(() =>{
            loadAccounts();
        },[]);

        const value = {
            loadAccounts,
            users, setUsers,
            authenticateUser,
            addUser,
            currentUser, setCurrentUser
        }

        return(
            <UserContext.Provider value={value}>
                {children}
            </UserContext.Provider>
        )

    }