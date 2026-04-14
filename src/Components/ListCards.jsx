import { Swiper, SwiperSlide } from 'swiper/react';

import Card from './Card';

function Cards({sessionTitle, movies}){
    return(
        <>
            <h1 className="title mx-3 my-7">{sessionTitle}</h1>

            <div>
                <Swiper
                    slidesPerView={7}
                >
                    {(movies || []).map((item) => (
                        <SwiperSlide key={item.id} className='ml-3'>
                            <Card movie={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    )
}

export default Cards;