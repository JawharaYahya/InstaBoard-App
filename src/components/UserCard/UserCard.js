import { Link } from 'react-router-dom';
import './UserCard.css';
import { useState } from "react";

export default function UserCard({user}) {
    const [likes , setLikes]= useState(0);
    const [showEmail , setshowEmail]= useState(false);
    const {name, email,picture}=user;
    return(

<div id="userCard" > 
<h3>{name.first} {name.last}</h3>
<button onClick={()=>{setshowEmail(!showEmail)}}>Show/Hide Email</button>
{showEmail && <p>{email}</p>}
<img src={picture.large} alt="pic" width={150}/>
<h3>Likes {likes}</h3>
<button onClick={()=>{setLikes(likes+1)}}>Like</button>
<button onClick={()=>{setLikes(likes-1)}}>Unlike</button>
<Link to={`/team/${user.login.uuid}`} state={{user}}>View Profile</Link>

</div>

    );
}