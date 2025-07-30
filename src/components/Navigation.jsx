import '../styles/Layout.css';
import { Link } from "react-router-dom"
export default function Navigation(){
    return(
<nav className="navBar">
  <Link to={"/"} className='link'>Home</Link> {"     "} 
  <Link to={"/about"} className='link'>About</Link> {"     "}
  <Link to={"/team"} className='link'>Team</Link>

</nav>

);}