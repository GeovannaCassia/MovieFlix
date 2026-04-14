import { useEffect, useState } from "react";

import { getAtors } from "../../Services/movieService";

import { getImageUrl } from "../../Utils/image";

function ListAtors({ id }) {
    const [ators, setAtors] = useState([]);

    useEffect(() => {
        const fetchAtors = async () => {
            if (!id) return;

            const response = await getAtors(id);
            setAtors(response.cast || []);
        };

        fetchAtors();
    }, [id]);
    
    return(
        <div className="mx-3">
            <h2 className="text-xl font-semibold mb-3">Elenco</h2>

            <div className="flex gap-4">
                {(ators.slice(0,10) || []).map((ator) => (
                    <div key={ator.id} className="bg-[#1C1C1C] p-2 rounded-md">
                        {ator.profile_path ? (
                            <img src={getImageUrl(ator.profile_path, 'w92')} alt={ator.name} className="mx-auto"/>
                        ) : (
                            <div className="w-[100px] h-[140px] bg-gray-600 rounded mx-auto" />
                        )}
                        <p className="text-md">{ator.name}</p>
                        <p className="text-sm text-gray-400">{ator.character}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ListAtors;