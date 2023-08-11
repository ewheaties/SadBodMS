import React from 'react';
import { Link } from 'react-router-dom';

import '/css/events.css';
import Alex from '/images/alex.jpeg';
 
  function AlexBio() {
    return (
      <div class="alex-hall"> 
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

            <p className="pics-videos">View My: 
              <li>
                <Link to="/Media">Pics</Link>
              </li><li>
                <Link to="/Media">Videos</Link>
              </li>{/* <a href="#"><b>Pics</b></a> | <a href="#"><b>Videos</b></a> */}</p>
          </div>

          {/* BandSpace URL */}
          <section className="bandspace-url-box">
            <h3><b>BandSpace URL:</b></h3>
            <p>http://www.sadbod/alex.com</p>
          </section>

        </aside>
        <main>
 
          <section className="blurbs">
            <header className="main-section-header">
              <h2 className="main-section-h2">Alex's Blurbs</h2>
            </header>

            <h3>About me:</h3>
            <p>I have always had a passion for music! Mom taught me how to sing as a kid. When I was 13 I taught myself how to play guitar and starting writing songs. I played saxophone in high school and at the time joined my first band NaCl in 2015, then joined Distant Youth in 2019.  
            <br />
            <strong> Founding member of SadBod </strong>
            </p>

            <h3>Who I'd like to meet:</h3>
            <p> Hailey Williams</p>
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