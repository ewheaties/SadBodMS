import React from 'react';
import { Link } from 'react-router-dom';

/* import DaggerLeft from '/images/dagger1.png';
import DaggerRight from '/images/dagger2.png';
*/
import '/css/header.css'; 

import Smiley from '/images/smiley.png'; 

  function Header() {

    return (
    <div> 
    {/* Main Header Begins */}
    <header className="main-header">
      
    <nav className="search-bar">
      <ul className="topnav home">
        {/* <li> */}<a href="#">SadBod.com</a>{/* </li> */}
        {/* <li><a href="#">Home</a></li> */}
      </ul>

     <form>
        <label>
          The Web
          <input type="radio" name="search-type" value="the-web" />
        </label>

        <label>
          BandSpace
          <input type="radio" name="search-type" value="bandspace" />
        </label>

        <label>
          <input type="text" name="search" />
        </label>

        <input className="submit-btn" type="submit" name="submit-button" value="Search" />
      </form>

      <ul className="topnav signup">
        <li><a href="#">Help</a></li>
        <li><a href="#">SignUp</a></li>
      </ul> 
    </nav>

    <nav class="smiley-nav">
      <img class="smiley-pic-left" src={Smiley} alt="SadBod" />
      <h1 class="title-nav">SadBod</h1>
      <img class="smiley-pic-right" src={Smiley} alt="SadBod" />
    </nav>

    <nav className="navbar">
      <ul>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
              <li>
                <Link to="/Media">Media</Link>
              </li>
              <li>
                <Link to="/Merch">Merch</Link>
              </li>
              <li>
                <Link to="/Events">Events</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>       
          </nav>
      </header>

      </ul>
    </nav>
  </header>
  {/* Main Header Ends */}
  </div> 
    );
  }
  
  export default Header;