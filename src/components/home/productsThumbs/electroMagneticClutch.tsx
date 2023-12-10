import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { useState } from 'react';
import styled from 'styled-components';

const Slide = styled.div`
    & .swiper-button-next:after,
    & .swiper-button-prev:after{
        color: #8FC63F;
        font-size: 20px;
        font-weight: bold;
        width: 30px;
        height: 30px;
        // background-color: rgba(0,0,0,0.1);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
    }
    & .mySwiper .swiper-slide{opacity: 0.5;}
    & .mySwiper .swiper-slide-thumb-active{opacity: 1;}
`;
export default function ThumbElectroMagneticClutch() {
    const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

    return (
        <Slide>
            <Swiper
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2 rounded-4 overflow-hidden"
            >
                <SwiperSlide className='text-center'>
                    <img src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/clutch%2Ffile1.name%2FAQSPzNE5Ers0JRmDjzJt?alt=media&token=a760c04a-eebf-4ff7-bc90-fdcb1aaaead0" />
                </SwiperSlide>
                <SwiperSlide className='text-center'>
                    <img src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/clutch%2Ffile1.name%2FSrE7IgojrGFXwj9cyA6Y?alt=media&token=e1880e03-da6d-4075-a66b-d93defbc03d4" />
                </SwiperSlide>
                <SwiperSlide className='text-center'>
                    <img src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/clutch%2Ffile1.name%2Fyqd6oLN9BmyxvzHNM3zG?alt=media&token=37937fec-c492-40dc-80ff-cf5994dea5c3" />
                </SwiperSlide>
                <SwiperSlide className='text-center'>
                    <img src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/clutch%2Ffile1.name%2F9qowDmyqQBIDGlUCYao6?alt=media&token=f51ec66a-a54c-43ad-8668-0cb9562828d8" />
                </SwiperSlide>
                <SwiperSlide className='text-center'>
                    <img src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/clutch%2Ffile1.name%2Fhofj8hT1Y30Juv0sAGCP?alt=media&token=86916e92-25bf-43ee-a8f6-0f75cf835aa8" />
                </SwiperSlide>
                <SwiperSlide className='text-center'>
                    <img src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/clutch%2Ffile1.name%2FYNFiUBs7C3QI9nuPjZoJ?alt=media&token=318152f0-e01e-4ddd-affb-a297138e01b9" />
                </SwiperSlide>
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper mt-3"
            >
                <SwiperSlide className='text-center'>
                    <img className='rounded-4' src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/clutch%2Ffile1.name%2FAQSPzNE5Ers0JRmDjzJt?alt=media&token=a760c04a-eebf-4ff7-bc90-fdcb1aaaead0" />
                    <div className="text-white mt-1 fw-bold">NKBC</div>
                </SwiperSlide>
                <SwiperSlide className='text-center'>
                    <img className='rounded-4' src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/clutch%2Ffile1.name%2FSrE7IgojrGFXwj9cyA6Y?alt=media&token=e1880e03-da6d-4075-a66b-d93defbc03d4" />
                    <div className="text-white mt-1 fw-bold">NKBCB</div>
                </SwiperSlide>
                <SwiperSlide className='text-center'>
                    <img className='rounded-4' src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/clutch%2Ffile1.name%2Fyqd6oLN9BmyxvzHNM3zG?alt=media&token=37937fec-c492-40dc-80ff-cf5994dea5c3" />
                    <div className="text-white mt-1 fw-bold">NKBCS</div>
                </SwiperSlide>
                <SwiperSlide className='text-center'>
                    <img className='rounded-4' src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/clutch%2Ffile1.name%2F9qowDmyqQBIDGlUCYao6?alt=media&token=f51ec66a-a54c-43ad-8668-0cb9562828d8" />
                    <div className="text-white mt-1 fw-bold">NKFC</div>
                </SwiperSlide>
                <SwiperSlide className='text-center'>
                    <img className='rounded-4' src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/clutch%2Ffile1.name%2Fhofj8hT1Y30Juv0sAGCP?alt=media&token=86916e92-25bf-43ee-a8f6-0f75cf835aa8" />
                    <div className="text-white mt-1 fw-bold">NKFCB</div>
                </SwiperSlide>
                <SwiperSlide className='text-center'>
                    <img className='rounded-4' src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/clutch%2Ffile1.name%2FYNFiUBs7C3QI9nuPjZoJ?alt=media&token=318152f0-e01e-4ddd-affb-a297138e01b9" />
                    <div className="text-white mt-1 fw-bold">NKFCS</div>
                </SwiperSlide>
            </Swiper>
        </Slide>
    )
}