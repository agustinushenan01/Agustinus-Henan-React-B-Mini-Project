import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

export default function LoginLayout() {
    const [usersData, setUsersData] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const fetchUserURL = "https://662b4fc8de35f91de157ccf6.mockapi.io/User";

    const fetchUser = async () => {
        try {
            const response = await axios.get(fetchUserURL);
            setUsersData(response.data);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    const adminCredentials = {
        email: 'adminisme@gmail.com',
        password: '12345abcdef'
    };

    useEffect(() => {
        fetchUser();
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();
        const user = usersData.find(user => user.email === email && user.password === password);

        if (email === adminCredentials.email && password === adminCredentials.password) {
            localStorage.setItem('isAdmin', JSON.stringify(true));
            localStorage.setItem('isLoggedIn', JSON.stringify(true));
            navigate(location.state?.from || '/admin-product');
        } else if (user) {
            localStorage.setItem('isLoggedIn', JSON.stringify(true));
            localStorage.setItem('isAdmin', JSON.stringify(false));
            navigate(location.state?.from || '/');
        } else {
            alert('Email atau password salah');
        }
    };

    return (
        <main>
            <div className="flex flex-col justify-center flex-1 min-h-full py-12 lg:px-8">
                <div className="bg-white mx-1 px-3 sm:mx-auto w-auto drop-shadow rounded-lg py-4 sm:w-[550px]">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">
                            Masuk ke akun Anda
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form onSubmit={handleLogin} className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Alamat email
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={email}
                                        onChange={(ev) => setEmail(ev.target.value)}
                                        placeholder="Masukkan email Anda"
                                        autoComplete="email"
                                        required
                                        className="block px-1 w-full rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                        Kata sandi
                                    </label>
                                    <div className="text-sm">
                                        <a href="#" className="font-semibold text-primary hover:text-lightprimary">
                                            Lupa kata sandi?
                                        </a>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        value={password}
                                        onChange={(ev) => setPassword(ev.target.value)}
                                        placeholder="Masukkan kata sandi Anda"
                                        autoComplete="current-password"
                                        required
                                        className="block px-1 w-full rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-lg bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-lightprimary fokusStyleButton"
                                >
                                    Masuk
                                </button>
                            </div>
                        </form>

                        <p className="mt-10 mb-10 text-sm text-center text-gray-500">
                            Belum punya akun?{' '}
                            <Link to="/register" className="font-semibold leading-6 text-primary hover:text-lightprimary">
                                Daftar
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
