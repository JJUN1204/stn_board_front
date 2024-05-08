import React from 'react';
import '../css/common.css'  
import { Link } from 'react-router-dom';

function BoardEdit() {
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
                          <dd><input type="text" className="comm_inp_text" style={{ width: "100%" }} value="자유게시판 제목입니다. 제목이 길어져도 어차피 인풋 텍스트는 한 줄.. 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트 테스트" /></dd>
                      </dl>
                      <div className="write_info">
                          <dl className="info">
                              <dt>작성자</dt>
                              <dd><input type="text" className="comm_inp_text" style={{ width: "80px" }} value="홍길동" /></dd>
                              <dt>비밀번호</dt>
                              <dd><input type="text" className="comm_inp_text" style={{ width: "100px" }} /></dd>
                              <dt>이메일</dt>
                              <dd><input type="text" className="comm_inp_text" style={{ width: "150px" }} value="SSTTN@stninfothec.com" /></dd>
                          </dl>

                          <dl className="side">
                              <dt>공지사항</dt>
                              <dd><label className="comm_swich"><input type="checkbox" /><span className="ico_txt"></span></label> </dd>
                              <dt>비밀글</dt>
                              <dd><label className="comm_swich"><input type="checkbox" /><span className="ico_txt"></span></label> </dd>
                          </dl>
                      </div>
                      <div className="write_cont">
                          <img src="_images/editor.png" alt="editor" />
                      </div>
                      <div className="write_file">
                          <strong className="tit_file"><span className="ico_img flie">첨부파일</span> 첨부파일</strong>
                          <div className="cont_file">
                              <input type="file" className="comm_inp_file" style={{ width: "100%" }} />
                              <ul className="list_file_inline mt_5">
                                  <li>file_20240425.zip <button className="btn_ico_del">삭제</button></li>
                                  <li>file_파일명이 길 경우_파일명이 길 경우_파일명이 길 경우_20240425.png <button className="btn_ico_del">삭제</button></li>
                                  <li>file_2.pdf <button className="btn_ico_del">삭제</button></li>
                                  <li>file_3.jpg <button className="btn_ico_del">삭제</button></li>
                                  <li>file_20240425.zip <button className="btn_ico_del">삭제</button></li>
                                  <li>file_20240425.png <button className="btn_ico_del">삭제</button></li>
                                  <li>file_파일명이 길 경우_파일명이 길 경우_파일명이 길 경우_20240425.png <button className="btn_ico_del">삭제</button></li>
                                  <li>file_2.pdf <button className="btn_ico_del">삭제</button></li>
                                  <li>file_3.jpg <button className="btn_ico_del">삭제</button></li>
                                  <li>file_파일명이 길 경우_파일명이 길 경우_파일명이 길 경우_20240425.png <button className="btn_ico_del">삭제</button></li>
                                  <li>file_2.pdf <button className="btn_ico_del">삭제</button></li>
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
