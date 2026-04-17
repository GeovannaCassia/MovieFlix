import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import { getAtors } from "../../Services/movieService";

import { getImageUrl } from "../../Utils/image";

function ListAtors({ id }) {
    const [ators, setAtors] = useState([]);

    useEffect(() => {
        const fetchAtors = async () => {
            if (!id) return;

            const response = await getAtors(id);
            const filteredAtors = response.cast.filter(ator => ator.profile_path)
            setAtors(filteredAtors || []);
        };

        fetchAtors();
    }, [id]);
    
    return(
        <div className="mx-3">
            <h2 className="text-xl font-semibold mb-3">Elenco</h2>

            <div className="flex gap-4">
                 <Swiper
                    spaceBetween={5}
                    slidesPerView={7}
                    breakpoints={{
                        0: {
                        slidesPerView: 4,
                        },
                        640: {
                        slidesPerView: 5,
                        },
                        1024: {
                        slidesPerView: 7, 
                        },
                    }}
                >
                    {(ators || []).map((ator) => (
                        <SwiperSlide key={ator.id} className="bg-[#1C1C1C] p-2 rounded-md">
                            <img 
                                src={getImageUrl(ator.profile_path, 'w185')} 
                                alt={ator.name} 
                                className="mx-auto mb-2"
                            />
                            <p className="text-md">{ator.name}</p>
                            <p className="text-sm text-gray-400">{ator.character}</p>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default ListAtors;