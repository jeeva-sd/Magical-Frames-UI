import { http } from "../extensions";
import { setMovies, setRequesting, updateMovie } from "../store/reducers/movieReducer";

export const fetchMovies = () => async (dispatch) => {
    try {
        const { data } = await http.get(`movie/list`);

        dispatch(setMovies(data));
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
};

export const updateFaviroute = (movie) => async (dispatch) => {
    try {
        const payload = movie;
        const id = payload._id;
        delete payload._id;
        delete payload.__v;

        const response = await http.put(`movie/edit/${id}`, movie);

        console.log(response);

        if (response.status === 200) dispatch(updateMovie({ ...movie, _id: id }));
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
};
