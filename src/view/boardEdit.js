import '../css/common.css'  
import { Link ,useParams, useNavigate} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactQuill from "react-quill";


function BoardEdit() {

    const [boardViewData, setBoardViewData] = useState([]);
    const { boardIdx } = useParams();

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

    useEffect(() => {
       getBoardIdx();
    }, []);

    const [input, setInput] = useState({
        title: '',
        writerId: '',
        pwd: '',
        email: '',
        isPrivate: '',
        isAlert: '',
        content: '',
        createAt: ''
      });



    const getBoardIdx = async () => {

        try {
            const response = await axios.get(`http://localhost:8081/getBoardIdx?idx=${boardIdx}`);
            setInput({
                ...input,
                title: response.data.title,
                writerId: response.data.writerId,
                pwd: response.data.pwd,
                email: response.data.email,
                isPrivate: response.data.isPrivate,
                isAlert: response.data.isAlert,
                content: response.data.content,
                createAt: response.data.createAt
              });

        } catch (e) {
            console.log(e);
        }

       

    };

    const handleAlertChange = () => {
        if(input.isAlert === 1){
            setInput({...input, isAlert : 0})
        }else{
            setInput({...input, isAlert : 1})
        }   
        
    };

    const handlePrivateChange = () => {
        if(input.isPrivate === 1){
            setInput({...input, isPrivate : 0});
        }else{
            setInput({...input, isPrivate : 1});
        }   
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
                          <dd><input type="text" className="comm_inp_text" style={{ width: "100%" }} value={input.title} readOnly/></dd>
                      </dl>
                      <div className="write_info">
                          <dl className="info">
                              <dt>작성자</dt>
                              <dd><input type="text" className="comm_inp_text" style={{ width: "80px" }} value={input.writerId} readOnly/></dd>
                              <dt>비밀번호</dt>
                              <dd><input type="password" className="comm_inp_text" style={{ width: "100px" }} value={input.pwd} readOnly/></dd>
                              <dt>이메일</dt>
                              <dd><input type="text" className="comm_inp_text" style={{ width: "150px" }} value={input.email} readOnly/></dd>
                          </dl>

                          <dl className="side">
                          {
                                    input.isPrivate === 0 &&
                                    <>
                                        <dt>공지사항</dt>
                                        <dd><label className="comm_swich"><input type="checkbox" name='isAlert' value={input.isAlert} checked={input.isAlert === 1} onChange={handleAlertChange} /><span className="ico_txt"></span></label></dd>
                                    </>
                                }
                                {
                                    input.isPrivate === 1&&
                                    <>
                                        <dt>공지사항</dt>
                                        <dd><label className="comm_swich"><input type="checkbox" name='isAlert' value={input.isAlert} checked={input.isAlert === 1} onChange={handleAlertChange} disabled/><span className="ico_txt"></span></label></dd>
                                    </>
                                }
                                
                                <dt>비밀글</dt>
                                <dd><label className="comm_swich"><input type="checkbox" name='isPrivate' value={input.isPrivate} checked={input.isPrivate ===1} onChange={handlePrivateChange}/><span className="ico_txt"></span></label></dd>
                          </dl>
                      </div>
                      <div className="write_cont">
                      <ReactQuill
                            style={{ height: "350px" }}
                            theme="snow"
                            modules={modules}
                            formats={formats}
                            value={input.content || ""}
                            sanitize={false}
                            onChange={(content, delta, source, editor) => setInput({ ...input, content: editor.getHTML()})}
                        />
                      </div>
                      <div className="write_file">
                          <strong className="tit_file"><span className="ico_img flie">첨부파일</span> 첨부파일</strong>
                          <div className="cont_file">
                              <input type="file" className="comm_inp_file" style={{ width: "100%" }} />
                              <ul className="list_file_inline mt_5">
                                  <li>file_20240425.zip <button className="btn_ico_del">삭제</button></li>
                              </ul>
                          </div>
                      </div>
                  </div>

                  <div className="comm_paging_btn">
                      <div className="flo_side left">
                          <button className="comm_btn_round fill">목록</button>
                      </div>
                      <div className="flo_side right">
                          <button className="comm_btn_round">취소</button>
                          <button className="comm_btn_round fill">수정</button>
                      </div>
                  </div>

              </div>
          </div></>
      
  );
}

export default BoardEdit;
