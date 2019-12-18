import React from 'react';
import UserProfile from './UserProfile/UserProfile.jsx';
import user from '../db/user.json';
import UserFriends from './UserFriends/UserFriends.jsx';
import friends from '../db/friends.json';
function App() {
  return (
    <>
      <UserProfile user={user} />
      <UserFriends friends={friends} />
    </>
  );
}

export default App;
