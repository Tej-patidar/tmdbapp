import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const CardId = () => {
    const [image, setImage] = useState([])
    const router=useRouter();
    const {id}=router.query;
    // console.log(router.query);

    const GetSingleImage = async (req,res) => {
        const data = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=90237f229568ba07f497594486e6cdef&language=en-US`);
        setImage(data.data);
        // console.log(data)
    }
    
    // console.log(setImage);


    useEffect(() => {
        GetSingleImage();
    }, [])
    return  (
        <div>
{/* <img src={image.backdrop_path} alt="" /> */}
            {image && image.map((i)=>(
                // console.log(i)
                <img
                key={i.id} src={`https://image.tmdb.org/t/p/w500/${i.backdrop_path}`} alt="" />
            ))}
            {/* <div className="card" style={{ width: "18rem" }}>
                <img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{image.title}</h5>
                    <button onClick={() => router.push('/')}>Go Home</button>
                </div>
            </div> */}

{/* : ("loading..."); */}
        </div>) 
};
export default CardId;





// path: https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US 

// api key : 90237f229568ba07f497594486e6cdef  