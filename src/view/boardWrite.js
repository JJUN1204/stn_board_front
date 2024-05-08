import '../css/common.css';
import { Link } from 'react-router-dom';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import React, { useState, useEffect } from 'react';



function BoardWrite() {
    
    const [title, setTitle] = useState('');
    const [writerId, setWriterId] = useState('');
    const [passWord, setPassWord] = useState('');
    const [email, setEmail] = useState('');
    const [isPrivate, setIsPrivate] = useState(0);
    const [isAlert, setIsAlert] = useState(false);
    const [content, setContent] = useState(false);
    const [files, setFiles] = useState([]);

    const handleQuillChange = (content) => {
        //  <p> 태그로 감싸져서 넘어오는 content를 제거하여 순수한 문자열만 가져오기
        const textContent = content.replace(/<[^>]+>/g, '');
        setContent(textContent);
    };
    

    //quill Editor 라이브러리 사용
    const modules = {
        toolbar: [
            [{ header: [1, 2, false] }],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [
                { list: "ordered" },
                { list: "bullet" },
                { indent: "-1" },
                { indent: "+1" },
            ],
            ["link", "image"],
            [{ align: [] }, { color: [] }, { background: [] }],
            ["clean"],
        ],
    };

    const formats = [
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "indent",
        "link",
        "image",
        "align",
        "color",
        "background",
    ];

    //파일 기능

    // 1.파일 선택 시
    const handleChangeFile = (event) => {
        const fileList = Array.from(event.target.files); //file 값을 배열로 변환
        setFiles([...files, ...fileList]); //files와 filesLst를 합쳐줌
    };

    // 2.파일 삭제 시
    const handleDeleteFile = (index) => {
        const newFiles = [...files];
        newFiles.splice(index, 1);
        setFiles(newFiles);
    };

    const handleAlertChange = () => {
        setIsAlert(!isAlert);
    };

    const handlePrivateChange = () => {
        setIsPrivate(!isPrivate);
    };

    return (
        <><div id="WrapTitle">
            <div className="container">
                <h1 className="logo">STN INFOTECH</h1>
            </div>
        </div><div id="WrapContainer">
                <div className="container">
                    <div className="wrap_tit">
                        <h2 className="tit_cont">자유게시판</h2>
                    </div>
                    <div className="wrap_write">
                        <dl className="write_tit">
                            <dt>제목</dt>
                            <dd><input type="text" name='title' className="comm_inp_text" style={{ width: '100%' }} value={title} onChange={(e) => {setTitle(e.target.value)}}/></dd>
                        </dl>
                        <div className="write_info">
                            <dl className="info"> 
                                <dt>작성자</dt>
                                <dd><input type="text" name='writerId' className="comm_inp_text" style={{ width: '80px' }} value={writerId} onChange={(e) => {setWriterId(e.target.value)}}/></dd>
                                <dt>비밀번호</dt>
                                <dd><input type="text" name='passWord' className="comm_inp_text" style={{ width: '100px' }} value={passWord} onChange={(e) => {setPassWord(e.target.value)}}/></dd>
                                <dt>이메일</dt>
                                <dd><input type="text" name='email' className="comm_inp_text" style={{ width: '150px' }} value={email} onChange={(e) => {setEmail(e.target.value)}}/></dd>
                            </dl>

                            <dl className="side">
                                <dt>공지사항</dt>
                                <dd><label className="comm_swich"><input type="checkbox" name='isAlert' value={isAlert} checked={isAlert} onChange={handleAlertChange} /><span className="ico_txt"></span></label></dd>
                                <dt>비밀글</dt>
                                <dd><label className="comm_swich"><input type="checkbox" name='isPrivate' value={isPrivate} checked={isPrivate} onChange={handlePrivateChange}/><span className="ico_txt"></span></label></dd>
                            </dl>
                        </div>
                        <div className="write_cont">
                            <ReactQuill
                                style={{ height: "350px" }}
                                theme="snow"
                                modules={modules}
                                formats={formats}
                                value={content || ""}
                                onChange={handleQuillChange}
                            />
                        </div>
                        <div className="write_file">
                            <strong className="tit_file"><span className="ico_img flie">첨부파일</span> 첨부파일</strong>
                            <div className="cont_file">
                                <input type="file" id='imgUpload' className="comm_inp_file" style={{ display: 'none' }} onChange={handleChangeFile} multiple />
                                <label htmlFor="imgUpload" className="comm_inp_text" style={{ width: '200px', textAlign: 'center', backgroundColor: '#f1f1f1', padding: '5px', borderRadius: '10px', cursor: 'pointer' }}>파일 선택</label>
                                <label>선택된 파일 개수: {files.length}</label>
                                <ul className="list_file_inline mt_5">
                                    {files.map((file, index) => (
                                        <li key={index}>
                                            {file.name}
                                            <button className="btn_ico_del" onClick={() => handleDeleteFile(index)}>삭제</button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className="comm_paging_btn">
                        <div className="flo_side left">
                            <button className="comm_btn_round fill"><Link to='/'>목록</Link></button>
                        </div>
                        <div className="flo_side right">
                            <button className="comm_btn_round"><Link to='/'>취소</Link></button>
                            <button className="comm_btn_round fill">등록</button>
                        </div>
                    </div>
                </div>
            </div></>

    );
}

export default BoardWrite;
