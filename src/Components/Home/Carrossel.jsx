import '../../Styles/Carrossel.css'
import { getImageUrl } from '../../Utils/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import { useNavigate } from "react-router-dom";

function Carrossel({ movies }) {
    const navigate =  useNavigate();
    return(
        <div className="carrossel w-[100%]">
            <Swiper
                slidesPerView={1}
                modules={[Autoplay]}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
            >
                {(movies || []).map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="relative" onClick={() => navigate(`/details/${item.id}`)}>
                            <img 
                                alt="Cartaz do Filme" 
                                src={getImageUrl(item.backdrop_path)} 
                                className="w-[100%] lg:h-[550px] h-[350px] object-cover" 
                            />

                            <div className="overlay">
                                <h3 className='title text-4xl'>{item.title}</h3>
                                <p className='description sr-only sm:not-sr-only'>{item.overview}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Carrossel;