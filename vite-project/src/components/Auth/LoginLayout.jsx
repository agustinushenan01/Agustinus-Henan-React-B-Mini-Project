export default function LoginLayout() {
    return (
        <main>
            <div className="flex min-h-full flex-1 flex-col justify-center py-12 lg:px-8">
                <div className="bg-white mx-1 px-3 sm:mx-auto w-auto drop-shadow rounded-lg py-4 sm:w-[550px]">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Sign in to your account
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" method="POST">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        autoComplete="email"
                                        required
                                        className="block px-1 w-full rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                        Password
                                    </label>
                                    <div className="text-sm">
                                        <a href="#" className="font-semibold text-primary hover:text-lightprimary">
                                            Forgot password?
                                        </a>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        placeholder="Enter your password"
                                        autoComplete="current-password"
                                        required
                                        className="block px-1 w-full rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-lg bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-lightprimary focus:outline-none active:shadow-[1px_1px_0px_1px_rgba(0,0,0,0.3)] shadow-[5px_5px_0px_1px_rgba(0,0,0,0.3)]"
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>

                        <p className="mt-10 mb-10 text-center text-sm text-gray-500">
                            No account?{' '}
                            <a href="#" className="font-semibold leading-6 text-primary hover:text-lightprimary">
                                Sign up
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    )
}

