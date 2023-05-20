import React, { useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext } from "react";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

//   create new user
    const createUser = (email, password, name) =>{
        return createUserWithEmailAndPassword(auth, email, password, name);
    }

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }


    const logOut = () =>{
        return signOut(auth);
    }

    useEffect(() =>{
      const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
            if(currentUser) {
                setUser(createUser);
                console.log('current user:-', currentUser);
            }
        })
        return () =>{
            return unSubscribe();
        }
    },[])

  const authInfo = {
    user,
    createUser,
    signIn,
    logOut
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
