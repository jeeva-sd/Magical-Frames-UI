import { useDispatch, useSelector } from 'react-redux';
import { Tab } from '@headlessui/react';
import { sortBy } from '../../store/reducers/movieReducer';

let categories = ['Recent', 'Popular'];
const classNames = (...classes) => classes.filter(Boolean).join(' ');

const Categories = () => {
    const dispatch = useDispatch();
    const currSelected = useSelector(state => state.movie.sortBy);

    return (
        <div className="w-full max-w-md px-2 py-8 sm:px-0">
            <Tab.Group>
                <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                    {categories.map((category) => (
                        <Tab
                            key={category}
                            onClick={() => dispatch(sortBy(category))}
                            className={() =>
                                classNames(
                                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-black',
                                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-gray-400 focus:outline-none focus:ring-2',
                                    category === currSelected
                                        ? 'bg-white shadow'
                                        : 'text-blue-100 hover:bg-white/[0.12]'
                                )
                            }
                        >
                            {category}
                        </Tab>
                    ))}
                </Tab.List>
            </Tab.Group>
        </div>
    );
};

export default Categories;