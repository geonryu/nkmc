import { Container } from "react-bootstrap";
import styled from "styled-components";
import UseCountNum from "./countYear";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import Intro from "./intro";
import DefaultButton from "../global/defaultButton";

gsap.registerPlugin(ScrollTrigger);

const Section = styled.section`
    position: relative;
    &::after{content: ''; display: block; position: absolute; top: 0; left: 0; width: 100%; height: 200%; background: radial-gradient(ellipse at center left, #a2f02e22, transparent, transparent); background-size: cover background-repeat: no-repeat;  background-position: top left;}
    &::before{content: ''; display: block; position: absolute; top: 0; right: 0; width: 100%; height: 100%; background: radial-gradient(ellipse at top right, #6900FF44, transparent, transparent); background-size: cover background-repeat: no-repeat;  background-position: top left;}
`;
const Context = styled.div`
    overflow: hidden;
`;
const Svg = styled.svg`
    height: 50%;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    & .cls-1 {fill: none;
        stroke: #ffffff22;
        stroke-miterlimit: 10;}
    & .circle{filter: blur(2px);}
`;
const Year = styled.div`
    text-align: center;
    font-size: 142px;
    font-weight: bold;
    transfrom: translateY(100%);
    opacity: 0;
    transition: all 0.3s;
    &.active{opacity: 1; transform: translateY(0);}
    & .year{
        background: -webkit-linear-gradient(#fff, #fff, #ffffff11,#ffffff00);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    @media (min-width: 576px) {
        font-size: 192px;
    }
`;

export default function Introduction () {
    const elementRef = useRef<HTMLDivElement>(null);
    const [active, SetActive] = useState(false);

    useEffect(() => {
        if (elementRef.current) {
            gsap.to(elementRef.current, {
                scrollTrigger: {
                    trigger: elementRef.current,
                    start: 'top center',
                    end: 'bottom center',
                    onToggle: ({ isActive }) => {
                        if (isActive) {
                            SetActive(true);
                        }
                    },
                },
            });
        }
    }, []);

    return(
        <Section className="py-5">
            <Container className="py-5 position-relative z-1">
                <Context className="py-md-5 mb-5 my-md-5 text-center text-white">
                    <h2 className="display-1 fw-bold" data-aos={"fade-up"} data-aos-duration={200}>The company specializing<br/>in electric clutch and brake</h2>
                    <div data-aos={"fade-up"} data-aos-duration={200} className="my-3 mx-auto col-10 col-md-8">Innovation for the Environment, Powering the Future! Leading the global stage with electronic brakes and clutches, we commit to being pioneers in eco-friendly technology.</div>
                    <div data-aos={"fade-up"} data-aos-duration={200}><DefaultButton content={"Get To Know Us"} type={"to"} theme={"default"} to={"/company/about"} /></div>
                </Context>
                {/* <Svg ref={windRef}  xmlns="http://www.w3.org/2000/svg" id="Layer_2" data-name="Layer 2" viewBox="0 0 522.74 522.74">
                    <g id="Layer_1-2" data-name="Layer 1">
                        <g>
                            <g>
                                <path id="abc" className="cls-2" d="M264.81,273.6c.2-2.17,2.73-3.24,4.43-1.88,26.82,21.44,182.16,168.38,182.22,172.86,.07,4.87-7.99,4.22-13.12,1.72s-132.63-74.22-156.44-103.72c-19.24-23.84-18.2-57.09-17.09-68.98Z"/>
                                <path id="asdf" className="cls-2" d="M270.24,252.27c-1.98,.91-4.17-.74-3.84-2.9,5.16-33.95,54.74-241.94,58.59-244.24,4.19-2.5,7.65,4.81,8.05,10.5,.4,5.69,2.04,151.97-11.61,187.34-11.03,28.58-40.34,44.31-51.19,49.29Z"/>
                                <path id="aaa" className="cls-2" d="M249.06,258.24c1.78,1.26,1.44,3.98-.59,4.78-31.98,12.51-236.9,73.56-240.81,71.38-4.26-2.38,.34-9.03,5.07-12.22,4.73-3.19,130.59-77.75,168.05-83.62,30.27-4.74,58.54,12.78,68.28,19.69Z"/>
                            </g>
                            <rect id="zxcv" className="cls-1" x="0" y="0" width="522.74" height="522.74" rx="261.37" ry="261.37" transform="translate(522.74 0) rotate(90)"/>
                            <g>
                                <line className="cls-2" x1="400.18" y1="392.92" x2="388.24" y2="417.4"/>
                                <line className="cls-2" x1="305.89" y1="75.38" x2="333.06" y2="73.48"/>
                                <line className="cls-2" x1="78.03" y1="315.81" x2="62.81" y2="293.23"/>
                            </g>
                        </g>
                    </g>
                    <circle ref={circleRef} id="mopth" cx="50%" cy="50%" r="4" fill="red"></circle>
                </Svg> */}
                <Svg xmlns="http://www.w3.org/2000/svg" id="Layer_2" data-name="Layer 2" viewBox="0 0 540.78 405.2">
                    <g id="Layer_1-2" data-name="Layer 1">
                        <g>
                            <path id="path-1" className="cls-1" d="M66.97,0V216.76c0,16.83-3.27,33.51-9.64,49.09L.46,405.01"/>
                            <path id="path-2" className="cls-1" d="M202.58,0V233.45c0,5.86-.4,11.71-1.19,17.51l-20.98,154.04"/>
                            <path id="path-3" className="cls-1" d="M338.2,0V233.45c0,5.86,.4,11.71,1.19,17.51l20.98,154.04"/>
                            <path id="path-4" className="cls-1" d="M473.82,0V216.76c0,16.83,3.27,33.51,9.64,49.09l56.86,139.16"/>
                        </g>
                    </g>
                    <circle className="circle" r="2" fill="#8fc63f">
                        <animateMotion repeatCount="indefinite" dur="5s">
                            <mpath href="#path-1" />
                        </animateMotion>
                    </circle>
                    <circle className="circle" r="2" fill="#8fc63f">
                        <animateMotion repeatCount="indefinite" dur="1.43s">
                            <mpath href="#path-2" />
                        </animateMotion>
                    </circle>
                    <circle className="circle" r="2" fill="#8fc63f">
                        <animateMotion repeatCount="indefinite" dur="2.23s">
                            <mpath href="#path-3" />
                        </animateMotion>
                    </circle>
                    <circle className="circle" r="2" fill="#8fc63f">
                        <animateMotion repeatCount="indefinite" dur="6.123s">
                            <mpath href="#path-4" />
                        </animateMotion>
                    </circle>
                </Svg>
                <Year className={`pt-5 ${active ? "active" : null} position-relative z-1`} ref={elementRef}>
                    {/* <div className="text-point text-center fs-6 fw-bold pt-5">SINCE</div> */}
                    <div className="year lh-1">
                        <UseCountNum  trigger={active} end="1972" start="0" duration="2000" />
                    </div>
                </Year>
                <div className="z-1 position-relative">
                    <Intro></Intro>
                </div>
            </Container>
        </Section>
    )
}