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

export default function ThumbMagneticClutchBrake() {
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
                <SwiperSlide>
                    <img src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/brakeAndClutch%2Ffile1.name%2Fqb9vaiQ34ol71QQZ2ylK?alt=media&token=f576a11f-5239-477b-b5bc-8215d14f4c51" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/brakeAndClutch%2Ffile1.name%2FPtarrA0WFlq8Xj2q5z1o?alt=media&token=8d5a925e-637a-484f-a304-9b17dbb8503a" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/brakeAndClutch%2Ffile1.name%2F2A5oEUwLBYdlTpaBEvtK?alt=media&token=8a30f6b7-6e8c-40e0-9bc2-a1a8629f4e12" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/brakeAndClutch%2Ffile1.name%2FegVt9gH9EMLS5BC7yGwI?alt=media&token=d0ca5f76-8b8d-4777-b76b-99c7da283071" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/brakeAndClutch%2Ffile1.name%2FEJn6jTw7cajdsfdTo80y?alt=media&token=4367309e-7612-428b-89cd-e4f9eb593c93" />
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
                    <img className='rounded-4' src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/brakeAndClutch%2Ffile1.name%2Fqb9vaiQ34ol71QQZ2ylK?alt=media&token=f576a11f-5239-477b-b5bc-8215d14f4c51" />
                    <div className="text-white mt-1 fw-bold">NKSU</div>
                </SwiperSlide>
                <SwiperSlide className='text-center'>
                    <img className='rounded-4' src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/brakeAndClutch%2Ffile1.name%2FPtarrA0WFlq8Xj2q5z1o?alt=media&token=8d5a925e-637a-484f-a304-9b17dbb8503a" />
                    <div className="text-white mt-1 fw-bold">NKSUD</div>
                </SwiperSlide>
                <SwiperSlide className='text-center'>
                    <img className='rounded-4' src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/brakeAndClutch%2Ffile1.name%2F2A5oEUwLBYdlTpaBEvtK?alt=media&token=8a30f6b7-6e8c-40e0-9bc2-a1a8629f4e12" />
                    <div className="text-white mt-1 fw-bold">NKSUB</div>
                </SwiperSlide>
                <SwiperSlide className='text-center'>
                    <img className='rounded-4' src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/brakeAndClutch%2Ffile1.name%2FegVt9gH9EMLS5BC7yGwI?alt=media&token=d0ca5f76-8b8d-4777-b76b-99c7da283071" />
                    <div className="text-white mt-1 fw-bold">NKPC</div>
                </SwiperSlide>
                <SwiperSlide className='text-center'>
                    <img className='rounded-4' src="https://firebasestorage.googleapis.com/v0/b/namkwang-87a2f.appspot.com/o/brakeAndClutch%2Ffile1.name%2FEJn6jTw7cajdsfdTo80y?alt=media&token=4367309e-7612-428b-89cd-e4f9eb593c93" />
                    <div className="text-white mt-1 fw-bold">NKPB</div>
                </SwiperSlide>
            </Swiper>
        </Slide>
    )
}