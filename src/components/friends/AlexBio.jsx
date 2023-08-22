import React from 'react';
import { Link } from 'react-router-dom';

import '/css/events.css';
import Alex from '/images/friend-pics/alex.jpeg';

import FacebookLink from '../widgets/FacebookLink'; 
import InstagramLink from '../widgets/InstagramLink'; 

  function AlexBio() {
    const facebookLink = 'https://www.facebook.com/profile.php?id=100008202695551';
    const instagramLink = 'https://www.instagram.com/alex13hall/';
    return (
      <div id="alex-hall"> 
      {/*** Alex Hall ***/}
      <div className="about-page-content-container">

        {/* Profile Sidebar Begins */}
        <aside className="about-profile-sidebar">

          <header>
            <h1 class="about-pic-title">Alex Hall</h1>
          </header>

          {/* Profile Picture */}
          <div className="profile-picture-container">
            <img class="profile-pic" src={Alex} alt="SadBod" />
            {/* <p className="personal-msg"><b>"you ain't lyin brother"</b></p> */}

            <div class="profile-details-container">
    <ul className="gender-age">
      <li>Lead Singer</li>
      {/* <li>est. 2022</li> */}
      <li>Vero Beach,</li>
      <li>FLORIDA</li>
      {/* <li>United States</li> */}
    </ul>

    <ul className="last-login">
      <li>Last Login:</li>
      <li>4/22/2006</li>
    </ul>
    </div>

            <p className="pics-videos-about">View My: 
              <li>
                <Link to="/Media">Pics</Link>
              </li><li>
                <Link to="/Media">Videos</Link>
              </li>{/* <a href="#"><b>Pics</b></a> | <a href="#"><b>Videos</b></a> */}</p>
          </div>

          {/* BandSpace URL */}
          <div class="socials-container">
          <FacebookLink facebookLink={facebookLink} />
          <InstagramLink instagramLink={instagramLink} />
          </div>
{/*           <section className="bandspace-url-box">
            <h3><b>BandSpace URL:</b></h3>
            <p>http://www.sadbod/alex.com</p>
          </section> */}

        </aside>
        <main>
 
          <section className="blurbs">
            <header className="main-section-header">
              <h2 className="main-section-h2">Alex's Blurbs</h2>
            </header>

            <h3>About me:</h3>
            <p>666 party with the devil bitch 
            <br />
            <strong> Founding member of SadBod </strong>
            </p>

            <h3>Who I'd like to meet:</h3>
            <p> your mom</p>
          </section>

          <section className="comments">
            <header>
              <h2>Alex's Comments</h2>
            </header>

            <p><a href="#">Elisa</a> - Ya'll always kill it at every show! The energy is unmatched and the mosh pits are real</p>

          </section>
        </main>

        </div>
      </div>
    );
  }
  
  export default AlexBio;