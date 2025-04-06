import React, { useState } from "react";
import axios from "axios";

// url =https://www.omdbapi.com/?i=tt3896198&apikey=d047c95

function Movie(){

    let [movies,setMovies]= useState();
    let [input,setInput]= useState("")

    async function handleClick(){

        let res = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=d047c95&t=${input}`)
        console.log(res.data)


        setMovies(res.data)

        console.log(movies)
    }

   




    return (
        <>
        <div>
            <label htmlFor="name" onChange={(inp) => setInput(inp.target.value)} value={input} >Enter movies:</label>
            <input type="text" placeholder="movies name"/>
            <button onClick={handleClick}>Search</button>
        </div>

        <div>
            <h2>moviess</h2>
            {movies && (
                <div>
                    
                   { movies.map(movie =>(

                        <div>
                            <h3>{movie.Title}</h3>
                            <img src={movie.Poster} alt="movie poster" />
                            <p>{movie.Year}</p>
                            
                        </div>
                    )}
                </div>
            )}
            </div>
        </>
    )
}

export default Movie