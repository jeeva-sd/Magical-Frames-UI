import { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import { Dialog } from '@headlessui/react';
import { AiOutlineBars, AiOutlineClose } from 'react-icons/ai';
import { BsFillPlayFill } from 'react-icons/bs';
import { fetchMovies } from '../../services';
import { useDispatch } from 'react-redux';
import { setRequesting } from '../../store/reducers/movieReducer';

const menuList = [
    { name: 'Dashboard', path: '/' },
    { name: 'Popular', path: '/popular' },
    { name: 'Trending', path: '/trending' },
    { name: 'Latest', path: '/latest' }
];

export default function Header() {
    const dispatch = useDispatch();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        dispatch(setRequesting(true));
        dispatch(fetchMovies());
    }, []);

    return (
        <header style={{ backdropFilter: 'saturate(180%) blur(10px)' }} className="border fixed w-full z-10 bg-[hsla(0,0%,100%,.8)] shadow-sm shadow-[#eaeaea]">
            <nav className="flex max-w-full lg:mx-40 items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <BsFillPlayFill className="h-10 w-10 mx-3" fontSize={40} />
                    <div className='flex items-center text-2xl font-bold'>
                        Magical Frames
                    </div>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <AiOutlineBars className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-10">

                    {menuList.map((menu, i) => (
                        <NavLink
                            key={i}
                            to={menu.path}
                            className={({ isActive, isPending }) =>
                                `${isPending ? "pending" : isActive ? "text-blue-600" : ""} 
                                text-sm font-semibold leading-6 text-gray-900`}>
                            {menu.name}
                        </NavLink>
                    ))}

                </div>
            </nav>

            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between ">
                        <BsFillPlayFill className="h-10 w-10 mx-3" fontSize={40} />

                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <AiOutlineClose className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>

                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {menuList.map((menu, i) => (
                                    <div
                                        key={i}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                        {menu.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    );
}
