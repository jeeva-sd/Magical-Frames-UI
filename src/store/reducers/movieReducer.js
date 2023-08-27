import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        isRequesting: false,
        movies: [],
        filteredMovieList: [],
        sortBy: 'Recent',
        searchText: ''
    },
    reducers: {
        setRequesting: (state, action) => {
            const { payload } = action;
            state.isRequesting = payload;
        },
        sortBy: (state, action) => {
            const { payload } = action;
            state.sortBy = payload;
        },
        setMovies: (state, action) => {
            const { data } = action.payload;
            const movieList = data ? data : [];

            state.movies = movieList;
            state.filteredMovieList = movieList;
            state.isRequesting = false;
        },
        updateSearchText: (state, action) => {
            const { payload } = action;
            state.searchText = payload;
        },
        updateMovie: (state, action) => {
            const { payload } = action;
            const updatedList = state.movies.map(movie => {
                if (movie._id === payload._id) return payload;
                else return movie;
            });

            state.movies = updatedList;
            state.movies = updatedList;
            state.movies = updatedList;
        }
    },
});

export const { sortBy, setMovies, updateSearchText, updateMovie, setRequesting } = movieSlice.actions;
export default movieSlice.reducer;
