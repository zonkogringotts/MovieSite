
import logo from '../Assets/logoTemp.jpg';
import login from '../Assets/login.jpg';
import searchBtn from '../Assets/search.png';
import { NavLink } from 'react-router-dom';
export default function Navbar() {
  //  window.onload = () =>{
  // // const menu_btn = document.querySelector('.menu-btn');
  //  const navMenu = document.querySelector('li');

  //  navMenu.addEventListener("click",() =>{
    
  //    navMenu.classList.toggle("active");
  //    console.log("clicked");
  //  })}

  return (
    <nav className="nav">
      <img className = "logo" src = {logo}/>
    
      <ul className = "nav-menu">
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>

        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>

        <li>
          <NavLink to="/actors">Actors</NavLink>
        </li>

         
          
        
      </ul>
      <div className = "searchBar">
            <img src = {searchBtn}/>
            <input type = "search"/>
        
          </div>
        

        
          
        <img style ={{width:"25px"}} className = "loginBtn"src = {login}/>
      {/* <div class="menu-btn">
          <div className="btn-line"></div>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
        </div> */}

    </nav>
  );
}

 
