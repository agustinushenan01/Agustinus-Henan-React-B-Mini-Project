import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, ShoppingCartIcon, XMarkIcon, ArrowRightStartOnRectangleIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Login', href: '#', current: true },
    { name: 'Register', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function HeaderNavbar() {
    return (
        <Disclosure as="nav" className="bg-white">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <img
                                        className="h-8 w-auto"
                                        src="../../public/logo-transparent-svg.svg"
                                        alt="Setapku"
                                    />
                                </div>
                            </div>
                            <div className="relative hidden sm:block">
                                <label htmlFor="Search" className="sr-only"> Search </label>

                                <input
                                    type="text"
                                    id="Search"
                                    placeholder="Search for..."
                                    className="sm:w-36 md:w-full rounded-md border-gray-200 px-2 py-2.5 pe-10 shadow-lg focus:outline-none sm:text-sm"
                                />

                                <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                                    <button type="button" className="text-gray-600 hover:text-gray-700">
                                        <span className="sr-only">Search</span>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="h-4 w-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                            />
                                        </svg>
                                    </button>
                                </span>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <span className="sm:flex sm:gap-2 hidden">
                                    <button
                                        type="button"
                                        className="relative rounded-full bg-primary p-1 text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
                                    >
                                        <span className="absolute -inset-1.5" />
                                        <span className="sr-only">View notifications</span>
                                        <EnvelopeIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                    <button
                                        type="button"
                                        className="relative rounded-full bg-primary p-1 text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
                                    >
                                        <span className="absolute -inset-1.5" />
                                        <span className="sr-only">View cart</span>
                                        <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </span>

                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={`focus:outline-none focus:ring focus:ring-primary selection:bg-gray-700 selection:text-white ${classNames(
                                                    item.current ? 'bg-primary text-white hover:bg-darkprimary' : 'border border-primary text-primary hover:bg-primary hover:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium'
                                                )}`}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>

                                {/* Profile dropdown */}
                                {/* <Menu as="div" className="relative ml-3">
                                    <div>
                                        <Menu.Button className="relative flex rounded-full bg-primary text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary">
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">Open user menu</span>
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
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
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
                                            <div className='w-full h-1 border-b border-gray-300 mb-[3px]'></div>
                                            <Menu.Item className="px-2">
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={`flex flex-row gap-2 ${classNames(active ? 'bg-rose-100' : '', 'block px-4 py-2 text-sm text-red-600')}`}
                                                    >
                                                        <ArrowRightStartOnRectangleIcon className="h-6 w-6" aria-hidden="true" />
                                                        <span>Sign out</span>
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu> */}
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2 gap-3">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={`focus:outline-none focus:ring focus:ring-primary selection:bg-gray-700 selection:text-white ${classNames(
                                        item.current ? 'bg-primary text-white hover:bg-darkprimary' : 'text-primary hover:bg-primary hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}`}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}

                            <span className=" flex gap-2">
                                <button
                                    type="button"
                                    className="relative rounded-full bg-primary p-1 text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
                                >
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">View notifications</span>
                                    <EnvelopeIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                                <button
                                    type="button"
                                    className="relative rounded-full bg-primary p-1 text-gray-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary"
                                >
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">View notifications</span>
                                    <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </span>

                            <div className="relative">
                                <label htmlFor="Search" className="sr-only"> Search </label>

                                <input
                                    type="text"
                                    id="Search"
                                    placeholder="Search for..."
                                    className="w-full rounded-lg border-gray-200 px-2 py-2.5 pe-10 shadow-lg focus:outline-none sm:text-sm"
                                />

                                <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                                    <button type="button" className="text-gray-600 hover:text-gray-700">
                                        <span className="sr-only">Search</span>

                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="h-4 w-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                            />
                                        </svg>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}