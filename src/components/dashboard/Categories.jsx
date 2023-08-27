import { useState } from 'react';
import { Tab } from '@headlessui/react';
import { useDispatch, useSelector } from 'react-redux';
import { sortBy } from '../../store/reducers/movieReducer';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function Categories() {
    const dispatch = useDispatch();
    const currSelected = useSelector(state => state.movie.sortBy);

    let [categories] = useState(['Recent', 'Popular']);

    return (
        <div className="w-full max-w-md px-2 py-8 sm:px-0">
            <Tab.Group>
                <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                    {categories.map((category) => (
                        <Tab

                            onClick={() => dispatch(sortBy(category))}
                            key={category}
                            className={() =>
                                classNames(
                                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
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
}
