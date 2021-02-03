import React, { useState, useEffect } from "react";
import "./Discover.css";
//import UserCard from "../UserProfile/UserCard";
import {fetchResource} from '../../api';
import Follow from '../Follow/Follow';

const Discover = () => {
  const [users, setUsers] = useState([
    {
      nickname: "",
      email: "",
    },
  ]);


  useEffect(() => {
    fetchResource("user", undefined, 'GET', undefined,{},{})
        .then(jsonres => setUsers(jsonres));
 
  }, []);

//   let usersToRender;
//   if (users) {
//       usersToRender = users.map(user => {
//           return (
//             <div key={user.id}>
//                 <h4>{user.nickname}</h4>
//                 <p>{user.email} </p>
//             </div>
//           )
//       }); 
//   } else {
//       usersToRender = "Loading ...";
//   }
  

  return (
    <div className="userProfiles">
      <h2>Discover users</h2>
      <div className="userProfiles__userCard">
       {users && users.length > 0
       ? users.map(user => {
           return (
             <div>
              {user.nickname}
              {user.email}
              <Follow key={user.id} />
            </div>
           )
       })
       : "Loading..."
       }
      </div>
    </div>
  );
};

export default Discover;
