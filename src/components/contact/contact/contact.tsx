import { addDoc, collection, updateDoc } from "firebase/firestore";
import { Col, Container, Row, Table } from "react-bootstrap";
import styled from "styled-components"
import { db, storage } from "../../../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Section = styled.section``;
const Require = styled.div`
    &::before{
        content: "*";
        margin-right: 3px;
    }
`;

export default function ContactUs() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [content, setContent] = useState("");
    const [file, setFile] = useState<any>(null);
    const [fileName, setFileName] = useState<any>(null);
    const [agree, setAgree] = useState("");
    const [error, setError] = useState<any>(null);
    
    const onTypeChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        const {
            target: {name, value}
        } = e; 
        if(name === "content") {
            setContent(value);
        }
    };
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: {name, value}
        } = e; 
        if(name === "name") {
            setName(value);
        } else if(name === "company") {
            setCompany(value);
        } else if(name === "email") {
            setEmail(value);
        } else if(name === "phone") {
            setPhone(value);
        } else if(name === "agree") {
            setAgree(value);
        }
    }

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: {name, files}
        } = e; 
        if(name === "file") {
            if(files && files.length === 1 && files[0].size < 10 * 1024 * 1024) {
                setFile(files[0]);
                setFileName(files[0].name);
                setError(null);
            } else {
                setError("업로드하실 파일의 용량을 확인해주세요.")
            }
        }
        
    }

    const onSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
        console.log(agree)
        e.preventDefault();
        try {
            const doc = await addDoc(collection(db, "inquiries"), {
                name : name,
                company : company,
                email : email,
                phone : phone,
                content : content,
                agree : agree,
                createdAt : Date.now(),
            }); //db 저장
            await updateDoc(doc, {
                id: doc.id
            });
            if(file) {
                const locationRef = ref(storage, `inquiries/${`file.name`}/${doc.id}`);
                const result = await uploadBytes(locationRef, file);
                const url = await getDownloadURL(result.ref);
                await updateDoc(doc, {
                    attached1: url,
                    attached1Name : file.name
                });
            }

            

            setName("");
            setCompany("");
            setEmail("");
            setPhone("");
            setCompany("");
            setFile("");
            setAgree("");
            navigate("/contact/contactus");
        } catch(e) {
            console.log(e);
        } finally {
        }
    }
    return (
        <Section className="py-5">
            <Container>
                <form onSubmit={onSubmit}>            
                    <Row className="form">
                        <Col xs={12} md={6} className="mb-3">
                            <div className="input">
                                <label className="w-100">
                                    <Require className="fw-bold fs-6 text-point mb-2 d-block">Name</Require>
                                    <input onChange={onChange} className="border rounded p-2 d-block w-100" type="text" name="name" required />
                                </label>
                            </div>
                        </Col>
                        <Col xs={12} md={6} className="mb-3">
                            <div className="input">
                                <label className="w-100">
                                    <Require className="fw-bold fs-6 text-point mb-2 d-block">Company Name</Require>
                                    <input onChange={onChange} className="border rounded p-2 d-block w-100" type="text" name="company" required />
                                </label>
                            </div>
                        </Col>
                        <Col xs={12} md={6} className="mb-3">
                            <div className="input">
                                <label className="w-100">
                                    <Require className="fw-bold fs-6 text-point mb-2 d-block">Email address</Require>
                                    <input onChange={onChange} className="border rounded p-2 d-block w-100" type="email" name="email" required />
                                </label>
                            </div>
                        </Col>
                        <Col xs={12} md={6} className="mb-3">
                            <div className="input">
                                <label className="w-100">
                                    <Require className="fw-bold fs-6 text-point mb-2 d-block">Phone Number</Require>
                                    <input onChange={onChange} className="border rounded p-2 d-block w-100" type="text" name="phone" required />
                                </label>
                            </div>
                        </Col>
                        <Col xs={12} className="mb-3">
                            <div className="full">
                                <label className="w-100">
                                    <Require className="fw-bold fs-6 text-point mb-2 d-block">Your Inquiry</Require>
                                    <textarea onChange={onTypeChange} className="border rounded d-block w-100 p-2" rows={10} name="content"></textarea>
                                </label>
                            </div>
                        </Col>
                        <Col xs={12} className="mb-3">
                            <div className="full">
                                <span className="fw-bold fs-6 text-point mb-2 d-block">Attachement</span>
                                <div className="d-flex">
                                    <input className="upload-name border rounded p-2 d-block w-100 col" name="file" disabled placeholder={`${fileName ? fileName : "파일은 최대 10MB까지 업로드 하실 수 있습니다."}`} />
                                    <label htmlFor="file" className="btn bg-point text-white fw-bold ms-2">등록</label>
                                    <button type="button" className="btn bg-gray-200 fw-bold ms-2">삭제</button>
                                    <input onChange={onFileChange} id="file" className="d-none" type="file" name="file" />
                                </div>
                                <div className="text-gray-400">{error}</div>
                            </div>
                        </Col>
                        <Col xs={12} className="mb-3">
                            <div className="full">
                                <span className="fw-bold fs-6 text-point mb-2 d-block">Privacy Policy</span>
                                <div className="privacy">
                                    <p className="txt">
                                    
                                    남광전기(이하 “회사”)는 다음과 같이 귀하의 개인정보를 수집 및 이용합니다.
                                    </p>
                                    <div className="scroll">
                                        <Table className="border rounded-4">
                                            <tbody>
                                                <tr>
                                                    <td className="bg-gray-100 text-center fw-bold text-gray-800">수집항목</td>
                                                    <td>
                                                        <b>(필수항목)</b>: 업체명, 성명, 이메일, 휴대전화, 주소, 제품명 및 사양, 수량, 서비스 이용기록, 접속 로그, 접속 IP정보
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="bg-gray-100 text-center fw-bold text-gray-800">수집 및 이용목적</td>
                                                    <td>회사의 서비스 관련 문의사항에 대한 답변 및 이용자에 대한 각종 고지 및 연락 등 제품 문의 및 고객 대응과 제품 및 서비스의 제공</td>
                                                </tr>
                                                <tr>
                                                    <td className="bg-gray-100 text-center fw-bold text-gray-800">
                                                        보유 및 이용기간
                                                    </td>
                                                    <td>
                                                        관계 법령의 규정에 따라 귀하의 개인정보를 보존할 의무가 있는 경우가 아닌 한, 회사는 상담 접수일로부터 3년까지 귀하의 개인정보를 보유 및 이용합니다.
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="bg-gray-100 text-center fw-bold text-gray-800">
                                                    거부권 및 거부 시 불이익
                                                    </td>
                                                    <td>
                                                    귀하는 위와 같은 개인정보의 수집 및 이용에 대해 동의를 거부하실 수 있으나, 동의를 거부하시는 경우 문의 사항에 대한 답변 등 서비스 이용이 제한될 수 있습니다.
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                                <Col xs={12} className="ck-box">
                                    <div className="mb-3">
                                            개인정보 필수항목의 수집 및 이용에 동의합니다.
                                    </div>
                                    <Row>
                                        <Col className="w-100">
                                            <input onChange={onChange} className="me-2" type="radio" name="agree" value="agree"/>
                                            <span>동의함</span>
                                        </Col>
                                        <Col className="w-100">
                                            <input onChange={onChange} className="me-2" type="radio" name="agree" value="disagree"/>
                                            <span>동의하지 않음</span>
                                        </Col>
                                    </Row>
                                </Col>
                            </div>
                        </Col>
                    </Row>
                    <div className="text-center mt-5">
                        <button className="btn bg-point text-white fw-bold" type="submit">Request a quotation</button>
                    </div>
                </form>
            </Container>
        </Section>
    )
}