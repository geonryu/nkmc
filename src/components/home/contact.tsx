import { Container } from "react-bootstrap";
import styled from "styled-components";
import Heading from "../global/heading";
import DefaultButton from "../global/defaultButton";

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/effect-fade';

const Section = styled.section`
    
`;

export default function Contact() {

    return(
        <Section className="py-5">
            <Container> 
                <Heading labelTxt={"Contact"} titTxt1={`Get In Touch Directly`} titTxt2={""} txtAlign={"center"}/>
                <div className="d-flex flex-column">
                    <div className="d-flex justify-content-center">
                        We can help. Our team of exprets is on hand to answer your questions.
                    </div>
                    
                    <div className="text-center">
                        <DefaultButton content={"Contact"} type={"to"} theme={"light"} to={"/contact/contactus"} />
                    </div>
                </div>
            </Container>
        </Section>
    )
}