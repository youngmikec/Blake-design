import Image from 'next/image';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Components
import AboutUsComp from "../components/about";

export default function About () {
    return (
        <>
            <div className='container'>
                <div style={{width: '100%', display: 'inline',  overflow: 'scroll'}}>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={10}
                        slidesPerView={2}
                        navigation
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        >
                        <SwiperSlide>
                            <Image src='/images/phones.png' alt="display images" width="600px" height="500px" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src='/images/app.png' alt="display images" width="600px" height="500px" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src='/images/frame.png' alt="display images" width="600px" height="500px" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src='/images/contact-image.png' alt="display images" width="600px" height="500px" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image src='/images/contact-image.png' alt="display images" width="600px" height="500px" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

            <div className='container my-20'>
                <AboutUsComp />
            </div>
        </>
    )
}