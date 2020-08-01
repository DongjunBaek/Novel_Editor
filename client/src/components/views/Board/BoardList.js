import React from 'react'
import '../Board/BoardList.css'
import { Link } from "react-router-dom";
import BoardDetail from '../Board/BoardDetail/BoardDetail';

function BoardList(props) {

    const boardNo = 1;



    return (
        <section className="boardList-section border">
            <article>
                <div className="boardList-container">
                    <table className="BoardTable">
                        <thead className="">                            
                            <tr className="" >
                                <th>번호</th>
                                <th>제목</th>
                                <th>작성자</th>
                                <th>작성날짜</th>
                                <th>조회 수</th>
                                <th>추천 수</th>
                            </tr>
                        </thead>
                        <tbody>
                            <Link to="/boardDetail">
                                <tr >
                                    <td>1</td>
                                    <td>Title</td>
                                    <td>writer</td>
                                    <td>20-07-31</td>
                                    <td>0</td>
                                    <td>0</td>
                                </tr>
                            </Link>
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
            </article>
        </section>
    )
}

export default BoardList
