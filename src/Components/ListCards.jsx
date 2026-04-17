import { Swiper, SwiperSlide } from 'swiper/react';

import Card from './Card';

function Cards({sessionTitle, movies}){
    return(
        <>
            <h1 className="title lg:text-3xl text-2xl mx-3 my-7" id={sessionTitle.replace(/\s+/g, '')}>{sessionTitle}</h1>

            <div>
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