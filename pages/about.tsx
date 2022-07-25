import Image from 'next/image';
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import AboutUsComp from "../components/about";

export default function About () {
    return (
        <>
            <div style={{width: '100%', display: 'inline', overflow: 'scroll'}}>
                <Image src='/images/contact-image.png' alt="display images" width="400px" height="400px" />
                <Image src='/images/contact-image.png' alt="display images" width="400px" height="400px" />
                <Image src='/images/contact-image.png' alt="display images" width="400px" height="400px" />
                <Image src='/images/contact-image.png' alt="display images" width="400px" height="400px" />
                <Image src='/images/contact-image.png' alt="display images" width="400px" height="400px" />
            </div>

            <AboutUsComp />
        </>
    )
}