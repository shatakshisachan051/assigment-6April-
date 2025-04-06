import React from "react";
import axios from "axios";

// url =https://www.omdbapi.com/?i=tt3896198&apikey=d047c95

function Movie(){

    let [input,setInput]= useState("")

    async function handleClick(){

        let res = await axios.get(`https://www.omdbapi.com/?i=tt3896198&apikey=d047c95&y=2006`)
        console.log(res.data)


        displayMovie()
    }

    function displayMovie(){

    }




    return (
        <>
        <div>
            <label htmlFor="name">Enter Movie:</label>
            <input type="text" placeholder="movie name"/>
            <button onClick={handleClick}>Search</button>
        </div>

        <div>
            <h2>Movies</h2>
        </div>
        </>
    )
}

export default Movie