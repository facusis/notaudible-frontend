import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {fetchResource} from '../../api';
import decode from 'jwt-decode';

const Follow = () => {

    const { id } = useParams();
   // const [user, setUser] = useState([]);
    const loggedUser = decode(localStorage.getItem('token'));
    const userId = loggedUser._id;
    const [following, setFollowing] = useState(false);


// to fetch the data of the user that I want to follow
    // const fetchUserData = () => {
    //     fetch(`http://localhost:3001/user/${id}`)
    //         .then(res => res.json())
    //         .then(data => setUser(data))
    // };

    // useEffect(() => {
    //     fetchUserData()
    // }, []);

    const unFollow = () => {
        fetch(`http://localhost:3001/user/follow`, {
            method: "POST",
            body:  JSON.stringify({
                follower: userId,  // logged user id
                following: id
            }),
            headers: {
                "Content-type": "application/json",
                "Authorization": `bearer ${localStorage.getItem("token")}`,
            },
            })
            .then(res => res)
            .then(data => setFollowing(false))
    };

    const handleFollow = () => {
        fetch(`http://localhost:3001/user/follow`, {
            method: "POST",
            body:  JSON.stringify({
                follower: userId,  // logged user id
                following: id
            }),
            headers: {
                "Content-type": "application/json",
                "Authorization": `bearer ${localStorage.getItem("token")}`,
            },
                    
        })
        .then(res => res.json())
        .then(() =>   
            setFollowing(true))
    };

    return (
        <div>
            {/* {user.nickname} */}
            {following ?
            (<button onClick={unFollow()}>Unfollow</button>)
            : 
            (<button onClick={handleFollow()}>Follow</button>)
            }

        </div>
    );

};

export default Follow;
