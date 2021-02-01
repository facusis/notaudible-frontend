import React from 'react';
import './UserCard.css';
import Avatar from '@material-ui/core/Avatar';

const UserCard = ({
    image,
    username,
    bio,
    books,
    followers,
    following,
    followed,
    location
}) => {

    return (
        <div className="userCard">
            <div className="userCard__info">
                <Avatar alt={username} src={image} className="userCard__avatar" /> <h5>{username} </h5>  
                <p>Bio: {bio} </p> 
                <h5> Books: {books} </h5>
                <h5>Followers: {followers} • Following: {following} </h5>
                <p>Location: {location} </p>
                <div className="userCard__follow">
                    {followed ? <p>Unfollow</p> : <p>Follow</p>}
                </div>
            </div>
            
        </div>
    )
}

export default UserCard;
