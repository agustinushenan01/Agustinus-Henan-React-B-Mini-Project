import { Fragment, useState, useEffect } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, ShoppingCartIcon, XMarkIcon, ArrowRightOnRectangleIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import ProfileImage from "../../public/profil_user_icon.png";
import LogoTransparan from "../../public/logo-transparent-svg.svg";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function HeaderNavbar() {
    const [islogin, setIslogin] = useState(false);
    const [, setIsAdmin] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
        const adminStatus = localStorage.getItem("isAdmin") === "true";
        setIslogin(loggedInStatus);
        setIsAdmin(adminStatus);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('isAdmin');
        setIslogin(false);
        setIsAdmin(false);
        navigate("/login", { replace: true });
    };

    return (
        <>
            <Disclosure as="nav" className="bg-white drop-shadow">
                {({ open }) => (
                    <>
                        <div className="px-2 w-full sm:px-6 lg:px-8">
                            <div className="relative flex items-center justify-between h-16">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="relative inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="absolute -inset-0.5" />
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block w-6 h-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block w-6 h-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex items-center justify-center flex-1 sm:flex-none sm:mr-6 sm:items-stretch sm:justify-start">
                                    <div className="flex items-center flex-shrink-0">
                                        <Link to="/">
                                            <img
                                                className="w-auto h-8"
                                                src={LogoTransparan}
                                                alt="Setapku"
                                            />
                                        </Link>
                                    </div>
                                </div>

                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                    <span className="hidden sm:flex sm:gap-2">
                                        <Link to="/chat"
                                            type="button"
                                            className="relative p-1 text-gray-200 rounded-full bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
                                        >
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">View notifications</span>
                                            <EnvelopeIcon className="w-6 h-6" aria-hidden="true" />
                                        </Link>
                                        <Link to="/cart"
                                            type="button"
                                            className="relative p-1 text-gray-200 rounded-full bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
                                        >
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">View cart</span>
                                            <ShoppingCartIcon className="w-6 h-6" aria-hidden="true" />
                                        </Link>
                                    </span>

                                    {!islogin ? (
                                        <div className="hidden sm:ml-6 sm:block">
                                            <div className="flex space-x-4">
                                                <Link to="/login"
                                                    className={`${location.pathname === '/login' ? 'bg-primary text-white hover:bg-darkprimary' : 'border border-primary text-primary hover:bg-primary hover:text-white'} selection:bg-gray-700 selection:text-white fokusStyleButton rounded-md px-3 py-2 text-sm font-medium`}
                                                >
                                                    Login
                                                </Link>
                                                <Link to="/register"
                                                    className={`${location.pathname === '/register' ? 'bg-primary text-white hover:bg-darkprimary' : 'border border-primary text-primary hover:bg-primary hover:text-white'} selection:bg-gray-700 selection:text-white fokusStyleButton rounded-md px-3 py-2 text-sm font-medium`}
                                                >
                                                    Register
                                                </Link>
                                            </div>
                                        </div>
                                    ) : (
                                        <Menu as="div" className="relative ml-3 z-[999999]">
                                            {/* Profile dropdown */}
                                            <div>
                                                <Menu.Button className="relative flex text-sm rounded-full bg-primary focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary">
                                                    <span className="absolute -inset-1.5" />
                                                    <span className="sr-only">Open user menu</span>
                                                    <img
                                                        className="w-8 h-8 rounded-full"
                                                        src={ProfileImage}
                                                        alt=""
                                                    />
                                                </Menu.Button>
                                            </div>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >
                                                <Menu.Items className="absolute flex top-[-20px] left-[-260px] z-50 w-64 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    <Menu.Item className="px-2">
                                                        {({ active }) => (
                                                            <a
                                                                href="#"
                                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                            >
                                                                Your Profile
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item className="px-2">
                                                        {({ active }) => (
                                                            <a
                                                                href="#"
                                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                            >
                                                                Settings
                                                            </a>
                                                        )}
                                                    </Menu.Item>
                                                    <Menu.Item className="px-2">
                                                        {({ active }) => (
                                                            <Link
                                                                to="/login"
                                                                onClick={handleLogout}
                                                                className={`flex flex-row gap-2 ${classNames(active ? 'bg-rose-100' : '', 'block px-4 py-2 text-sm text-red-600')}`}
                                                            >
                                                                <ArrowRightOnRectangleIcon className="w-6 h-6" aria-hidden="true" />
                                                                <span>Sign out</span>
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    )}
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="gap-3 px-2 pt-2 pb-3 space-y-1">
                                {!islogin ? (
                                    <>
                                        <Link to="/login"
                                            className={` ${location.pathname === '/login' ? 'bg-primary text-white hover:bg-darkprimary' : 'text-primary border border-primary hover:bg-primary hover:text-white'} focus:outline-none focus:ring focus:ring-primary selection:bg-gray-700 selection:text-white block rounded-md px-3 py-2 text-base font-medium`}
                                        >
                                            Login
                                        </Link>
                                        <Link to="/register"
                                            className={` ${location.pathname === '/register' ? 'bg-primary text-white hover:bg-darkprimary' : 'text-primary border border-primary hover:bg-primary hover:text-white'} focus:outline-none focus:ring focus:ring-primary selection:bg-gray-700 selection:text-white block rounded-md px-3 py-2 text-base font-medium`}
                                        >
                                            Register
                                        </Link>
                                    </>
                                ) : (
                                    <>
                                        <span className="flex gap-2 ">
                                            <button
                                                type="button"
                                                className="relative p-1 text-gray-200 rounded-full bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
                                            >
                                                <span className="absolute -inset-1.5" />
                                                <span className="sr-only">View notifications</span>
                                                <EnvelopeIcon className="w-6 h-6" aria-hidden="true" />
                                            </button>
                                            <button
                                                type="button"
                                                className="relative p-1 text-gray-200 rounded-full bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
                                            >
                                                <span className="absolute -inset-1.5" />
                                                <span className="sr-only">View notifications</span>
                                                <ShoppingCartIcon className="w-6 h-6" aria-hidden="true" />
                                            </button>
                                        </span>

                                        <span className="flex gap-2 ">
                                            <Menu as="div" className="relative ml-3 z-[999999]">
                                                {/* Profile dropdown */}
                                                <div>
                                                    <Menu.Button className="relative flex text-sm rounded-full bg-primary focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary">
                                                        <span className="absolute -inset-1.5" />
                                                        <span className="sr-only">Open user menu</span>
                                                        <img
                                                            className="w-8 h-8 rounded-full"
                                                            src={ProfileImage}
                                                            alt=""
                                                        />
                                                    </Menu.Button>
                                                </div>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <Menu.Items className="absolute flex top-[-20px] left-[-260px] z-50 w-64 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                        <Menu.Item className="px-2">
                                                            {({ active }) => (
                                                                <a
                                                                    href="#"
                                                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                                >
                                                                    Your Profile
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item className="px-2">
                                                            {({ active }) => (
                                                                <a
                                                                    href="#"
                                                                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                                >
                                                                    Settings
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item className="px-2">
                                                            {({ active }) => (
                                                                <Link
                                                                    to="/login"
                                                                    onClick={handleLogout}
                                                                    className={`flex flex-row gap-2 ${classNames(active ? 'bg-rose-100' : '', 'block px-4 py-2 text-sm text-red-600')}`}
                                                                >
                                                                    <ArrowRightOnRectangleIcon className="w-6 h-6" aria-hidden="true" />
                                                                    <span>Sign out</span>
                                                                </Link>
                                                            )}
                                                        </Menu.Item>
                                                    </Menu.Items>
                                                </Transition>
                                            </Menu>
                                        </span>
                                    </>
                                )}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
            <Outlet />
        </>
    );
}
