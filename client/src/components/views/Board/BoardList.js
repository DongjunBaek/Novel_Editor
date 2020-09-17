import React from 'react'
import '../Board/BoardList.css'
import { Link } from "react-router-dom";

function BoardList(props) {

    const boardNo = 1;

    const searchBoard = () =>{
        console.log('Search Board');

    };

    return (
        <section className="app main-container border">
            <article className="boardList-article-container">
                <div className="boardList-top">
                    <div id="board-list-title">
                        <h1>BoardList</h1>
                    </div>
                </div>
                <div className="boardList-container">
                    <table className="BoardTable">
                        <thead>
                            <tr>
                                <td>
                                    <label htmlFor="search"></label>
                                    <select name="search" id="search">
                                        <option>제목</option>
                                        <option>작성자</option>
                                    </select>
                                </td>
                                <td>
                                    <input type="text" id="searchBox" placeholder="검색어를 입력해 주세요." />
                                </td>
                                <td>
                                    <button onClick={searchBoard}>Search</button>
                                </td>
                            </tr>
                            {/* <tr>
                                <td></td>
                            </tr> */}
                        </thead>
                        <tbody>
                            {/* 
                                1 5 1 1 1 1
                            */}
                            <tr>
                                <th>번호</th>
                                <th>제목</th>
                                <th>작성자</th>
                                <th>작성날짜</th>
                                <th>조회 수</th>
                                <th>추천 수</th>
                            </tr>
                            <tr >
                                <td>1</td>
                                <td><Link to="/boardDetail">Title</Link></td>
                                <td>writer</td>
                                <td>20-07-31</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>

                            <tr>
                                <td>1</td>
                                <td>Title</td>
                                <td>writer</td>
                                <td>20-07-31</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Title</td>
                                <td>writer</td>
                                <td>20-07-31</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Title</td>
                                <td>writer</td>
                                <td>20-07-31</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Title</td>
                                <td>writer</td>
                                <td>20-07-31</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Title</td>
                                <td>writer</td>
                                <td>20-07-31</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Title</td>
                                <td>writer</td>
                                <td>20-07-31</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Title</td>
                                <td>writer</td>
                                <td>20-07-31</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Title</td>
                                <td>writer</td>
                                <td>20-07-31</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>Title</td>
                                <td>writer</td>
                                <td>20-07-31</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                        </tbody>
                        <tfoot>

                        </tfoot>
                    </table>
                </div>
                <div className="boardList-bot">
                    <div>
                        <button>이전</button>
                    </div>
                    <div>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>4</button>
                        <button>5</button>
                    </div>
                    <div>
                        <button>다음</button>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default BoardList
