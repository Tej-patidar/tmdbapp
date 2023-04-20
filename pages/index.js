import React,{useEffect, useState} from 'react'
import axios from 'axios'
import Link from 'next/link'
const index = () => {
const [movies, setMovies] = useState([])
const popularmovies=async()=>{
    const {data}=await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=223667d1239871fc4b6eeef8d0d6def8&language=en-US&page=1`);
    setMovies(data.results);
// console.log(data.results);
  }
  useEffect(()=>{
    popularmovies();
  },[])
  return (
    <div>
      <ul className="nav-ul">
        <img
        width="50"
        src="./img1.jpg" alt="" />
        <li>Home</li>
        <li>Hot Shows</li>
        <li>Popular Shows</li>
      </ul>
      {movies && movies.map((m)=>(
        //  console.log(m)
        <h3  key={m.id} className={`container`}>
         <img
        height="200"
       
        src={`https://image.tmdb.org/t/p/w500/${m.backdrop_path}`} alt="" />

        
       <Link href={`/card/${m.id}`}> {m.title}</Link>
       </h3>
      ))}
    </div>
  )
}

export default index;