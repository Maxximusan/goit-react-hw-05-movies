import { useState, useEffect } from 'react'
import { useSearchParams, Link, useLocation } from 'react-router-dom'

import { APIsearchMovie } from '../Api/API-themoviedborg'

export const Movies = () => {
    
    const [value, setValue] = useState('');
    const [film, setFilm] = useState([]);
    const [searchParam, setSearchParam] = useSearchParams();
    const location = useLocation()

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

    const submitForm = event => {
        event.preventDefault();
        if (value.trim() === '') {
            
            alert('!!!!!');
            return;
        }
        searchFilm(value)
        setValue('')
    };

    const onInputChange = event => {
         setValue(event.currentTarget.value.toLowerCase());
    }



    return (
        <>
        <form onSubmit={submitForm}>

            <button type="submit">Choose a film</button>
            <input
                type="text"
                autoComplete="off"
                 autoFocus
                placeholder="Search films"
                onChange={onInputChange}
        />
            </form>
            
            <div>
            {film && film.length > 0
                ?
                (
                    <ul>
                            {film.map(({ title, id }) => (
                            <li key={id}>
                             <Link  to={`${id}`} state={{ from: location }}>
                                   {title}
                                    </Link>
                                    </li>
                        ))}
                    </ul>
                ) : (
                    <p> Please, enter a film title</p>
                
                    )}
                </div>
            </>
    )
}