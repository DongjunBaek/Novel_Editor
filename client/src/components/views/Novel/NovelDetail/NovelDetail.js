import React from 'react';
import '../NovelDetail/NovelDetail.css';
import NovelMenu from '../NovelDetail/Sections/NovelMenu';

function NovelDetail() {
    return (
        <section className="NovelDetail-container">
            <NovelMenu />
            <article className="Novel-article test">
                <div className="Novel-info">
                    <table className="Novel-info-ul" >
                        <tr>
                            <td>제목</td>
                            <td>title</td>
                            <td>작성자</td>
                            <td>writer</td>
                            <td>별점</td>
                            <td>0.0</td>
                            <td>추천</td>
                            <td>1</td>
                            <td>조회수</td>
                            <td>1</td>
                        </tr>
                    </table>
                </div>

                <div className="Novel-content">
                    <p>소설 내용</p>
                </div>

            </article>
        </section>
    )
}

export default NovelDetail
