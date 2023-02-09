import { onAuthStateChanged } from "firebase/auth";
import { createContext, useState } from "react";
import { firebase } from "../api";

export const authContext = createContext();

export const AuthProvider = (props) => {

    const [user, setUser] = useState();
    onAuthStateChanged(firebase.auth, (_user) => {

        if (_user) {
            setUser(_user)
            console.log(_user);
            firebase.createUser({
                username: _user.email,
                name: _user.displayName,
                age: _user.photoURL
            })

        } else {
            setUser(null)
        }
    })

    return (
        <authContext.Provider value={{ user }}>
            {props.children}
        </authContext.Provider>
    )

}