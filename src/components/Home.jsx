import React from 'react';
/* import '/css/home.css';
 */
import Alex from '/images/alex.jpeg';
import James from '/images/james.jpeg';
import Joe from '/images/joe.jpeg';
import Jeremy from '/images/jeremy.jpeg';
import Cameron from '/images/cameron.jpeg';
import MainProfile from '/images/bandcover.jpeg';

  function Home() {
    return (
      <div class="home">
      <div className="page-content-container">

{/* Profile Sidebar Begins */}
<aside className="profile-sidebar">

  <header>
    <h1 class="page-title">SadBod</h1>
  </header>

  {/* Profile Picture */}
  <div className="profile-picture-container">
    {/* <img className="profile-pic" src="pictures/tom-pic.jpg" alt="A profile picture of Tom, the creator of MySpace." /> */}
    <img class="profile-pic" src={MainProfile} alt="SadBod" />
    <p className="personal-msg"><b>":-)"</b></p>

    <ul className="gender-age">
      <li>Emo Tribute Band</li>
      <li>est. 2022</li>
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

  {/* Contact Box */}
  <section className="contact-box">
    <h2>Contacting SadBod</h2>

    <figure className="contact-images">
      <img src="pictures/sendMailIcon.gif" alt="Send Message" />
      <img src="pictures/forwardMailIcon.gif" alt="Forward to Friend" />
      <img src="pictures/addFriendIcon.gif" alt="Add to Friends" />
      <img src="pictures/addFavoritesIcon.gif" alt="Add to Favorites" />
      <img src="pictures/messagefriend.gif" alt="Instant Message" />
      <img src="pictures/blockUser.gif" alt="Block User" />
      <img src="pictures/addToGroupIcon.gif" alt="Add to Group" />
      <img src="pictures/rankUserIcon.gif" alt="Rank User" />
    </figure>
  </section>

  {/* MySpace URL */}
  <section className="myspace-url-box">
    <h3><b>MySpace URL:</b></h3>
    <p>http://www.sadbod.com</p>
  </section>

  {/* Interests Section */}
  <section className="interests">
    <table className="sidebar-table">

      <caption>
        <h2 className="sidebar-table-h2">SadBod's Interests</h2>
      </caption>

      <tbody>
        <tr>
          <th className="sidebar-table-header" scope="row">Music</th>
          <td className="sidebar-table-data">
            <p><b>Bands</b>: Blink-182, Paramore, Taking Back Sunday, Brand New, Metro Station, Good Charlotte, Neck Deep, American Hi-Fi, 3OH!3, Modern Baseball, The Front Bottoms, Hawthorne Lights, The Spill Canvas </p>
            {/* <p><b>Solo Artists</b>: </p>
            <p><b>Singers</b>: </p>
            <p><b>Albums</b>: </p>
            <p><b>Instruments</b>: </p> */}
          </td>
        </tr>
      </tbody>
    </table>
  </section>

  {/* SadBod's Details Section */}
  <section className="details">
    <table className="sidebar-table">

      <caption>
        <h2 className="sidebar-table-h2">SadBod's Details</h2>
      </caption>

      <tbody>
        <tr>
          <th className="sidebar-table-header" scope="row">Status:</th>
          <td className="sidebar-table-data">Single :( </td>
        </tr>

        <tr>
          <th className="sidebar-table-header" scope="row">Here For:</th>
          <td className="sidebar-table-data">Networking, Friends, Headbanging</td>
        </tr>

        <tr>
          <th className="sidebar-table-header" scope="row">Hometown:</th>
          <td className="sidebar-table-data">Vero Beach</td>
        </tr>

        <tr>
          <th className="sidebar-table-header" scope="row">Occupation:</th>
          <td className="sidebar-table-data">Being Emo</td>
        </tr>
      </tbody>
    </table>
  </section>

  
</aside>
{/* Profile Side Bar Ends */}

{/* Main Section */}
<main>

  <section className="user-network">
    <header>
      <h2>SadBod is in your extended network</h2>
    </header>
  </section>

  <section className="blog">
    {/* <p><b>SadBod's Latest Blog Entry</b> [<a href="#">Subscribe to this Blog</a>]</p>
    <p>MySpace Concert & Parties -Georgia, Orlando, Miami! (<a href="#">view more</a>) </p>
    <p>In Stores Today - MySpace Records Vol. 1 ! (<a href="#">view more</a>) </p>
    <p>MySpace Records - get more photos for your profile! (<a href="#">view more</a>) </p>
    <p>October 29th - MySpace 2-Year Anniversary Concert! (<a href="#">view more</a>) </p>
    <p>NIN, QOTSA, Acoustic and Punk Tours (!) (<a href="#">view more</a>)</p>
    <p>[<a href="#">View All Blog Entries</a>]</p> */}
  </section>

  <section className="blurbs">
    <header className="main-section-header">
      <h2 className="main-section-h2">SadBod's Blurbs</h2>
    </header>

    <h3>About me:</h3>
    <p>What brings us together is a passion for emo and pop punk music. We play all the favorites, from Metro Station to Blink-182, we got it all and jam all over the Treasure Coast! 
        <strong> come get emo with us some time! </strong>
    </p>
    {/* <span className="info">Before asking me a question, please check the <a href="#">FAQ</a> to see if your question has already been answered.</span>*/}

    <h3>Who I'd like to meet:</h3>
    <p> You at our next show ;) </p>
  </section>

  <section className="comments">
    <header>
      <h2>SadBod's Comments</h2>
    </header>

    <p><a href="#">James</a> - Thanks for helping me with my CSS. It looked like crap till you came along. :)</p>

  </section>

  <section className="friends">
    <header className="main-section-header">
      <h2 className="main-section-h2">SadBod's Friends</h2>
    </header>

    <ul className="friend-picture-container">
      <li>
        <h3>Alex Hall</h3>
        <img class="friend-pic" src={Alex} alt="SadBod's friend" />
      </li>
      <li>
        <h3>James Foerst</h3>
        <img class="friend-pic" src={James} alt="SadBod's friend" />               
      </li>
      <li>
        <h3>Joe Grover</h3>
        <img class="friend-pic" src={Joe} alt="SadBod's friend" />
      </li>
      <li>
        <h3>Jeremy Rodriguez</h3>
        <img class="friend-pic" src={Jeremy} alt="SadBod's friend" />
      </li>
      <li>
        <h3>Cameron Schneider</h3>
        <img class="friend-pic" src={Cameron} alt="SadBod's friend" /> 
      </li>  
    </ul>
    <p><a href="#">View All of SadBod's Friends</a></p>
  </section> 

{/*           <section className="testimonial">
    <h2>Testimonial</h2>
    <p>"SadBod is amazing. My long lost friend <a href="#">Scott</a> found me through MySpace.</p>
    <p><b>- Elisa</b></p>
  </section> */}
</main>
{/* Main Section Ends */}
</div>
{/* Page Content Container Ends */}
      </div>
    );
  }
  
  export default Home;