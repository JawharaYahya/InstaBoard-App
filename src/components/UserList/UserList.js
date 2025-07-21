import './UserList.css';
import { useState,useEffect } from "react";
import UserCard from "../UserCard/UserCard";
import axios from "axios";


export default function UserList(){
    const[users, setUsers]=useState([]);
    const fetchUsers =async ()=>{
const res= await axios.get("https://randomuser.me/api/?results=12");
setUsers((currentUsers) => [...currentUsers, ...res.data.results]);
    };
    useEffect(()=>{

       fetchUsers(); 
    },[]);

    return (
        <>
        <h2>Welcome to InstaBoard App</h2>
      <button onClick={fetchUsers} id='LoadMoreBtn'>Load More</button>
     <div id="userList">
         {users.map((user) => (
        <UserCard
          name={`${user.name.first} ${user.name.last}`}
          email={user.email}
          picture={user.picture.large}
        />
      ))}
    </div>
    
    </>
    );
} 