import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../css/common.css'

function BoardList() {

    useEffect(() => {
        getAllBoard();
    }, []);


    const [isOpen, setIsOpen] = useState(false);
    const [boardData, setBoardData] = useState([]);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const getAllBoard = async () => {

        try {
            const response = await axios.get('http://localhost:8081/getAllBoard');
            console.log(response.data);
            setBoardData(response.data);
        } catch (e) {
            console.log(e);
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
                        <div className="ta_r">
                            총 갯수 <strong className="fc_p">200</strong>건{" "}
                        </div>
                    </div>

                    <table className="tbl_board">
                        <colgroup>
                            <col style={{ width: "5%" }} />
                            <col />
                            <col style={{ width: "10%" }} />
                            <col style={{ width: "10%" }} />
                            <col style={{ width: "8%" }} />
                            <col style={{ width: "7%" }} />
                        </colgroup>
                        <thead>
                            <tr>
                                <th scope="col">No</th>
                                <th scope="col">제목</th>
                                <th scope="col">첨부파일</th>
                                <th scope="col">작성자</th>
                                <th scope="col">작성일</th>
                                <th scope="col">조회수</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td className="ta_l">
                                    <a className="link_title" href="javascript:;">
                                        <span className="txt_label notice">공지</span> 공지사항 입니다.{" "}
                                    </a>
                                </td>
                                <td>
                                    <a className="link_file" href="javascript:;">
                                        <span className="ico_img flie">첨부파일</span>10
                                    </a>
                                </td>
                                <td>
                                    <a className="link_writer" href="javascript:;">홍길동</a>
                                </td>
                                <td>2024-04-15</td>
                                <td>358</td>
                            </tr>
                            {boardData && boardData.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.idx}</td>
                                    <td className="ta_l">
                                        <a className="link_title" href="javascript:;">
                                            {item.title}
                                        </a>
                                        <span className="txt_reply">(2)</span>{" "}
                                        <span className="ico_new">N</span>{" "}
                                    </td>
                                    <td> </td>
                                    <td>
                                        <a className="link_writer" href="javacript:;">{item.writerId}</a>
                                    </td>
                                    <td>{item.createAt.slice(0, 10)}</td>
                                    <td>5</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="comm_paging_btn">
                        <div className="flo_side left">페이지 <strong className="fc_p">3</strong>/20</div>

                        <div className="wr_paging">
                            <button className="btn_page first" disabled="disabled">
                                첫 페이지
                            </button>
                            <button className="btn_page prev" disabled="disabled">
                                이전
                            </button>
                            <span className="wr_page">
                                <span className="page">1</span>
                                <span className="page">2</span>
                                <strong className="page on">3</strong>
                                <span className="page">4</span>
                                <span className="page">5</span>
                                <span className="page">6</span>
                                <span className="page">7</span>
                                <span className="page">8</span>
                                <span className="page">9</span>
                                <span className="page">10</span>
                            </span>
                            <button className="btn_page next">다음</button>
                            <button className="btn_page last">마지막 페이지</button>
                        </div>

                        <div className="flo_side right">
                            <button className="comm_btn_round fill"><Link to='/boardwrite'>글쓰기</Link></button>
                        </div>
                    </div>

                    <div className="box_search">
                        등록일
                        <input type="date" className="comm_inp_date ml_5" /> ~
                        <input type="date" className="comm_inp_date" />
                        <select className="comm_sel ml_10">
                            <option>제목</option>
                            <option>제목+내용</option>
                            <option>작성자</option>
                        </select>
                        <input type="text" className="comm_inp_text" style={{ width: "300px" }} />
                        <button className="comm_btn fill">검색</button>
                    </div>
                </div>
            </div>
            {/* <div className="comm_popup" style={{ left: "30%" }}>
              <div className="wrap_tit">
                  <span className="tit_pop">비밀번호 확인</span>
                  <button type="button" className="btn_close" onClick="">
                      닫기
                  </button>
              </div>
              <div className="wrap_cont">
                  비밀번호 <input type="text" className="comm_inp_text" style={{ width: "100px" }} />
              </div>
              <div className="wrap_bottom">
                  <button className="comm_btn_round">닫기</button>
                  <button className="comm_btn_round fill">확인</button>
              </div>
           </div>
            <div className="comm_popup">
              <div className="wrap_tit">
                  <span className="tit_pop">첨부파일</span>
                  <button type="button" className="btn_close" onClick="">
                      닫기
                  </button>
              </div>
              <div className="wrap_cont">
                  <ul className="list_file">
                      <li>
                          <a href="javascript:;">file_20240425.zip</a>
                      </li>
                      <li>
                          <a href="javascript:;">file_파일명이 길 경우_파일명이 길 경우_파일명이 길 경우_20240425.png</a>
                      </li>
                      <li>
                          <a href="javascript:;">file_20240425.pdf</a>
                      </li>
                      <li>
                          <a href="javascript:;">file_파일명이 길 경우_20240425.jpg</a>
                      </li>
                      <li>
                          <a href="javascript:;">file_20240425.zip</a>
                      </li>
                      <li>
                          <a href="javascript:;">file_20240425.png</a>
                      </li>
                      <li>
                          <a href="javascript:;">file_20240426.zip</a>
                      </li>
                      <li>
                          <a href="javascript:;">file_20240426.png</a>
                      </li>
                  </ul>
              </div>
              <div className="wrap_bottom">
                  <button className="comm_btn_round">닫기</button>
              </div> */}
            {/* </div><div className="comm_popup" style={{ width: "400px", left: "73%" }}>
              <form>
                  <fieldset className="blind">이메일 보내기</fieldset>
                  <div className="wrap_tit">
                      <span className="tit_pop">이메일 보내기</span>
                      <button type="button" className="btn_close" onClick="">
                          닫기
                      </button>
                  </div>
                  <div className="wrap_cont">
                      <table className="tbl_pop">
                          <tr>
                              <th>보내는 사람</th>
                              <td>
                                  <input type="text" className="comm_inp_text" style={{ width: "100%" }} />
                              </td>
                          </tr>
                          <tr>
                              <th>받는 사람</th>
                              <td>
                                  <input type="text" className="comm_inp_text" value="SSTTN@stninfothec.com" style={{ width: "100%" }} />
                              </td>
                          </tr>
                          <tr>
                              <th>제목</th>
                              <td>
                                  <input type="text" className="comm_inp_text" style={{ width: "100%" }} />
                              </td>
                          </tr>
                          <tr>
                              <th>내용</th>
                              <td>
                                  <textarea className="comm_textarea" style={{ width: "100%" }} />
                              </td>
                          </tr>
                          <tr>
                              <th>파일</th>
                              <td>
                                  <input type="file" className="comm_inp_file" style={{ width: "100%" }} />
                                  <ul className="list_file_inline mt_5">
                                      <li>
                                          file_20240425.zip <button className="btn_ico_del">삭제</button>
                                      </li>
                                      <li>
                                          file_파일명이 길 경우_파일명이 길 경우_파일명이 길 경우_20240425.png{" "}
                                          <button className="btn_ico_del">삭제</button>
                                      </li>
                                      <li>
                                          file_2.pdf <button className="btn_ico_del">삭제</button>
                                      </li>
                                      <li>
                                          file_3.jpg <button className="btn_ico_del">삭제</button>
                                      </li>
                                      <li>
                                          file_20240425.zip <button className="btn_ico_del">삭제</button>
                                      </li>
                                      <li>
                                          file_20240425.png <button className="btn_ico_del">삭제</button>
                                      </li>
                                  </ul>
                              </td>
                          </tr>
                      </table>
                  </div>
                  <div className="wrap_bottom">
                      <button className="comm_btn_round">닫기</button>
                      <button className="comm_btn_round fill">보내기</button>
                  </div>
              </form>
          </div> */}
        </>
    );
}

export default BoardList;
