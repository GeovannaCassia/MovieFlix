import logo from '../Assets/img/Logo_MovieFlix_cortada.png';
import search from '../Assets/icons/magnifying-glass.png'

import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
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
        <div className='flex items-center justify-between w-full px-4'>
            <img src={logo} width={70} height={70} className='m-2 cursor-pointer' onClick={() => navigate('/')} />

            <div className="relative ml-10">
                <button
                    onClick={() => setToHidden(!toHidden)}
                    className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors flex items-center gap-2"
                >
                    Gêneros
                    <span className={`transform transition-transform ${toHidden ? 'rotate-0' : 'rotate-180'}`}>▼</span>
                </button>
                <div className={`absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10 transition-all duration-200 ${toHidden ? 'opacity-0 invisible' : 'opacity-100 visible'}`}>
                    {(genres || []).map((genre) => (
                        <button
                            key={genre.id}
                            onClick={() => navigate(`/categories/${genre.id}/${genre.name}`)}
                            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors first:rounded-t-md last:rounded-b-md"
                        >
                            {genre.name}
                        </button>
                    ))}
                </div>
            </div>

            <div className='flex items-center gap-2 ml-auto'>
                <input
                    type='search'
                    placeholder='Digite um titulo...'
                    className='border border-red-600 bg-transparent rounded-full w-72 h-[36px] px-3'
                    ref={query}
                    onKeyDown={(e) => { if (e.key === "Enter") submit(); }}
                />

                <button className='bg-red-600 p-2 rounded-md' 
                    onClick={() => submit()}
                >
                    <img src={search} width={15} height={15} />
                </button>
            </div>
        </div>
    )
}

export default Menu;