import React from 'react'
import { Link } from "react-router-dom";
import '../Novel/NovelList.css';

function NovelList() {
    return (
        <section className="novelList-section border">
            <article className="novelList-article">
                <div className="novelList-container">
                    <table className="NovelTable">
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
                            <tr >
                                
                                    <td>1</td>
                                    <td><Link to="/novelDetail">Title</Link></td>
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
            </article>
        </section>
    )
}

export default NovelList
