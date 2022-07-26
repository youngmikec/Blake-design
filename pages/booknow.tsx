import Image from 'next/image';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Components
import { CustomCard } from "../components/custom-card/custom-card";
import Price from "../components/price/price";
import styles from '../styles/booknow.module.css';

export default function BookNow () {
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

            <div>
                <div className={'divider'}></div>
                <h1 className="h1 text-primary">How may we help you?</h1>
            </div>

            <div className={`${styles.servicesPage} mb-32`}>
                <CustomCard 
                title="Brand Identity & Graphics Designs"
                body='We sketch, create, design professional 
                logos and brand identity guidelines for 
                clients. Our delivery time is quick and 
                our output is your desire.'
                icon='/images/Vectorpen.png'
                />
                <CustomCard 
                title="UI/UX Design & Development"
                body='Our iterative design process & focus 
                on validation ensures you avoid 
                unnecessary features and costs, 
                ending with a beautiful app built to 
                satisfy users.'
                icon='/images/carbon_application-webtv.png'
                />
                <CustomCard 
                title="Web Design &
                Development "
                body='We are a creative team of designers,
                developers, and strategists, building 
                elevated websites in the heart of 
                Silicon Valley.'
                icon='/images/carbon_application-webtv.png'
                />
                <CustomCard 
                title="Training & Guide"
                body='Our iterative design process & focus 
                on validation ensures you avoid 
                unnecessary features and costs, 
                ending with a beautiful app built to 
                satisfy users.'
                icon='/images/techPerson.png'
                />
            </div>
            
            <Price title='Choose Your Perfect Package' />

        </>
    )
}