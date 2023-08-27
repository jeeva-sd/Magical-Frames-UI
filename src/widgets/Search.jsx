import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { useDispatch, useSelector } from 'react-redux';
import { updateSearchText } from '../store/reducers/movieReducer';

const Search = () => {
    const dispatch = useDispatch();
    const { searchText } = useSelector(state => state.movie);
    const [inputValue, setInputValue] = useState(searchText);

    return (
        <form className='w-full'>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <CiSearch className="w-4 h-4 text-gray-500" />
                </div>
                <input
                    type="search"
                    id="default-search"
                    value={inputValue}
                    onChange={(e) => {
                        const value = e.target.value;
                        setInputValue(value);
                        if (!value || value.trim().length > 0) dispatch(updateSearchText(value));
                    }}
                    className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-none focus:border-gray-400"
                    placeholder="Search movies" required />
                {/* <button
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault();
                        dispatch(updateSearchText(inputValue));
                    }}
                    className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">
                    Search
                </button> */}
            </div>
        </form>
    );
};

export default Search;