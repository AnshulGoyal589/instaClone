import React, { useState, useEffect } from 'react';
import MainNavigationBar from './Components/MainNavigationBar/MainNavigationBar'
import {Route,Routes,useNavigate} from 'react-router-dom'
import Login from './Components/Authentication/Login'
import Register from './Components/Authentication/Register'
import Home from './Components/Pages/Home'
import Profile from './Components/Pages/Profile'
import PostSend from './Components/Pages/PostSend';
import Story from './Components/Pages/Story';
import SearchSend from './Components/Pages/SearchSend';


const App = () => {

  let [userData,setUserData]=useState({});

  function setUserDetails(data){
    setUserData(data);
  }

  
  return (
    <div >
       <MainNavigationBar userData={userData} />
       <Routes><Route
          path="/"
          element={ 
            userData.username ? (
              <div>
              {userData.username ? <Story/> : null}
              <Home userData={userData} /></div>
            ) : (
              <Login setUserDetails={setUserDetails} />
            )
          }
        />
          <Route path="/login" element={<Login  setUserDetails={setUserDetails}  style={{height:'100px',width:'90px'}} />} />
          <Route path="/register" element={<Register/>} />
          <Route path="/send" element={<PostSend userData={userData} />} />
          <Route path="/search" element={<SearchSend/>} />
          <Route path="/profile" element={<Profile userData={userData} />} />
       </Routes>
      
    </div>
  )
}

export default App