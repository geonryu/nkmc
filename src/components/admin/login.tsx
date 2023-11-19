import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import styled from "styled-components";
import { auth } from "../../firebase";
import { Col, Container, Row } from "react-bootstrap";

const Section = styled.section``;

export default function Login() {
    const navigate = useNavigate();//hook
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: {name, value}
        } = e; //??
        if(name === "email") {
            setEmail(value);
        } else if(name === "password") {
            setPassword(value);
        }
    }
    const onSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(email === "" || password ==="") return;
        try{
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/admin");
        } catch(e) {
            if(e instanceof FirebaseError) {
                console.error(e.message);
            }
        } finally {
        }
        
    }
    return (
        <Section className="py-5">
            <Container>
                <Row>
                    <Col xs={12} sm={8} lg={6} className="mx-auto">
                        <h3 className="text-center fw-bold mb-5">남광전기 관리자</h3>
                        <form onSubmit={onSubmit} className="w-100">
                            <input className="w-100 d-block rounded mb-3 border px-3 py-3" onChange={onChange} name="email" value={email} placeholder="Email" type="email" required/>
                            <input className="w-100 d-block rounded mb-3 border px-3 py-3" onChange={onChange} name="password" value={password} placeholder="password" type="password" required/>
                            <input className="w-100 d-block rounded bg-point text-white fw-bold px-2 py-3" onChange={onChange} type="submit" value={"Signin"}/>
                        </form>
                    </Col>
                </Row>
            </Container>
        </Section>
    );
}