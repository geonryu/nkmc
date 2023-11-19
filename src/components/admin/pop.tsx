import { useState } from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components"
import { auth, db, storage } from "../../firebase";
import { addDoc, collection, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const Popup = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;

    & a{
        text-wrap: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
`;

export default function Pop(props: any) {

    const { type, category, printData } = props;
    const [tit, setTit] = useState("");
    const [content, setContent] = useState("");
    const [file1, setFile1] = useState<File | null>(null);//File이거나 Null
    const [file2, setFile2] = useState<File | null>(null);//File이거나 Null
    const [file3, setFile3] = useState<File | null>(null);//File이거나 Null
    const [file4, setFile4] = useState<File | null>(null);//File이거나 Null
    
    const closePop = () => {
        props.setActivePop(false);
    }

    const onChange = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        const {
            target: {name, value}
        } = e; 
        if(name === "tit") {
            setTit(value);
        } else if(name === "content") {
            setContent(value);
        }
    }
    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {
            target: {name, files}
        } = e; 
        if(name === "attach1") {
            if(files && files.length === 1) {
                setFile1(files[0]);
            }
        } else if(name === "attach2") {
            if(files && files.length === 1) {
                setFile2(files[0]);
            }
        } else if(name === "attach3") {
            if(files && files.length === 1) {
                setFile3(files[0]);
            }
        } else if(name === "attach4") {
            if(files && files.length === 1) {
                setFile4(files[0]);
            }
        }
    }

    const onSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const user = auth.currentUser;
        if(!user) return;
        try {
            const doc = await addDoc(collection(db, category), {
                tit : tit,
                content : content,
                createdAt : Date.now(),
            }); //db 저장
            await updateDoc(doc, {
                id: doc.id
            });
            if(file1) {
                const locationRef = ref(storage, `${category}/${tit}/${doc.id}`);
                const result = await uploadBytes(locationRef, file1);
                const url = await getDownloadURL(result.ref);
                await updateDoc(doc, {
                    attached1: url,
                    attached1Name : file1.name
                });
            }
            if(file2) {
                const locationRef = ref(storage, `${category}/${tit}/${doc.id}`);
                const result = await uploadBytes(locationRef, file2);
                const url = await getDownloadURL(result.ref);
                await updateDoc(doc, {
                    attached2: url,
                    attached2name : file2.name
                });
            }
            if(file3) {
                const locationRef = ref(storage, `${category}/${tit}/${doc.id}`);
                const result = await uploadBytes(locationRef, file3);
                const url = await getDownloadURL(result.ref);
                await updateDoc(doc, {
                    attached3: url,
                    attached3name : file3.name
                });
            }
            if(file4) {
                const locationRef = ref(storage, `${category}/${tit}/${doc.id}`);
                const result = await uploadBytes(locationRef, file4);
                const url = await getDownloadURL(result.ref);
                await updateDoc(doc, {
                    attached4: url,
                    attached4name : file4.name
                });
            }

            setTit("");
            setContent("");
            // setFile(null);
        } catch(e) {
            console.log(e);
        } finally {
            props.setActivePop(false);
        }
    }
    return(
        <Popup className={`p-3 bg-white shadow rounded-4 col-lg-8 ${props.setActivePop ? "d-block" : "d-none"}`}>
            <Container className="">
                <div>
                    <form action="" onSubmit={onSubmit}>
                        <div>
                            {type === "read"
                            ?
                                <textarea onChange={onChange} name="tit" className="border p-2 mb-3 rounded w-100" readOnly value={printData.tit} rows={1}></textarea>
                            : 
                                <textarea onChange={onChange} name="tit" placeholder="제목을 입력해주세요" className="border p-2 mb-3 rounded w-100" rows={1}></textarea>
                            }
                        </div>
                        <div>
                            {type === "read"
                            ?
                                <textarea onChange={onChange} name="content" className="border p-2 w-100 mb-3 rounded" readOnly value={printData.content} rows={10}></textarea>
                            : 
                                <textarea onChange={onChange} name="content" placeholder="본문을 입력해주세요" className="border p-2 w-100 mb-3 rounded" rows={10}></textarea>
                            }
                        </div>
                        <div className="mb-3">
                            <label htmlFor="attach1" className="mb-1 fw-bold text-gray-600">이미지</label>
                            {type === "create" ? <input onChange={onFileChange} className="w-100" type="file" name="attach1" id="attach1" /> : null}
                            {type === "read" ? <a className="w-100 d-block text-primary text-decoration-underline" target="_blank" href={printData.attached1} >{printData.attached1Name}</a> : null}
                            
                        </div>
                        <div className="mb-3">
                            <label htmlFor="attach2" className="mb-1 fw-bold text-gray-600">첨부파일1</label>
                            {type === "create" ? <input onChange={onFileChange} className="w-100" type="file" name="attach2" id="attach2" /> : null}
                            {type === "read" ? <a className="w-100 d-block text-primary text-decoration-underline" target="_blank" href={printData.attached2} >{printData.attached2Name}</a> : null}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="attach3" className="mb-1 fw-bold text-gray-600">첨부파일2</label>
                            {type === "create" ? <input onChange={onFileChange} className="w-100" type="file" name="attach3" id="attach3"/> : null}
                            {type === "read" ? <a className="w-100 d-block text-primary text-decoration-underline" target="_blank" href={printData.attached3} >{printData.attached3Name}</a> : null}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="attach4" className="mb-1 fw-bold text-gray-600">첨부파일3</label>
                            {type === "create" ? <input onChange={onFileChange} className="w-100" type="file" name="attach4" id="attach4" /> : null}
                            {type === "read" ? <a className="w-100 d-block text-primary text-decoration-underline" target="_blank" href={printData.attached4} >{printData.attached4Name}</a> : null}
                        </div>
                        <div className="text-center">
                            <button type="button" className="border rounded py-2 px-3 fw-bold me-2" onClick={closePop}>{type === "create" ? "취소" : "확인"}</button>
                            {type === "create" ? <button type="submit" className="border rounded py-2 px-3 bg-light1 fw-bold">등록하기</button> : null}
                        </div>
                    </form>
                </div>
            </Container>
        </Popup>
    )
}