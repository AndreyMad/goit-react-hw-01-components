import React from 'react';
import style from './UserFriends.module.css';

const UserFriend = ({ friends }) => {
  return (
    <ul className={style.friend_нlist}>
      {friends.map(el => (
        <li key={el.id} className={style.item}>
          <span className="status"></span>
          <img
            className={style.avatar}
            src={el.avatar}
            alt="user avatar"
            width="48"
          />
          <p className={style.name}>{el.name}</p>
        </li>
      ))}
    </ul>
  );
};

export default UserFriend;
