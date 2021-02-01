import React, {useState, useEffect} from 'react';
import './Discover.css';
import UserCard from '../UserProfile/UserCard';
import fetchResource from '../../api/index';

const Discover = () => {

    const [users, setUsers] = useState([
        {
            username: '',
            email: ''
        }
    ]);

    useEffect(() => {
        fetch('user/').then((res) => {
            if(res.ok) {
                return res.json()
            }
        }).then((jsonres) => setUsers(jsonres));
    })

    return (
        <div className="userProfiles">

            <h2>Discover users</h2>
            <div className="userProfiles__userCard">
                {users.map(user =>          
                        <h4>{user.username}</h4>
                        <p>{user.email} </p>
                    )}
                <UserCard 
                    image="https://images-eu.ssl-images-amazon.com/images/I/516amHGbqjL._AC_UL600_SR432,600_.jpg"
                    username="Cool Reader 1"
                    bio="My hobbies are breakfast, lunch, and dinner topped with a chocolate dessert"
                    books="3000"
                    followers="10K"
                    following="1K"
                    followed={false}
                    location="New York City"
                />

                <UserCard 
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK472Hb1izyGX0WCP9oDj-wZMxeCKO9ICdGQ&usqp=CAU"
                    username="Cool Reader 2"
                    bio="I might look like I’m doing nothing, but in my head, I’m quite busy."
                    books="4000"
                    followers="11K"
                    following="2K"
                    followed
                    location="Hong Kong"
                />

                    <UserCard 
                    image="https://i.ebayimg.com/images/g/iY4AAOSwDIxddo5c/s-l300.jpg"
                    username="Cool Reader 3"
                    bio="Words cannot express my passion and love for Fridays."
                    books="5000"
                    followers="120K"
                    following="20K"
                    followed={false}
                    location="Chicago"
                />

                <UserCard 
                    image="https://www.cael.ca/wp-content/uploads/2020/11/106116.jpg"
                    username="Cool Reader 4"
                    bio="Just keep reading."
                    books="3005"
                    followers="100K"
                    following="1K"
                    followed
                    location="London"
                />

                <UserCard 
                    image="https://online.merrimack.edu/wp-content/uploads/2019/04/MCMED_5-Reasons-REading-is-So-Important-to-Student-Success.jpg"
                    username="Cool Reader 5"
                    bio="Time is precious, waste it wisely."
                    books="1008"
                    followers="10K"
                    following="5K"
                    followed={false}
                    location="Paris"
                />

                <UserCard 
                    image="https://blog.edmentum.com/sites/blog.edmentum.com/files/styles/blog_image/public/images/reading%20for%20skill%20and%20reading%20for%20pleasure.png?itok=K2cJzqxr"
                    username="Cool Reader 6"
                    bio="I would rather die of passion than of boredom."
                    books="475"
                    followers="1K"
                    following="372"
                    followed={false}
                    location="Tokyo"
                />

                <UserCard 
                    image="https://images.theconversation.com/files/361577/original/file-20201005-18-lmf7w7.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"
                    username="Cool Reader 7"
                    bio="Whether you think you can or you think you can’t, you’re right."
                    books="34539"
                    followers="12K"
                    following='1.5K'
                    followed={false}
                    location="Kunming"
                />

                <UserCard 
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCVZZSnq1rcQYjY0Wi95LFPTWq2IloFkvaPA&usqp=CAU"
                    username="Cool Reader 8"
                    bio="Wanting to be someone else is a waste of who you are."
                    books="6974"
                    followers="11.8K"
                    following="1.9K"
                    followed={false}
                    location="Barcelona"
                />

                <UserCard 
                    image="https://i0.wp.com/bestfitnessinfo.in/wp-content/uploads/2019/05/sleep-music-gettyimages-627000140.jpg?fit=643%2C482&ssl=1"
                    username="Cool Reader 9"
                    bio="Creativity solves everything."
                    books="6005"
                    followers="15K"
                    following="2K"
                    followed
                    location="Dubai"
                />
            </div>
        </div>
    )
}

export default Discover;
