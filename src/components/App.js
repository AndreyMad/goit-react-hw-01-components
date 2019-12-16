import React from "react";
import  UserProfile from './UserProfile/UserProfile.jsx'
import user from '../db/user.json'



function App() {
  
  return (<>
  <UserProfile user={user}/>
  </>)
}

export default App;
