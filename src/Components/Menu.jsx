import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import logo from '../Assets/img/Logo_MovieFlix_cortada.png';
import search from '../Assets/icons/magnifying-glass.png'

import { getListOfGenres } from '../Services/movieService';

function Menu() {
    const navigate = useNavigate();
    const query = useRef('');
    const [genres, setGenres] = useState([]);
    const [toHidden, setToHidden] = useState(true);

    useEffect(() => {
        const fetchGenres = async () => {
            const response = await getListOfGenres();
            setGenres(response);
        }
        
        fetchGenres()
    }, [])

    const submit = () => {
        const trimmed = query.current.value.trim();
        if (!trimmed) return;
        navigate(`/search?query=${encodeURIComponent(trimmed)}`);
        query.current.value = '';
    };

    return(
        <div className='flex flex-col md:flex-row items-center justify-between w-full px-4 gap-3 lg:mb-2'>
            <img 
                src={logo} 
                className='w-14 md:w-[70px] cursor-pointer' 
                onClick={() => navigate('/home')} 
            />

            <div className="relative w-full md:w-auto md:mr-auto lg:ml-4">
                <button
                    onClick={() => setToHidden(!toHidden)}
                    className="w-full md:w-auto bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors flex items-center justify-between md:justify-center gap-2"
                >
                    Gêneros
                    <span className={`transform transition-transform ${toHidden ? 'rotate-0' : 'rotate-180'}`}>▼</span>
                </button>

                <div className={`absolute top-full left-0 mt-2 w-full md:w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10 transition-all duration-200 ${toHidden ? 'opacity-0 invisible' : 'opacity-100 visible'}`}>
                    {(genres || []).map((genre) => (
                        <button
                            key={genre.id}
                            onClick={() => navigate(`/categories/${genre.id}/${genre.name}`)}
                            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                        >
                            {genre.name}
                        </button>
                    ))}
                </div>
            </div>

            <div className='flex items-center gap-2 mb-2 w-full md:w-auto md:ml-auto'>
                <input
                    type='search'
                    placeholder='Digite um título...'
                    className='border-2 border-red-600 bg-transparent rounded-full w-full md:w-72 h-[36px] px-3'
                    ref={query}
                    onKeyDown={(e) => { if (e.key === "Enter") submit(); }}
                />

                <button 
                    className='bg-red-600 p-2 rounded-md flex items-center justify-center'
                    onClick={() => submit()}
                >
                    <img src={search} className='w-4 h-4' />
                </button>
            </div>
        </div>
    )
}

export default Menu;