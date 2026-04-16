import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import logo from '../../Assets/img/Logo_MovieFlix_cortada.png';
import search from '../../Assets/icons/magnifying-glass.png'

function SearchBar({ query = "", onQueryChange = () => {} }) {
    const navigate = useNavigate();
    const [value, setValue] = useState(query || "");

    useEffect(() => {
        setValue(query || "");
    }, [query]);

    const submit = () => {
        const trimmed = value.trim();
        if (!trimmed) return;
        navigate(`/search?query=${encodeURIComponent(trimmed)}`);
    };

    return (
        <div className='flex flex-col md:flex-row items-center md:items-center w-full px-4 gap-3'>
            <img 
                src={logo} 
                className='w-14 md:w-[70px] cursor-pointer' 
                onClick={() => navigate('/')}
            />

            <div className='flex items-center gap-2 w-full md:w-auto lg:mx-auto justify-center'>
                <input
                    type='search'
                    placeholder='Digite um titulo...'
                    className='border border-red-600 bg-transparent rounded-full w-full md:w-96 h-[36px] px-5'
                    value={value}
                    onChange={(e) => {
                        const next = e.target.value;
                        setValue(next);
                        onQueryChange(next);
                    }}
                    onKeyDown={(e) => { if (e.key === "Enter") submit(); }}
                />

                <button 
                    className='bg-red-600 p-2 rounded-md flex items-center justify-center'
                    onClick={submit}
                >
                    <img src={search} className='w-4 h-4' />
                </button>
            </div>
        </div>
    )
}

export default SearchBar; 