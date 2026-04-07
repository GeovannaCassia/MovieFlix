import '../../Styles/Carrossel.css'
import { getImageUrl } from '../../Utils/image';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from "react-router-dom";

function Carrossel({ movies }) {
    const navigate =  useNavigate();
    return(
        <div className="carrossel w-[100%]">
            <Swiper
                slidesPerView={1}
                navigation
            >
                {(movies || []).map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="relative" onClick={() => navigate(`/details/${item.id}`)}>
                            <img src={getImageUrl(item.backdrop_path)} className="w-[100%] h-[550px] object-cover" />

                            <div className="overlay">
                                <h3 className='title'>{item.title}</h3>
                                <p className='description'>{item.overview}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Carrossel;