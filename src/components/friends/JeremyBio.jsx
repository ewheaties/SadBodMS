import React from 'react';

import '/css/events.css';
import Joe from '/images/jeremy.jpeg';
 
  function JeremyBio() {
    return (
      <div class="joe-grover"> 
      {/*** Alex Hall ***/}
      <div className="page-content-container">

        {/* Profile Sidebar Begins */}
        <aside className="profile-sidebar">

          <header>
            <h1 class="about-pic-title">Jeremy Rodriguez</h1>
          </header>

          {/* Profile Picture */}
          <div className="profile-picture-container">
            <img class="profile-pic" src={Joe} alt="SadBod" />
            {/* <p className="personal-msg"><b>"drivin' the bus"</b></p> */}

            <ul className="gender-age">
              <li>Bass Guitar</li>
              <li>Vero Beach,</li>
              <li>FLORIDA</li>
              <li>United States</li>
            </ul>

            <ul className="last-login">
              <li>Last Login:</li>
              <li>4/22/2006</li>
            </ul>

            <p className="pics-videos">View My: <a href="#"><b>Pics</b></a> | <a href="#"><b>Videos</b></a></p>
          </div>

          {/* BandSpace URL */}
          <section className="bandspace-url-box">
            <h3><b>BandSpace URL:</b></h3>
            <p>http://www.sadbod/jeremyrodriguez.com</p>
          </section>

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