import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export default function RegisterLayout() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [fullName, setFullName] = useState('');
    const [gender, setGender] = useState('');
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('Password dan konfirmasi password tidak cocok');
            return;
        }

        try {
            const response = await axios.post('https://662b4fc8de35f91de157ccf6.mockapi.io/User', {
                email,
                password,
                fullName,
                gender,
            });

            if (response.status === 201) {
                alert('Registrasi berhasil');
                navigate('/login');
                setEmail('')
                setPassword('')
                setConfirmPassword('')
                setFullName('')
                setGender('')
            }
        } catch (error) {
            console.error('Error during registration:', error);
            alert('Terjadi kesalahan saat registrasi');
        }
    };

    return (
        <main>
            <div className="flex flex-col justify-center flex-1 min-h-full py-12 lg:px-8">
                <div className="bg-white mx-2 px-3 sm:mx-auto w-auto drop-shadow rounded-lg py-4 sm:w-[550px]">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-center text-gray-900">
                            Register your account
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form onSubmit={handleRegister} className="space-y-6">
                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Email"
                                        autoComplete="email"
                                        required
                                        className="block px-1 w-full rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            {/* End email */}

                            {/* Password */}
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                        Password
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Password"
                                        autoComplete="current-password"
                                        required
                                        className="block px-1 w-full rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            {/* End password */}

                            {/* Confirm password */}
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="confirmpassword" className="block text-sm font-medium leading-6 text-gray-900">
                                        Confirm Password
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="confirmpassword"
                                        name="confirmpassword"
                                        type="password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        placeholder="Confirm Password"
                                        autoComplete="current-password"
                                        required
                                        className="block px-1 w-full rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            {/* End confirm password */}

                            {/* Full Name */}
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="fullName" className="block text-sm font-medium leading-6 text-gray-900">
                                        Full Name
                                    </label>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="fullName"
                                        name="fullName"
                                        type="text"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        placeholder="Full Name"
                                        autoComplete="full-name"
                                        required
                                        className="block px-1 w-full rounded-lg border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:outline-none focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            {/* End full name */}

                            {/* Gender */}
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="gender" className="block text-sm font-medium leading-6 text-gray-900">
                                        Gender
                                    </label>
                                </div>
                                <div className="flex gap-4 mt-2">
                                    <section>
                                        <input 
                                            type="radio" 
                                            name="gender" 
                                            id="male" 
                                            value="male"
                                            onChange={(e) => setGender(e.target.value)}
                                            className="mr-1" 
                                            required 
                                        />
                                        <label htmlFor="male">Male</label>
                                    </section>
                                    <section>
                                        <input 
                                            type="radio" 
                                            name="gender" 
                                            id="female" 
                                            value="female"
                                            onChange={(e) => setGender(e.target.value)}
                                            className="mr-1" 
                                        />
                                        <label htmlFor="female">Female</label>
                                    </section>
                                    <section>
                                        <input 
                                            type="radio" 
                                            name="gender" 
                                            id="other" 
                                            value="other"
                                            onChange={(e) => setGender(e.target.value)}
                                            className="mr-1" 
                                        />
                                        <label htmlFor="other">Other</label>
                                    </section>
                                </div>
                            </div>
                            {/* End gender */}

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-lg bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white hover:bg-lightprimary fokusStyleButton"
                                >
                                    Sign up
                                </button>
                            </div>
                        </form>

                        <p className="mt-10 mb-10 text-sm text-center text-gray-500">
                            Already have an account?{' '}
                            <Link to="/login" className="font-semibold leading-6 text-primary hover:text-lightprimary">
                                Login here
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
