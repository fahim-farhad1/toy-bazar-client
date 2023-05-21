import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { data } from 'autoprefixer';

const MyToys = () => {
    // const {user} = useContext(AuthContext);
    // console.log(user);
    // const [myToys, setMyToys] = useState([])
    // useEffect(() =>{
    //     fetch(`https://toy-bazar-server.vercel.app/mytoys?sellerEmail=${user.email}`)
    //     .then(res =>res.json())
    //     .then(data => console.log(data));
    // },[])
    return (
        <div>
            <h2>This is my toy</h2>
        </div>
    );
};

export default MyToys;