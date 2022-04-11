import React, { useEffect } from 'react'
import { addDoc } from 'firebase/firestore';
import { userAccessToken } from './utils/fetchUserDetails';
import { useRouter } from 'next/router';
import { colRef } from './config/firebase.config';

const index = () => {
  const router = useRouter();
  useEffect(()=> {
    const accessToken = userAccessToken();
    if(!accessToken){
     router.push("/login");
    }
  }, [])
  let newName = '';
  const handleChange = (e) =>{
    newName = e.target.value;
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    addDoc(colRef,{
      userName: newName,
    })
  }
  return (
   
    <div className="bgimage">
      <img src='https://cdn-icons-png.flaticon.com/512/6681/6681235.png'/>
      <h1>Dashboard</h1>
      <div className="inputcont">
      <input onChange={handleChange} type="text"/>
      <input onClick={handleSubmit} type="submit"/>
      
      </div>
    </div>
  )
}

export default index;