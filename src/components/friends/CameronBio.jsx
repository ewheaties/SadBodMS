import React from 'react';
import { Link } from 'react-router-dom';

import '/css/events.css';
import Joe from '/images/cameron.jpeg';

import FacebookLink from '../widgets/FacebookLink'; 
import InstagramLink from '../widgets/InstagramLink'; 
 
  function CameronBio() {
    const facebookLink = 'https://www.facebook.com/kitchwamadd';
    const instagramLink = 'https://www.instagram.com/kitchwamadd/';
    return (
      <div class="joe-grover"> 
      {/*** Alex Hall ***/}
      <div className="about-page-content-container">

        {/* Profile Sidebar Begins */}
        <aside className="about-profile-sidebar">

          <header>
            <h1 class="about-pic-title">Cameron Schneider</h1>
          </header>

          {/* Profile Picture */}
          <div className="profile-picture-container">
            <img class="profile-pic" src={Joe} alt="SadBod" />
            {/* <p className="personal-msg"><b>"also drivin' the bus"</b></p> */}

            <div class="profile-details-container">
    <ul className="gender-age">
      <li>Drummer</li>
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
            <p>http://www.sadbod/cameron.com</p>
          </section> */}

        </aside>
        <main>
 
          <section className="blurbs">
            <header className="main-section-header">
              <h2 className="main-section-h2">Cameron's Blurbs</h2>
            </header>

            <h3>About me:</h3>
            <p>Been playing drums my whole life basically, was so excited when Joe reached out to me cause now I get to play my favorite emo songs all the time! I am also the man with all the equipment, big ole' speakers, and ts t ta tss!    
            <br />
            <strong> Founding Member of SadBod </strong>
            </p>

            <h3>Who I'd like to meet:</h3>
            <p> Travis Barker </p>
          </section>

          <section className="comments">
            <header>
              <h2>Cameron's Comments</h2>
            </header>

            <p><a href="#">Felicia</a> - Saw you at the last show and now I want your autograph! </p>

          </section>
        </main>

        </div>
      </div>
    );
  }
  
  export default CameronBio;