import styled from "styled-components";
import { Container } from "react-bootstrap";

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/effect-fade';
import Heading from "../../global/heading";


const Section = styled.section`
`;
const Milestone = styled.div`
    // position: relative;
    // border-bottom: 2px dashed #cde4da;
    // &::after{
    //     content: '';
    //     display: block;
    //     width: 20px;
    //     height: 20px;
    //     border-radius: 50%;
    //     background-color: #fff;
    //     // border: 2px dashed #cde4da;
    //     position: absolute;
    //     bottom: 0;
    //     left: 50%;
    //     transform: translate(-50%, 50%);
    // }
`;
const Year = styled.div`
    .swiper-slide & button{color: #cde4da}
    .swiper-slide-active & button{color: #000}

    & .year{
        line-height: 1;
    }
`;
// const TxtSlider = styled.div`position: relative;`;
const TextBox = styled.div``;
// const Prev = styled.div`
//     position: absolute;
//     top: 50%;
//     left: 0;
//     top: 20px;
//     z-index: 9999;
// `;
// const Next = styled.div`
//     position: absolute;
//     top: 50%;
//     right: 0;
//     top: 20px;
//     z-index: 9999;
// `;
declare global {
    interface thumbsSwiper {
        destroyed: any;
    }
}
export default function MileStone() {
    // const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

    return(
        <Section className="py-5 col-md-10 col-lg-6 mx-auto">
            <Container>
                <Heading labelTxt={"Milestone"} titTxt1={`Leading Wind Technology`} titTxt2={" Innovation, Since 1972"} txtAlign={"center"}/>
                <Milestone className="pb-3 mb-3">
                    <Year className="d-flex justify-content-between py-3 border-bottom">
                        <div className="year text-point fw-bold fs-1 col-2">1972</div>
                        <TextBox className="col-9 d-flex">
                            <div className="fs-6 fw-bold text-point me-3">07</div>
                            <div className="text-start">
                                Established NAM KWANG ELECTRIC CO. #168, PUJEON-DONG BUSANJIN-GU BUSAN CITY
                            </div>
                        </TextBox>
                    </Year>
                    <Year className="d-flex justify-content-between py-3 border-bottom">
                        <div className="year text-point fw-bold fs-1 col-2">1985</div>
                        <TextBox className="col-9 d-flex">
                            <div className="fs-6 fw-bold text-point me-3">01</div>
                            <div className="text-start">
                                Joined The Electric Industrial Cooperative Association
                            </div>
                        </TextBox>
                    </Year>
                    <Year className="d-flex justify-content-between py-3 border-bottom">
                        <div className="year text-point fw-bold fs-1 col-2">1985</div>
                        <TextBox className="col-9 d-flex">
                            <div className="fs-6 fw-bold text-point me-3">05</div>
                            <div className="text-start">
                                Registered a license to put brand and trademark on brake and 3 other items
                            </div>
                        </TextBox>
                    </Year>
                    <Year className="d-flex justify-content-between py-3 border-bottom">
                        <div className="year text-point fw-bold fs-1 col-2">1989</div>
                        <TextBox className="col-9 d-flex">
                            <div className="fs-6 fw-bold text-point me-3">07</div>
                            <div className="text-start">
                                Moved into the new-building and expanded the head office at#370-29 SHINPYUNG-DONG SAHA-GU BUSAN CITY
                            </div>
                        </TextBox>
                    </Year>
                    <Year className="d-flex justify-content-between py-3 border-bottom">
                        <div className="year text-point fw-bold fs-1 col-2">1991</div>
                        <TextBox className="col-9 d-flex">
                            <div className="fs-6 fw-bold text-point me-3">11</div>
                            <div className="text-start">
                                Acquired Canadian Standards (CSA)
                            </div>
                        </TextBox>
                    </Year>
                    <Year className="d-flex justify-content-between py-3 border-bottom">
                        <div className="year text-point fw-bold fs-1 col-2">1993</div>
                        <TextBox className="col-9 d-flex">
                            <div className="fs-6 fw-bold text-point me-3">02</div>
                            <div className="text-start">
                                Acquired the approval of the parts of elevator by the Industrial Promotion Center
                            </div>
                        </TextBox>
                    </Year>
                    <Year className="d-flex justify-content-between py-3 border-bottom">
                        <div className="year text-point fw-bold fs-1 col-2">2004</div>
                        <TextBox className="col-9 d-flex">
                            <div className="fs-6 fw-bold text-point me-3">09</div>
                            <div className="text-start">
                                Acquired QS-9000
                            </div>
                        </TextBox>
                    </Year>
                    <Year className="d-flex justify-content-between py-3 border-bottom">
                        <div className="year text-point fw-bold fs-1 col-2">2022</div>
                        <TextBox className="col-9 d-flex">
                            <div className="fs-6 fw-bold text-point me-3">09</div>
                            <div className="text-start">
                                Acquired ISO 9001:2015
                            </div>
                        </TextBox>
                    </Year>
                    <Year className="d-flex justify-content-between me-3 py-3">
                        <div className="year text-point fw-bold fs-1 col-2">2023</div>
                        <TextBox className="col-9 d-flex">
                            <div className="fs-6 fw-bold text-point me-3">06</div>
                            <div className="text-start">
                                Acquired DNV-SE-0074:2021-09
                            </div>
                        </TextBox>
                    </Year>
                    {/* <Swiper
                        loop={true}
                        slidesPerView={2.5}
                        centeredSlides={true}
                        modules={[Thumbs, Navigation]}
                        thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                        className="milestone"
                        speed={600}
                        slideToClickedSlide={true}
                        navigation={
                            {
                                nextEl: ".nextBtn",
                                prevEl: ".prevBtn",
                            }
                        }
                    >
                        <SwiperSlide>
                            <Year className="text-center fw-bold fs-1"><button type="button">1972</button></Year>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Year className="text-center fw-bold fs-1"><button type="button">1985</button></Year>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Year className="text-center fw-bold fs-1"><button type="button">1985</button></Year>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Year className="text-center fw-bold fs-1"><button type="button">1989</button></Year>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Year className="text-center fw-bold fs-1"><button type="button">1991</button></Year>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Year className="text-center fw-bold fs-1"><button type="button">1993</button></Year>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Year className="text-center fw-bold fs-1"><button type="button">2004</button></Year>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Year className="text-center fw-bold fs-1"><button type="button">2022</button></Year>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Year className="text-center fw-bold fs-1"><button type="button">2023</button></Year>
                        </SwiperSlide>
                    </Swiper> */}
                </Milestone>
                {/* <TxtSlider>
                    <Prev className="col-2"><button className="d-flex align-items-center justify-content-center p-2 rounded-circle mx-auto text-gray-600 fw-bold prevBtn"><span className="material-symbols-outlined">arrow_back</span></button></Prev>
                    <Next className="col-2"><button className="d-flex align-items-center justify-content-center p-2 rounded-circle mx-auto text-gray-600 fw-bold nextBtn"><span className="material-symbols-outlined">arrow_forward</span></button></Next>
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        loop={true}
                        effect={'fade'}
                        fadeEffect={{crossFade: true}}
                        slidesPerView={1}
                        centeredSlides={true}
                        modules={[Thumbs, EffectFade]}
                        className="txtSlider col-8"
                        speed={600}
                    >
                        <SwiperSlide>
                            <TextBox>
                                <div className="fs-6 text-center py-2">0715</div>
                                <div className="text-start">
                                    Established NAM KWANG ELECTRIC CO. #168, PUJEON-DONG BUSANJIN-GU BUSAN CITY
                                </div>
                            </TextBox>
                        </SwiperSlide>
                        <SwiperSlide>
                            <TextBox>
                                <div className="fs-6 text-center py-2">0107</div>
                                <div className="text-start">
                                    Joined The Electric Industrial Cooperative Association
                                </div>
                            </TextBox>
                        </SwiperSlide>
                        <SwiperSlide>
                            <TextBox>
                                <div className="fs-6 text-center py-2">0506</div>
                                <div className="text-start">
                                    Registered a license to put brand and trademark on brake and 3 other items
                                </div>
                            </TextBox>
                        </SwiperSlide>
                        <SwiperSlide>
                            <TextBox>
                                <div className="fs-6 text-center py-2">0715</div>
                                <div className="text-start">
                                    Moved into the new-building and expanded the head office at#370-29 SHINPYUNG-DONG SAHA-GU BUSAN CITY
                                </div>
                            </TextBox>
                        </SwiperSlide>
                        <SwiperSlide>
                            <TextBox>
                                <div className="fs-6 text-center py-2">1128</div>
                                <div className="text-start">
                                    Acquired Canadian Standards (CSA)
                                </div>
                            </TextBox>
                        </SwiperSlide>
                        <SwiperSlide>
                            <TextBox>
                                <div className="fs-6 text-center py-2">0228</div>
                                <div className="text-start">
                                    Acquired the approval of the parts of elevator by the Industrial Promotion Center
                                </div>
                            </TextBox>
                        </SwiperSlide>
                        <SwiperSlide>
                            <TextBox>
                                <div className="fs-6 text-center py-2">0910</div>
                                <div className="text-start">
                                    Acquired QS-9000
                                </div>
                            </TextBox>
                        </SwiperSlide>
                        <SwiperSlide>
                            <TextBox>
                                <div className="fs-6 text-center py-2">0915</div>
                                <div className="text-start">
                                    Acquired ISO 9001:2015
                                </div>
                            </TextBox>
                        </SwiperSlide>
                        <SwiperSlide>
                            <TextBox>
                                <div className="fs-6 text-center py-2">0630</div>
                                <div className="text-start">
                                    Acquired DNV-SE-0074:2021-09
                                </div>
                            </TextBox>
                        </SwiperSlide>
                    </Swiper>
                </TxtSlider> */}
            </Container>
        </Section>
    );
}