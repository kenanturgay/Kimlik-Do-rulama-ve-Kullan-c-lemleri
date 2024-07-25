import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import axios from 'axios';

export default function FriendsList(props) {
  const [friends, setFriends] = useState([]);
  const {loggedInUser} = useContext(AuthContext);

  useEffect(()=>{
    axios
    .get(`https://nextgen-project.onrender.com/api/s11d2/friends`,{
      headers: {
        Authorization: loggedInUser.token
    },
  })
    .then(res=>{setFriends(res.data)})
    .catch(err=>console.log(err));
  },[]);
 
  return (
    <div className="friendListDiv">
      <h1>FRIENDS LIST</h1>
      {friends.map((friend, key) => (
        <div className="friendList" key={key}>
          -{friend.name}-{friend.email}
        </div>
      ))}
    </div>
  );
}
