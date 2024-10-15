import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useFetch } from '../../hooks/useFetch';
// import HttpStatus from '../../utils/HttpStatus';
// import Logo from '../assets/img/logo.png';

export default function Login() {
    const { fetchData } = useFetch();
    const navigate = useNavigate();
    const [credential, setCredential] = useState({ username: '', password: '' });
    const [err, setErr] = useState('');
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCredential(prevCredential => ({ ...prevCredential, [name]: value }));
        setErr('');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErr('');
``
        if (credential.username === "" || credential.password === "") {
            setErr('Veuillez remplir tous les champs.');
            setLoading(false);
            return;
        }

        const response = await fetchData('POST', 'user/login', credential);
        setLoading(false);
        
        if (response.status === 200) {
            console.log(response);
             sessionStorage.setItem("accessToken", response.data.accessToken);
                navigate("/admin-manage-events")
        
        } 
        // else if (response.request.status === HttpStatus.UNAUTHORIZED) {
        //     setErr('Nom d\'utilisateur ou mot de passe incorrect.');
        // } else {
        //     setErr('Une erreur est survenue. Veuillez réessayer plus tard.');
        //     console.error('Error during login:', response);
        // }
    };

    useEffect(() => {
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const applyTheme = (isDarkMode) => {
            if (isDarkMode) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
        };

        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            applyTheme(true);
        } else if (savedTheme === 'light') {
            applyTheme(false);
        } else {
            applyTheme(darkModeMediaQuery.matches);
        }

        const handleThemeChange = (e) => {
            applyTheme(e.matches);
        };

        darkModeMediaQuery.addEventListener('change', handleThemeChange);

        return () => {
            darkModeMediaQuery.removeEventListener('change', handleThemeChange);
        };
    }, []);

    return (
        <div className={`flex min-h-screen flex-col items-center justify-center bg-white dark:bg-gray-700`}>
            <div className={`container mx-auto flex max-w-lg flex-col items-center py-2 px-4`}>
                <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 text-gray-900 dark:text-white border border-gray-200 rounded-lg shadow-md w-full px-6 py-8">
                    <div className="text-2xl flex flex-col items-center justify-center">
                        {/* <img src={Logo} className="h-48 mb-4" alt="Logo" /> */}
                        <h1 className="block font-bold">Connexion</h1>
                        <p className='text-sm text-gray-400'>Entrez vos identifiants pour vous connecter</p>
                    </div>
                    <div className="">
                        <label className="block text-base py-3 text-gray-500" htmlFor="username">
                            Nom d'utilisateur
                        </label>
                        <input
                            className="shadow appearance-none dark:bg-gray-700 dark:text-white border rounded w-full p-3 leading-tight focus:outline-none focus:shadow-outline"
                            name="username"
                            type="text"
                            placeholder="Entrer le nom d'utilisateur"
                            value={credential.username}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="">
                        <label className="block text-base py-3 text-gray-500" htmlFor="password">
                            Mot de passe
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full p-3 dark:bg-gray-700 dark:text-white text-gray-700 leading-tight focus:outline-none"
                            name="password"
                            type="password"
                            placeholder="Saisir le mot de passe"
                            value={credential.password}
                            onChange={handleInputChange}
                        />
                    </div>
                    {err && <div className="text-red-500 text-center mt-4">{err}</div>}
                    <div className="flex items-center justify-center pt-8">
                        <button
                            className="px-4 py-2 w-full rounded text-white inline-block shadow-lg bg-gray-950 hover:bg-red-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? 'Connexion en cours...' : 'Connexion'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}