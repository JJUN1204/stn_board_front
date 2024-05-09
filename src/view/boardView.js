import '../css/common.css'  
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function BoardView() {
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
                            <dd><h3 className="tit">자유게시판 제목입니다. 제목이 길어서 한 줄 이상이 되면 줄 바꿈 처리해서 전부 볼 수 있게 해주세요 테스트 테스트 테스트</h3> </dd>
                        </dl>
                        <dl className="view_info">
                            <dt>작성자</dt>
                            <dd>홍길동</dd>
                            <dt>이메일</dt>
                            <dd><a href="javascript:;">SSTTN@stninfothec.com</a></dd>
                            <dt>작성일</dt>
                            <dd>2024-04-19</dd>
                            <dt>조회수</dt>
                            <dd>30</dd>
                        </dl>
                        <div className="view_cont">
                            당사는 지속 가능한 ESG 경영 실천과 비용 효율성을 위하여 기존의 업무용 전자기기 교체 규정… (본문내용 중략..)
                        </div>
                        <div className="view_file">
                            <strong className="tit_file"><span className="ico_img flie">첨부파일</span> 첨부파일</strong>
                            <ul className="list_file">
                                <li><a href="javascript:;">file_20240425.zip</a></li>
                                <li><a href="javascript:;">file_파일명이 길 경우_파일명이 길 경우_파일명이 길 경우_20240425.png</a></li>
                                <li><a href="javascript:;">file_20240425.pdf</a></li>
                                <li><a href="javascript:;">file_파일명이 길 경우_20240425.jpg</a></li>
                                <li><a href="javascript:;">file_20240425.zip</a></li>
                                <li><a href="javascript:;">file_20240425.png</a></li>
                                <li><a href="javascript:;">file_20240426.zip</a></li>
                                <li><a href="javascript:;">file_20240426.png</a></li>
                                <li><a href="javascript:;">file_파일명이 길 경우_파일명이 길 경우_파일명이 길 경우_20240425.png</a></li>
                                <li><a href="javascript:;">file_파일명이 길 경우_파일명이 길 경우_파일명이 길 경우_20240425.png</a></li>
                                <li><a href="javascript:;">file_20240425.zip</a></li>
                                <li><a href="javascript:;">file_20240425.png</a></li>
                                <li><a href="javascript:;">file_20240426.zip</a></li>
                                <li><a href="javascript:;">file_20240426.png</a></li>
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
                            <button className="comm_btn_round fill">수정</button>
                        </div>
                    </div>

                </div>
            </div>

            
            {/* <div className="comm_popup" style={{ left: '30%' }}>
                <div className="wrap_tit">
                    <span className="tit_pop">비밀번호 확인</span>
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
