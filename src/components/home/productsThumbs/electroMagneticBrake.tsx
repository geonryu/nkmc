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

export default function ThumbElectroMagneticBrake() {
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
                    <img src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/brake%2Ffile1.name%2FQVbvi6PX6wJqhVa3ML0w?alt=media&token=edbffb70-4906-4a58-9690-f999dc5748c8" />
                </SwiperSlide>
                <SwiperSlide className='text-center'>
                    <img src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/brake%2Ffile1.name%2F9WgNOSanHBdlGbG4445I?alt=media&token=e0decb54-21f1-4b5c-85f7-8f2b5470aa1e" />
                </SwiperSlide>
                <SwiperSlide className='text-center'>
                    <img src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/brake%2Ffile1.name%2FW0Qxri6sdXQkseb5Hvzq?alt=media&token=273bf56e-7687-4d37-afb6-11771cf35ccb" />
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
                    <img className='rounded-4' src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/brake%2Ffile1.name%2FQVbvi6PX6wJqhVa3ML0w?alt=media&token=edbffb70-4906-4a58-9690-f999dc5748c8" />
                    <div className="text-white mt-1 fw-bold">NKOB</div>
                </SwiperSlide>
                <SwiperSlide className='text-center'>
                    <img className='rounded-4' src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/brake%2Ffile1.name%2F9WgNOSanHBdlGbG4445I?alt=media&token=e0decb54-21f1-4b5c-85f7-8f2b5470aa1e" />
                    <div className="text-white mt-1 fw-bold">NKOBU</div>
                </SwiperSlide>
                <SwiperSlide className='text-center'>
                    <img className='rounded-4' src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/brake%2Ffile1.name%2FW0Qxri6sdXQkseb5Hvzq?alt=media&token=273bf56e-7687-4d37-afb6-11771cf35ccb" />
                    <div className="text-white mt-1 fw-bold">NKOBZ</div>
                </SwiperSlide>
            </Swiper>
        </Slide>
    )
}