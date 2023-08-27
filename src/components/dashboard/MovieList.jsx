import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import Categories from "./Categories";
import Search from "../../widgets/Search";
import Loader from '../../widgets/Loader';

const MovieList = () => {
  const navigate = useNavigate();
  const { movies, sortBy, searchText, isRequesting } = useSelector(state => state.movie);
  if (!movies) return [];

  const movieList = useMemo(() => {
    let sortedMovies = sortBy === 'Popular' ?
      [...movies].sort((a, b) => b.imdbrating - a.imdbrating) :
      [...movies].sort((a, b) => b.released - a.released);

    if (searchText && searchText.trim().length > 0) {
      sortedMovies = sortedMovies
        .filter(movie => movie.title.toLowerCase().includes(searchText.toLowerCase()));
    }

    return sortedMovies;
  }, [movies, sortBy, searchText]);

  const favorites = useMemo(() => [...movies].filter((movie) => movie.favorite), [movies]);

  const handleImageError = e => {
    e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg';
  };

  return (
    <div>
      {!isRequesting ? <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Favorites</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {favorites && favorites.length > 0 ? favorites.map((movie) => (
            <div key={movie._id} className="group relative cursor-pointer" onClick={() => navigate(`movie/${movie._id}`)}>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  onError={handleImageError}
                  src={movie.imageurl}
                  alt={movie.title}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={movie.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {movie.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{movie.genre[0]}</p>
                </div>
                <div className="text-sm font-medium text-gray-900">{
                  true ? <AiFillHeart color="red" /> : <AiOutlineHeart />
                }</div>
              </div>
            </div>
          )) : null}
        </div>
        {!isRequesting && favorites && favorites.length === 0 ? <div className='w-full flex justify-center text-gray-600'>No favorite found</div> : null}
      </div> : null}

      {!isRequesting ? <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Free for you</h2>
        <div className="flex flex-wrap lg:justify-between md:justify-between justify-center items-center">
          <div className="lg:w-7/12 md:w-7/12 w-full flex justify-start lg:mt-0 md:mt-0 mt-5"><Search /></div>
          <div className="lg:w-5/12 md:w-5/12 w-10/12 flex justify-end"><Categories /></div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {movieList.map((movie) => (
            <div key={movie._id} className="group relative cursor-pointer" onClick={() => navigate(`movie/${movie._id}`)}>
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={movie.imageurl}
                  alt={movie.title}
                  onError={handleImageError}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={movie.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {movie.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{movie.genre[0]}</p>
                </div>
                <div className="text-sm font-medium text-gray-900">{
                  movie.favorite ? <AiFillHeart color="red" /> : <AiOutlineHeart />
                }</div>
              </div>
            </div>
          ))}
        </div>
      </div> : null}

      {(!isRequesting && (!movieList || movieList.length === 0)) ? <div className='flex w-full justify-center text-gray-600'>No movie found.</div> : null}

      {isRequesting ? <Loader /> : null}
    </div>
  );
};

export default MovieList;