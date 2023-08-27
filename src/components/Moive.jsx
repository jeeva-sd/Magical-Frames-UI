import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateFaviroute } from '../services';
import Rating from '../widgets/Rating';
import Loader from '../widgets/Loader';

const Movie = () => {
    let { movieId } = useParams();
    const dispatch = useDispatch();
    const { movies, isRequesting } = useSelector(state => state.movie);

    const movie = useMemo(() => movies.find(movie => movie._id === movieId), [movies]);
    const { imdbrating = '', title, imageurl, genre, favorite, synopsis } = (movie || {});

    const handleImageError = e => {
        e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg';
    };

    return (
        <div className='flex flex-col items-center py-40'>
            {isRequesting && <div className='w-full h-[40vh]'><Loader /></div>}
            {!isRequesting && movie && (
                <>
                    <div className="flex flex-col items-center bg-slate-50 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 ">
                        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" onError={handleImageError} src={imageurl[0]} alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{title}</h5>
                            <Rating rating={imdbrating ? imdbrating / 2 : 0} />
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 my-2">{synopsis}</p>

                            <span>{genre && genre.length > 0 ? genre.map(e => <span className='text-sm font-thin border px-2 rounded-md bg-white shadow-sm py-1'>{e}</span>) : 'Action'}</span>

                            <button
                                onClick={() => dispatch(updateFaviroute({ ...movie, favorite: !favorite }))}
                                className={`transition-all w-full border px-5 py-2 rounded-md my-3 ${favorite ? 'bg-white border-red-500 text-red-600 hover:text-white hover:bg-red-600' : 'bg-white text-black border-black hover:bg-black hover:text-white'}`}
                            >

                                {favorite ? 'Remove from favorite' : 'Add to favorite'}
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Movie;