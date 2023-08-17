import React from 'react';
import { Link } from 'react-router-dom';

import '/css/events.css';
import Joe from '/images/jeremy.jpeg';

import FacebookLink from '../widgets/FacebookLink'; 
import InstagramLink from '../widgets/InstagramLink'; 
 
  function JeremyBio() {
    const facebookLink = 'https://www.facebook.com/thatkrazyguy';
    const instagramLink = 'https://www.instagram.com/f0ll0w.thru/';
    return (
      <div class="joe-grover"> 
      {/*** Alex Hall ***/}
      <div className="about-page-content-container">

        {/* Profile Sidebar Begins */}
        <aside className="about-profile-sidebar">

          <header>
            <h1 class="about-pic-title">Jeremy Rodriguez</h1>
          </header>

          {/* Profile Picture */}
          <div className="profile-picture-container">
            <img class="profile-pic" src={Joe} alt="SadBod" />
            {/* <p className="personal-msg"><b>"drivin' the bus"</b></p> */}

            <div class="profile-details-container">
    <ul className="gender-age">
      <li>Bass Guitar</li>
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
          {/* <section className="bandspace-url-box">
            <h3><b>BandSpace URL:</b></h3>
            <p>http://www.sadbod/jeremy.com</p>
          </section> */}

        </aside>
        <main>
 
          <section className="blurbs">
            <header className="main-section-header">
              <h2 className="main-section-h2">Jeremy's Blurbs</h2>
            </header>

            <h3>About me:</h3>
            <p>I met Alex Hall when I was 15 and we've been best buds ever since! Joined North Current before SadBod    
            <br />
            <strong> Founding Member of SadBod </strong>
            </p>

            <h3>Who I'd like to meet:</h3>
            <p> Les Claypool </p>
          </section>

          <section className="comments">
            <header>
              <h2>Jeremy's Comments</h2>
            </header>

            <p><a href="#">Ashley</a> - I go crazy for bassists with long hair!! </p>

          </section>
        </main>

        </div>
      </div>
    );
  }
  
  export default JeremyBio;