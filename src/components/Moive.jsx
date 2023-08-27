import React, { useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateFaviroute } from '../services';
import Rating from '../widgets/Rating';
import Loader from '../widgets/Loader';

const Moive = () => {
    let { movieId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { movies, isRequesting } = useSelector(state => state.movie);

    const movie = useMemo(() => movies.find(movie => movie._id === movieId), [movies]);

    const { imdbrating = '', title, imageurl, genre, released, type, favorite, synopsis } = (movie || {});

    const handleImageError = e => {
        e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg';
    };

    return (
        <>
            {!isRequesting && movie ? <div className='py-40 px-10 flex justify-center'>
                <div div className='max-w-2xl' >
                    <div className='flex gap-5 items-center'>
                        <img src={imageurl[0]} alt={title} onError={handleImageError} />
                        <div>
                            <h1 className='text-2xl font-bold'>{title}</h1>
                            <div className='my-3'><span className='font-bold '>Type:</span> {type ? type : 'Movie'}</div>
                            <div className='my-3'><span className='font-bold '>Released:</span> {released ? released : 2022}</div>
                            <div className='my-3'>
                                <Rating rating={imdbrating ? imdbrating / 2 : 0} />
                            </div>
                            <button
                                onClick={() => dispatch(updateFaviroute({ ...movie, favorite: !favorite }))}
                                className={`${favorite ? 'bg-red-600 text-white' : 'bg-white text-red-600'} border border-red-600 p-5 rounded-md  my-3`}>
                                {favorite ? 'Remove from favorite' : 'Add to favorite'}
                            </button>
                            <div className='flex gap-5'>{genre.map((type, i) => <div key={i} className='border p-2 rounded-md bg-slate-50'>{type}</div>)}</div>
                        </div>
                    </div>

                    <div className='my-10 text-xl text-gray-600'>
                        {synopsis}
                    </div>
                </div>
            </div > : null}

            {isRequesting ? <Loader /> : null}
        </>
    );
};

export default Moive;