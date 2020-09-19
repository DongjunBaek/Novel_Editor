import React from 'react'
import '../BoardDetail/BoardDetail.css';
// BOARD_DETAILPAGE
function BoardDetail() {
    return (
        <section className="app main-container border">
            
            <article className="BoardDetail-artcle test">
                {/* 번호, 제목, 작성자, 작성날짜, 조회 수, 추천 수  */}
                <div className="board-container test">
                    <div className="board-sideBar test">
                        <ul className="board-sideBar-ul test">
                            <li>목록으로가기</li>
                            <li>즐겨찾기</li>
                            <li>맨위로</li>
                            <li>이전화 보기</li>
                            <li>다음화 보기</li>
                        </ul>
                    </div>

                    <div className="board-content ">
                        <div className="board-info ">
                            <ul class="board-info-ul ">
                                <li>글 번호</li>
                                <li></li>                                
                                <li>작성자</li>
                                <li></li>                                
                                <li>작성 날짜</li>
                                <li></li>                                
                                <li>조회 수</li>
                                <li></li>                                
                                <li>추천 수</li>
                                <li></li>                                
                            </ul>
                        </div>
                        <div className="board-title ">
                            <p>글 제목</p>
                        </div>
                        <div className="board-text ">
                            <p>글 내용</p>
                        </div>

                    </div>
                </div>
            </article>
        </section>
    )
}

export default BoardDetail
