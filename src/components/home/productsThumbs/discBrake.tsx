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

export default function ThumbDiscBrake() {
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
                    <img src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/discBrake%2Ffile1.name%2FUL1sCxbNISHcdYHZ59HG?alt=media&token=a31dff3b-113b-4285-b645-6645dcbbddcd" />
                </SwiperSlide>
                <SwiperSlide className='text-center'>
                    <img src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/discBrake%2Ffile1.name%2FEoCXMFvP5cbkOoAGUkjn?alt=media&token=8076fddf-8ef4-4798-a670-6bb8753d9bb0" />
                </SwiperSlide>
                <SwiperSlide className='text-center'>
                    <img src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/discBrake%2Ffile1.name%2FJjUz3gZSe8cMR0RgM2RD?alt=media&token=cbb48a46-6d69-48b8-ae51-bd29980dd75e" />
                </SwiperSlide>
                <SwiperSlide className='text-center'>
                    <img src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/discBrake%2Ffile1.name%2Fsp3SndcZ58hY2oZOF87l?alt=media&token=2f1e727b-7848-4263-b756-700e2e613dad" />
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
                    <img className='rounded-4' src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/discBrake%2Ffile1.name%2FUL1sCxbNISHcdYHZ59HG?alt=media&token=a31dff3b-113b-4285-b645-6645dcbbddcd" />
                    <div className="text-white mt-1 fw-bold">NKCA-10</div>
                </SwiperSlide>
                <SwiperSlide className='text-center'>
                    <img className='rounded-4' src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/discBrake%2Ffile1.name%2FEoCXMFvP5cbkOoAGUkjn?alt=media&token=8076fddf-8ef4-4798-a670-6bb8753d9bb0" />
                    <div className="text-white mt-1 fw-bold">NKCA-20</div>
                </SwiperSlide>
                <SwiperSlide className='text-center'>
                    <img className='rounded-4' src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/discBrake%2Ffile1.name%2FJjUz3gZSe8cMR0RgM2RD?alt=media&token=cbb48a46-6d69-48b8-ae51-bd29980dd75e" />
                    <div className="text-white mt-1 fw-bold">NKCA-30</div>
                </SwiperSlide>
                <SwiperSlide className='text-center'>
                    <img className='rounded-4' src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/discBrake%2Ffile1.name%2Fsp3SndcZ58hY2oZOF87l?alt=media&token=2f1e727b-7848-4263-b756-700e2e613dad" />
                    <div className="text-white mt-1 fw-bold">NKCA-40</div>
                </SwiperSlide>
            </Swiper>
        </Slide>
    )
}