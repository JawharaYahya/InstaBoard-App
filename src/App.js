import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
 } from 'react-router-dom';
 import NotFound from './pages/NotFound';
import About from './pages/About';
import Home from './pages/Home';
import Team from './components/Team/Team';
import TeamDetails from './components/TeamDetails/TeamDetails';
import Layout from './components/Layout';
import LikedUsers from'./components/LikedUsers';
import { useState } from 'react';

function App() {
  const[darkMode,setDarkMode]=useState(false);
  
  return (
   <div className='appContainer'>
<BrowserRouter>
<Routes>
  <Route path='/' element={<Layout darkMode={darkMode} setDarkMode={setDarkMode}><Home darkMode={darkMode}/></Layout>}/>
 <Route path='/about' element={<Layout darkMode={darkMode} setDarkMode={setDarkMode}><About darkMode={darkMode}/></Layout>}/>
  <Route path='/team' element={<Layout darkMode={darkMode} setDarkMode={setDarkMode}><Team darkMode={darkMode}/></Layout>}/>
   <Route path='/team/:id' element={<Layout darkMode={darkMode} setDarkMode={setDarkMode}><TeamDetails darkMode={darkMode}/></Layout>}/>
   <Route path='/liked-users' element={<Layout darkMode={darkMode} setDarkMode={setDarkMode}><LikedUsers darkMode={darkMode}/></Layout>}/>
   <Route path='*' element={<Layout darkMode={darkMode} setDarkMode={setDarkMode}><NotFound darkMode={darkMode}/></Layout>}/>
</Routes>
</BrowserRouter>
   </div>
  );
}

export default App;
