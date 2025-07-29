import Navigation from './Navigation';
import '../styles/Layout.css';

export default function Layout ({children,darkMode,setDarkMode}){
return(
<div className={darkMode ? "dark" : "light"}>
<Navigation />
<main>{children}</main>
<button onClick={()=>{setDarkMode(!darkMode)}
}>{darkMode? "🌞 Light Mode" : "🌙 Dark Mode"}</button>
<footer className='footer'>@2025 All right Reserved - InstaBoard</footer>
</div>

);
}