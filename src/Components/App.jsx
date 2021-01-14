import React, { useEffect, useState } from 'react'
import Movie from './Movie'

const searchAPI = "https://api.themoviedb.org/3/search/movie?api_key=4b3ee28be647cb8720611823db37c4b2&page=1&query="
const popularAPI = "https://api.themoviedb.org/3/discover/movie?api_key=4b3ee28be647cb8720611823db37c4b2&page=1"
//const api_key = '4b3ee28be647cb8720611823db37c4b2'

function App(){
    const [movie, setMovie] = useState([])
    const [search, setSearch] = useState('')

    async function fetchMovies(){
        const url = await fetch(popularAPI)
        const data  = await url.json()
        console.log(data.results)
        setMovie(data.results)
    }
    useEffect(() =>{
        fetchMovies(popularAPI)
    }, [])
    
    function handleSubmit(event){
        event.preventDefault()

        if(search){
            fetch(searchAPI + search)
            .then((res) => res.json())
            .then((data) => {
                setMovie(data.results)
            })

            setSearch('')
        }
    }

    

    function handleChange(event){
        setSearch(event.target.value)
    }

    return(
        <>
        <header>
            <form onSubmit = {handleSubmit}>
            <input 
                type = "text" 
                placeholder = "Search" 
                value = {search}
                onChange = {handleChange}
             /> 
            </form>
            
        </header>
        <div className = "movie-container">
            {movie.length > 0 && movie.map(movies => {
                return (
                    <Movie 
                        key = {movie.id}
                        {...movies}
                    />
                )
            })}
        </div>
        </>
    )
}
export default App