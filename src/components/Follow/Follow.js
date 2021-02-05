import React, { useEffect, useState} from "react";
import {fetchResource} from '../../api';

const Follow = (props) => {

    const [following, setFollowing] = useState(false);

    const [followId, setFollowId] = useState('');

// to fetch the data of the user that I want to follow
    // const fetchUserData = () => {
    //     fetch(`http://localhost:3001/user/${id}`)
    //         .then(res => res.json())
    //         .then(data => setUser(data))
    // };

    // useEffect(() => {
    //     fetchUserData()
    // }, []);

    console.log(props.user._id); // from Discover component


    const unFollow = () => {
        fetchResource('data/follow', followId._id, 'DELETE', {})
        setFollowing(false);
        console.log('Unfollowed');
    };

    console.log(followId._id);

    const handleFollow = () => {
        fetch(`https://notaudible.herokuapp.com/user/follow`, {
            method: "POST",
            body:  JSON.stringify({
                follower: localStorage.getItem('id'),  // logged user id
                following: props.user._id
            }),
            headers: {
                "Content-type": "application/json",
                "Authorization": `bearer ${localStorage.getItem("token")}`,
            },

        })
        .then((res) => res.json())
        .then((res) => {
            setFollowId(res);
            setFollowing(true);
            console.log('Follwed')
    });
};

    const showFollowButton =  following ?
    (<button onClick={unFollow}>Unfollow</button>)
    : 
    (<button onClick={handleFollow}>Follow</button>)

    return (
        <div>
         {props.user._id === localStorage.getItem('id') ? null : showFollowButton }
        </div>
    );

};

export default Follow;