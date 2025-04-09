import Hero from "/src/components/Hero"
import { useEffect } from "react"

function Home({getMovies, movies}) {
    useEffect(() => {
        getMovies()
      }, [])

    return (
        <>
            <Hero movies={movies}/>
        </>
    )
}


export default Home