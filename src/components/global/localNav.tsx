import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components"

const Slogan = styled.div``;
const LocalNavigation = styled.div`
`;

const LocalNav = styled.ul``;
const LocalNavList = styled.li`
    display: flex;
    align-items: center;
    &::after{content: ''; display: block; width: 3px; height: 3px; background-color: #888; margin: 0 10px;}
    &:last-child::after{content: none;}
`;

interface ChildProps {
    context1: string,
    context2: string,
    depth: {
        tit: string,
        to: string
    }[];
}
  
export default function LNB(props : ChildProps) {
    return (
        <LocalNavigation className="py-3">
            <Container>
                <LocalNav className="d-flex align-items-center p-0">
                    <LocalNavList><Link to={"/"}><span className="material-symbols-outlined">home</span></Link></LocalNavList>
                    {   
                        props.depth.map((item) => {
                            return (
                                <LocalNavList key={`lnb${item.tit}`} className="fs-6 fw-bold"><Link to={item.to}>{item.tit}</Link></LocalNavList>
                                );
                            })
                        }
                </LocalNav>
                <Slogan className="fw-bold fs-1">{props.context1} <br /> {props.context2}</Slogan>
            </Container>
        </LocalNavigation>
    )
}