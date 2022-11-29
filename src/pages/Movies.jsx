import { useState, useEffect } from 'react'
import { useSearchParams} from 'react-router-dom'

import { APIsearchMovie } from '../Api/API-themoviedborg'
import { SearchForm } from 'components/SearchForm/SearchForm'
import { MovieListAterSearch } from 'components/MovieListAfterSearch/MovieListAfterSearch'

const Movies = () => {
    
   
    const [film, setFilm] = useState([]);
    const [searchParam, setSearchParam] = useSearchParams();
   

    const searchFilm = event => {
        setSearchParam({query: event})
    }
    
    useEffect(() => {
        const query = searchParam.get('query') ?? '';
        if (query) {
            APIsearchMovie(query).then(result => {
                setFilm(result.data.results)
                console.log(result.data.results)
                }
            )
        }
   },[searchParam])

    

    return (
        <>
            <SearchForm onSearch={searchFilm} />
            <MovieListAterSearch film={ film } />         
            
            </>
    )
}

export default Movies