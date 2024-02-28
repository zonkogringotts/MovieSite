// const baseUrl = "";
// const apiKey = "api_key=8e6c98093c752c534645d2e2e9c7f2f4"
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTZjOTgwOTNjNzUyYzUzNDY0NWQyZTJlOWM3ZjJmNCIsInN1YiI6IjY1ZGYwY2E1OGM0NGI5MDE3YzE0NWVmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.C3NbNqdAhvvQGL6t1bBwaRT_KYyRZNx_7XpnY9_Bxsw'
  }
};

// const getTrending = () =>{
//   fetch('https://api.themoviedb.org/3/trending/movie/week?language=en-UK', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));
// };