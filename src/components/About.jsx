import React from 'react';

import '/css/about.css';

import Alex from '/images/alex.jpeg';
import James from '/images/james.jpeg';
import Joe from '/images/joe.jpeg';
import Jeremy from '/images/jeremy.jpeg';
import Cameron from '/images/cameron.jpeg';

  function About() {
    return (

      <div class="about">
      <h1 class="about-title">About!</h1>

      {/*** Alex Hall ***/}
      <div className="page-content-container">

        {/* Profile Sidebar Begins */}
        <aside className="profile-sidebar">

          <header>
            <h1 class="about-pic-title">Alex Hall</h1>
          </header>

          {/* Profile Picture */}
          <div className="profile-picture-container">
            <img class="profile-pic" src={Alex} alt="SadBod" />
            <p className="personal-msg"><b>":-)"</b></p>

            <ul className="gender-age">
              <li>Lead Singer</li>
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

          {/* MySpace URL */}
          <section className="myspace-url-box">
            <h3><b>MySpace URL:</b></h3>
            <p>http://www.sadbod/alexhall.com</p>
          </section>

        </aside>
        <main>
 
          <section className="blurbs">
            <header className="main-section-header">
              <h2 className="main-section-h2">SadBod's Blurbs</h2>
            </header>

            <h3>About me:</h3>
            <p>I have always had a passion for music! Mom taught me how to sing as a kid and when I was 13 I taught myself how to play guitar and starting writing songs. I played saxophone in high school and at the time joined my first band was NaCl in 2015, then joined Distant Youth in 2019.  
            <br />
            <strong> Founding member of SadBod </strong>
            </p>

            <h3>Who I'd like to meet:</h3>
            <p> Hailey Williams</p>
          </section>

          <section className="comments">
            <header>
              <h2>SadBod's Comments</h2>
            </header>

            <p><a href="#">James</a> - Thanks for helping me with my CSS. It looked like crap till you came along. :)</p>

          </section>
        </main>

        </div>
      {/*** Page Ends ***/}  
      </div>
    );
  }
  
  export default About;