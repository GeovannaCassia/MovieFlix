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
        <div className='flex w-full px-4'>
            <img src={logo} width={70} height={70} className='m-2 cursor-pointer' onClick={() => navigate('/')}/>

            <div className='flex items-center gap-2 mx-auto'>
                <input
                    type='search'
                    placeholder='Digite um titulo...'
                    className='border border-red-600 bg-transparent rounded-full w-96 h-[36px] px-5'
                    value={value}
                    onChange={(e) => {
                        const next = e.target.value;
                        setValue(next);
                        onQueryChange(next);
                    }}
                    onKeyDown={(e) => { if (e.key === "Enter") submit(); }}
                />

                <button className='bg-red-600 p-2 rounded-md' onClick={submit}>
                    <img src={search} width={15} height={15} />
                </button>
            </div>
        </div>
    )
}

export default SearchBar; 