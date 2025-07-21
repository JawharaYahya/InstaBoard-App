import './UserCard.css';
import { useState } from "react";

export default function UserCard({name, email,picture}) {
    const [likes , setLikes]= useState(0);
    const [showEmail , setshowEmail]= useState(false);
    

    return(

<div id="userCard" > 
<h3>{name}</h3>
<button onClick={()=>{setshowEmail(!showEmail)}}>Show/Hide Email</button>
{showEmail && <p>{email}</p>}
<img src={picture} alt="pic" width={150}/>
<h3>Likes {likes}</h3>
<button onClick={()=>{setLikes(likes+1)}}>Like</button>
<button onClick={()=>{setLikes(likes-1)}}>Unlike</button>

</div>

    );
}