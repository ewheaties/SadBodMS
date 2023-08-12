import React from 'react';
import { Link } from 'react-router-dom';

import '/css/events.css';
import Joe from '/images/joe.jpeg';
 
  function JoeBio() {
    return (
      <div class="joe-grover"> 
      {/*** Alex Hall ***/}
      <div className="about-page-content-container">

        {/* Profile Sidebar Begins */}
        <aside className="about-profile-sidebar">

          <header>
            <h1 class="about-pic-title">Joe Grover</h1>
          </header>

          {/* Profile Picture */}
          <div className="profile-picture-container">
            <img class="profile-pic" src={Joe} alt="SadBod" />
            {/* <p className="personal-msg"><b>":-)"</b></p> */}

            <div class="profile-details-container">
    <ul className="gender-age">
      <li>Rythm Guitar</li>
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
          <section className="bandspace-url-box">
            <h3><b>BandSpace URL:</b></h3>
            <p>http://www.sadbod/joe.com</p>
          </section>

        </aside>
        <main>
 
          <section className="blurbs">
            <header className="main-section-header">
              <h2 className="main-section-h2">Joe's Blurbs</h2>
            </header>

            <h3>About me:</h3>
            <p>Born and raised in Jersey. I came up with the idea for an emo cover band in 2021, reached out to some of my buddies and now I'm in a cool band lol. I also host open mic nights at the Stamp Bar every thursday night, come jam with me!     
            <br />
            <strong> Founder of SadBod </strong>
            </p>

            <h3>Who I'd like to meet:</h3>
            <p> Aston “Family Man” Barrett </p>
          </section>

          <section className="comments">
            <header>
              <h2>Joe's Comments</h2>
            </header>

            <p><a href="#">Chloe</a> - Thank you for putting on cool shows and hosting open mic night, u da bomb! </p>

          </section>
        </main>

        </div>
      </div>
    );
  }
  
  export default JoeBio;