import React, { useMemo } from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import Loader from '../../widgets/Loader';

const Favorites = () => {
    const navigate = useNavigate();
    const { movies, isRequesting } = useSelector(state => state.movie);
    const favorites = useMemo(() => [...movies].filter((movie) => movie.favorite), [movies]);

    const handleImageError = e => {
        e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg';
    };

    return (
        <div className='flex flex-wrap px-10 justify-center py-40 w-full'>
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 w-full text-center py-10">Favorites</h2>

            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 w-full">
                {favorites && favorites.length > 0 ? favorites.map((movie) => (
                    <div key={movie._id} className="group relative cursor-pointer" onClick={() => window.open(`movie/${movie._id}`, '_self')}>
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                            <img
                                onError={handleImageError}
                                src={movie.imageurl}
                                alt={movie.title}
                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                            />
                        </div>
                        <div className="mt-4 flex justify-between items-center">
                            <div className="mt-1 text-sm text-gray-500">
                                {movie.genre[0]}
                            </div>
                            <div className="text-sm font-medium text-gray-900"> {
                                movie.favorite ? <AiFillHeart color="red" fontSize={30} /> : <AiOutlineHeart fontSize={30} />
                            }</div>
                        </div>
                    </div>
                )) : null}
            </div>

            {isRequesting ? <div className='w-full'><Loader /></div> : null}

            {!isRequesting && favorites && favorites.length === 0 ? <div className='w-full flex justify-center text-gray-600'>No favorite found</div> : null}
        </div>
    );
};

export default Favorites;