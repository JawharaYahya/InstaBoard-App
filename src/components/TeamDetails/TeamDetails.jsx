import { useLocation } from "react-router-dom";
import './TeamDetails.css';
export default function TeamDetails(){
    const location = useLocation();
    const user=location.state?.user;
    if(!user){
        return (
            <h2>No user data found, go back and try again</h2>
        );
    }
    const {
        name:{first,last},
        gender,
        phone,
        email,
        picture:{large},
        location:{city,country},
        login:{username}


    }=user;
    return (
<div className="teamDetailsContainer">
<h3>{first} {last}'s profile</h3>
<img src={large} alt="User Profile" width={100}/>
<p><strong>Email:</strong> {email}</p>
<p><strong>Username:</strong> {username}</p>
<p><strong>Phone:</strong> {phone}</p>
<p><strong>Gender:</strong> {gender}</p>
<p><strong>Location:</strong> {city}, {country}</p>

</div>

    );
}