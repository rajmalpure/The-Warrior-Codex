import React from 'react';
import './Home.css'
function Home() {
  return (
    <div className="home-content">
      
      
      <div className="nav">
        <h1>LIST OF WARRIORS</h1>

        <input className="search-bar"
            type="text"
            placeholder="  Enter the warrier name"
          />
      </div>

      <div className="photo">
        <img src="https://rukminim2.flixcart.com/image/850/1000/knoxnrk0/painting/7/j/v/12-dd058-dbrush-original-imag2bghcgd4kxwg.jpeg?q=20&crop=false" alt="" />
      </div>

      <div className="content">
       <h2>Chhatrapati Shivaji Maharaj</h2>
       <ul>
        <li>Birth year - 1630</li>
        <li>Death year- 1680</li>
        <li>State -Maharashtra</li>
        <li>Famous battle - Battle of Pratapgad</li>
       </ul>
     
      </div>

    </div>
    
  );
}

export default Home;
