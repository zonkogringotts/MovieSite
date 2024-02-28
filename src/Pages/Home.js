
import '../Styles/Home.css';
import React, {useEffect, useState} from 'react';


export default function Home() {
  const [trend,setTrending] = useState([])
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTZjOTgwOTNjNzUyYzUzNDY0NWQyZTJlOWM3ZjJmNCIsInN1YiI6IjY1ZGYwY2E1OGM0NGI5MDE3YzE0NWVmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C3NbNqdAhvvQGL6t1bBwaRT_KYyRZNx_7XpnY9_Bxsw'
    }
  };
  
  const getTrending = () =>{
    fetch('https://api.themoviedb.org/3/trending/movie/week?language=en-UK', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  };
  useEffect(() =>{
    getTrending()

  },)
  return (
    <div className = "grid-container">
      <div className="welcome-container">
      <h1>Welcome</h1>
      <h2>From blockbusters to hidden gems. Find your next movie.</h2>
      </div>
      <div className="trending-container">
      <h1>Trending</h1>
      </div>
      <div className="trailers-container">
      <h1>Trailers</h1>
      
      </div>
      <div className = "popular-container">
        <h1>Popular</h1>
      </div>
        
    </div>
  );
}

 
