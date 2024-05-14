import '../css/common.css'
import { Link, useParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import * as DOMPurify from "dompurify";
import parse from 'html-react-parser';
import axios from 'axios';

function BoardView() {

    const { boardIdx } = useParams();
    const [boardViewData, setBoardViewData] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const parse = require('html-react-parser').default;

    useEffect(() => {
        console.log(boardViewData);
    }, [boardViewData]);

    useEffect(() => {
        getBoardIdx();
        console.log(passWord);
    }, []);

    const [createAt, setCreateAt] = useState('');
    const [passWord, setPassWord] = useState('');

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }


    const getBoardIdx = async () => {

        try {
            const response = await axios.get(`http://localhost:8081/getBoardIdx?idx=${boardIdx}`);
            setBoardViewData(response.data);
            setCreateAt(boardViewData.createAt);
            console.log(boardViewData.pwd);

        } catch (e) {
            console.log(e);
        }

    };

    const passWordTest = async () => {
        console.log(passWord);
        console.log(boardViewData.pwd);

        if(passWord === boardViewData.pwd){
            alert("성공");
            return navigate(`/boardView/${boardIdx}/boardEdit`);
        }else{
            alert("비밀번호가 일치하지 않습니다.");
            setPassWord('');
        }
       

    };

    // const dateformat = async () => {
    //     date = createAt.slice(0,10);
    //     setCreateAt(date);
    // };




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
                    <div className="wrap_view">
                        <dl className="view_tit">
                            <dt>제목</dt>
                            <dd><h3 className="tit">{boardViewData.title}</h3> </dd>
                        </dl>
                        <dl className="view_info">
                            <dt>작성자</dt>
                            <dd>{boardViewData.writerId}</dd>
                            <dt>이메일</dt>
                            <dd><a href="javascript:;">{boardViewData.email}</a></dd>
                            <dt>작성일</dt>
                            <dd>{boardViewData.createAt}</dd>
                            <dt>조회수</dt>
                            <dd>30</dd>
                        </dl>
                        <div className="view_cont">
                            {typeof boardViewData.content === 'string' ? parse(boardViewData.content) : null}
                        </div>

                        <div className="view_file">
                            <strong className="tit_file"><span className="ico_img flie">첨부파일</span> 첨부파일</strong>
                            <ul className="list_file">
                                <li><a href="javascript:;">file_20240425.zip</a></li>

                            </ul>
                        </div>
                    </div>

                    <div className="wrap_reply">
                        <div className="reply_tit">
                            <strong className="tit">댓글(2)</strong>
                        </div>
                        <div className="reply_cont">
                            <ul className="list_reply">
                                <li>
                                    <div className="info">
                                        <strong>사용자</strong> <span className="fc_g ml_5">2024-04-19 16:42 </span>
                                        <span className="ml_10">
                                            <button className="comm_btn_small">삭제</button>
                                            <button className="comm_btn_small">수정</button>
                                        </span>
                                    </div>
                                    <div className="cont">
                                        사용자는 사용연한 이전에 전자기기 사용에 문제가 있을 경우 수리 요청 기안 작성(문제 사유를 상세히 작성)
                                    </div>
                                </li>
                                <li>
                                    <div className="info">
                                        <strong>사용자</strong> <span className="fc_g ml_5">2024-04-19 16:42 </span>
                                        <span className="ml_10">
                                            <button className="comm_btn_small">삭제</button>
                                            <button className="comm_btn_small">수정</button>
                                        </span>
                                    </div>
                                    <div className="cont">
                                        사용자는 사용연한 이전에 전자기기 사용에 문제가 있을 경우 수리 요청 기안 작성(문제 사유를 상세히 작성)
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <form>
                            <fieldset className="blind">댓글작성</fieldset>
                            <div className="reply_write">
                                <div className="wr_cont">
                                    <textarea className="comm_textarea"></textarea>
                                </div>
                                <div className="wr_btn">
                                    비밀번호 <input type="text" className="comm_inp_text" />
                                    <button className="comm_btn_round fill">등록</button>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className="comm_paging_btn">
                        <div className="flo_side left">
                            <button className="comm_btn_round fill"><Link to='/'>목록</Link></button>
                            <button className="comm_btn_round">삭제</button>
                        </div>
                        <div className="flo_side right">
                            <button className="comm_btn_round fill">답글</button>
                            <button className="comm_btn_round fill" onClick={openModal}>수정</button>
                        </div>
                    </div>

                </div>
            </div>

            {
                isOpen &&

                <div className="comm_popup" style={{ left: '30%' }}>
                    <div className="wrap_tit">
                        <span className="tit_pop">비밀번호 확인</span>
                        <button type="button" className="btn_close" onClick={closeModal}>닫기</button>
                    </div>
                    <div className="wrap_cont">
                        비밀번호 <input type="text" className="comm_inp_text" style={{ width: '100px' }} onChange={(e) => setPassWord(e.target.value)} value={passWord}/>
                    </div>
                    <div className="wrap_bottom">
                        <button className="comm_btn_round" onClick={closeModal}>닫기</button>
                        <button className="comm_btn_round fill" onClick={passWordTest}>확인</button>
                    </div>
                </div>

            }

            {/*
            <div className="comm_popup">
                <div className="wrap_tit">
                    <span className="tit_pop">댓글삭제</span>
                    <button type="button" className="btn_close" onClick={() => { }}>닫기</button>
                </div>
                <div className="wrap_cont">
                    비밀번호 <input type="text" className="comm_inp_text" style={{ width: '100px' }} />
                </div>
                <div className="wrap_bottom">
                    <button className="comm_btn_round">닫기</button>
                    <button className="comm_btn_round fill">확인</button>
                </div>
            </div>
           
            <form>
                <fieldset className="blind">댓글 수정</fieldset>
                <div className="comm_popup" style={{ width: '400px', left: '73%' }}>
                    <div className="wrap_tit">
                        <span className="tit_pop">댓글 수정</span>
                        <button type="button" className="btn_close" onClick={() => { }}>닫기</button>
                    </div>
                    <div className="wrap_cont">
                        <table className="tbl_pop">
                            <tr>
                                <th>비밀번호</th>
                                <td><input type="text" className="comm_inp_text" style={{ width: '100%' }} /></td>
                            </tr>
                            <tr>
                                <th>내용</th>
                                <td>
                                    <textarea className="comm_textarea" style={{ width: '100%', height: '90px' }}>사용자는 사용연한 이전에 전자기기 사용에 문제가 있을 경우 수리 요청 기안 작성(문제 사유를 상세히 작성) </textarea>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className="wrap_bottom">
                        <button className="comm_btn_round">닫기</button>
                        <button className="comm_btn_round fill">보내기</button>
                    </div>
                </div>
            </form> */}

        </>

    );
}

export default BoardView;
