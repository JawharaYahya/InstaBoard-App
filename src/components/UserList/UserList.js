import './UserList.css';
import { useState,useEffect } from "react";
import UserCard from "../UserCard/UserCard";
import axios from "axios";


export default function UserList(){
    const[users, setUsers]=useState([]);
    const [search,setsearch]=useState("");
    const fetchUsers =async ()=>{
const res= await axios.get("https://randomuser.me/api/?results=12");
setUsers((currentUsers) => [...currentUsers, ...res.data.results]);
    };
const filterUsers= users.filter((user)=>`${user.name.first} ${user.name.last}`.toLocaleLowerCase().includes(search.toLocaleLowerCase()));
    useEffect(()=>{

       fetchUsers(); 
    },[]);

    return (
       
      <div className={"userListContainer"}>
        <h2>Welcome to InstaBoard App</h2>
      <div className='searchSection'>
      <h2>Find Your InstaBoard Bestie </h2>
     <input type='text'
     placeholder='Search by Name'
     value={search}
     onChange={(e)=>setsearch(e.target.value)}
     id='search'
     />

     </div>
    
    
     <div id="userList">
         {filterUsers.map((user,index) => (
        <UserCard
        key={index} user={user}
        />
      ))}
    </div>
    <div className='seeMorebtn'>
     <h2>See More Users </h2>
      <button onClick={fetchUsers} id='LoadMoreBtn'>Load More</button>
      </div>
      </div>
   
    );
} 