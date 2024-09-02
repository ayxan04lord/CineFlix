import { useEffect, useState } from 'react';

import Items from '../items/Items';
import { TVShowAPI } from '../../services/api';

import './ItemsList.css';

function ItemsList() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        TVShowAPI.fetchMovies().then(response => setMovies(response));
    }, []);

    return (
        <div className="ItemsList">
            <div className="row">
                {Array.isArray(movies) && movies.map(movie => (
                    <Items movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
}

export default ItemsList;
