import React from 'react'

const imageAPI = "https://image.tmdb.org/t/p/w500"

function Movie({title, backdrop_path, overview, vote_average}){
    return(
        <div className = "movie">
            <img src = {backdrop_path ? imageAPI + backdrop_path : 'https://images.unsplash.com/photo-1512070800540-0d4192faa057?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8bmV0ZmxpeHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60' } alt = {title}/>

            <div className = "movie-info">
                <h3>{title}</h3>
                <span>{vote_average}</span>
            </div>
            <div className = "movie-overview">
                <h2>Overview:</h2>
                <p>{overview}</p>
            </div>
        </div>
    )
}
export default Movie