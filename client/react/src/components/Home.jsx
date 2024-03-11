import React, { useState, useEffect } from 'react';
import './Home.css';
import axios from 'axios';

function Home() {

  const [warriorData, setWarriorData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://list-of-warrriors.onrender.com/get');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setWarriorData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    
    <div className="home-content">
      
      
      <div className="nav">
        <h1>LIST OF WARRIORS</h1>

        <input className="search-bar"
            type="text"
            placeholder="  Enter the warrier name"
          />
      </div>

      <div className="container">
        {warriorData.map(warrior => (
            <div className="card">
              <div className="image">
                <img src={warrior.Image} alt="" />
              </div>
              <div className="info">
                <h2><strong className='f'>{warrior.Warrior}</strong></h2>
                <ul>
                <li>Birth year: {warrior.BirthYear}</li>
                <li>Death year: {warrior.DeathYear}</li>
                <li>State: {warrior.State}</li>
                <li>Famous battle: {warrior.FamousBattle}</li>
                </ul>

            
              </div>
            </div>
         
        ))}
      </div>

    </div>
    
  );
}

export default Home;
