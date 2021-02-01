import React, { useEffect, useState, useContext } from "react";
import { UserContext } from "../../App";
import { useParams } from "react-router-dom";
import {fetchResource} from '../../api';

const UserProfile = () => {
  const [profile, setProfile] = useState();
  const { state, dispatch } = useContext(UserContext);
  const { userId } = useParams();
  const [showFollow, setShowFollow] = useState(false);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);

  // follow a user
  // unfollow a user
  // display the followers count on the user card
  // display the following count on the user card
  // pass info to the UserCard component
  // then render it on the Discover page

//   useEffect(() => {
//     fetch("http://localhost:3001/user/follow-user", {
//       headers: {
//         Authorization: "Bearer " + localStorage.getItem("jwt"),
//       },
//     })
//       .then((res) => res.json())
//       .then((res) => {
//         setFollowers(res);
//       });
//   }, []);
//   // fetch contra ruta /follower preguntando por el id del usuario
//   console.log(followers);

//   useEffect(() => {
//     fetch("http://localhost:3001/user/unfollow-user", {
//       headers: {
//         Authorization: "Bearer " + localStorage.getItem("jwt"),
//       },
//     })
//       .then((res) => res.json())
//       .then((res) => {
//         setFollowing(res);
//       });
//   }, []);

  const followUser = () => {
    fetchResource("user/follow-user", '', 'POST', {
      following: userId,
      follower: localStorage.getItem('id'),
    })
      .then((res) => res.json())
      .then((res) => {
        setFollowers(res);
      });
  };

  const unfollowUser = () => {
    fetchResource("user/unfollow-user", '', '', {
        following: userId,
        follower: localStorage.getItem('id'),
      })
        .then((res) => res.json())
        .then((res) => {
          setFollowers(res);
        });
 
  };

//   return (
//     <>
      {/* {userProfile ? (
        <div style={{ maxWidth: "550px", margin: "0px auto" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              margin: "18px 0px",
              borderBottom: "1px solid grey",
            }}
          >
            <div>
              <img
                style={{
                  width: "160px",
                  height: "160px",
                  borderRadius: "80px",
                }}
                src={userProfile.user.pic}
              />
            </div>
            <div>
              <h4>{userProfile.user.name}</h4>
              <h5>{userProfile.user.email}</h5>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "108%",
                }}
              >
                <h6>{userProfile.posts.length} books</h6>
                <h6>{userProfile.user.followers.length} followers</h6>
                <h6>{userProfile.user.following.length} following</h6>
              </div>
              {showFollow ? (
                <button
                  style={{
                    margin: "10px",
                  }}
                  className="btn waves-effect waves-light #64b5f6 blue darken-1"
                  onClick={() => followUser()}
                >
                  Follow
                </button>
              ) : (
                <button
                  style={{
                    margin: "10px",
                  }}
                  className="btn waves-effect waves-light #64b5f6 blue darken-1"
                  onClick={() => unfollowUser()}
                >
                  UnFollow
                </button>
              )}
            </div>
          </div>

          {/* <div className="gallery">
                {
                    userProfile.posts.map(item=>{
                        return(
                         <img key={item._id} className="item" src={item.photo} alt={item.title}/>  
                        )
                    })
                }
 
            
            // </div> */}
    //     </div>
    // //   ) : (
    //     <h2>loading...!</h2>
//       )} */}
//     </>
//   );
};

export default UserProfile;
