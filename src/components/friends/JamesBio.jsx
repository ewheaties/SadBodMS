import React from 'react';

import '/css/events.css';
import James from '/images/james.jpeg';
 
  function JamesBio() {
    return (
      <div class="james-foerst"> 
      {/*** Alex Hall ***/}
      <div className="page-content-container">

        {/* Profile Sidebar Begins */}
        <aside className="profile-sidebar">

          <header>
            <h1 class="about-pic-title">James Foerst</h1>
          </header>

          {/* Profile Picture */}
          <div className="profile-picture-container">
            <img class="profile-pic" src={James} alt="SadBod" />
           {/*  <p className="personal-msg"><b>":-)"</b></p> */}

            <ul className="gender-age">
              <li>Lead Guitar</li>
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
            <p>http://www.sadbod/jamesfoerst.com</p>
          </section>

        </aside>
        <main>
 
          <section className="blurbs">
            <header className="main-section-header">
              <h2 className="main-section-h2">James's Blurbs</h2>
            </header>

            <h3>About me:</h3>
            <p>Born in Jersey, Owner of Garage Pizza   
            <br />
            <strong> Founding member of SadBod </strong>
            </p>

            <h3>Who I'd like to meet:</h3>
            <p> The creator of pizza</p>
          </section>

          <section className="comments">
            <header>
              <h2>James's Comments</h2>
            </header>

            <p><a href="#">Amanda</a> - Why you always make me close Garage when you have a show :( </p>

          </section>
        </main>

        </div>
      </div>
    );
  }
  
  export default JamesBio;