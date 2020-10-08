import React, {useState, useEffect}  from 'react'
import '../BoardDetail/BoardDetail.css';

// 리액트 퀼
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";


// BOARD_DETAILPAGE
function BoardDetail(props) {

    const [ contentVal , setContentVal ] =  useState ( ' ' );

    const onSubmitBoard = () => {
        let body = {

        }
        var data = 
        console.log('quill ')
        console.log('Board Submit Btn', body);
    }

    useEffect(() => {
        // console.log(props.location.state.writeYN);
    })

    const setContentValHandler = e => {
        // console.log('setContentValHandler');
        // console.log(e);
        setContentVal(e);
    }

    function quillDiv(writeYN){
        if (writeYN == 'N') {
            return <div>
            <ReactQuill
                className="react-quill quill_readOnly"
                readOnly
                value="테스트"
            />
            </div>
        } else if((writeYN == 'Y')){
            return <div>
            <ReactQuill
                className="react-quill"
                value="에디터모드"
                onChange = {setContentValHandler}
            />
            </div>
        } else {
            alert('오류얌');
        }
    }

    

    return (
        <section className="app main-container border">
            
            <article className="BoardDetail-artcle ">
                {/* 번호, 제목, 작성자, 작성날짜, 조회 수, 추천 수  */}
                <div className="board-container ">
                    <div className="board-sideBar ">
                        <ul className="board-sideBar-ul ">
                            <li>목록으로가기</li>
                            <li>즐겨찾기</li>
                            <li>맨위로</li>
                            <li>이전화 보기</li>
                            <li>다음화 보기</li>
                        </ul>
                    </div>

                    <div className="board-content ">
                        <div className="board-info ">
                            <ul className="board-info-ul">
                                <li>글 번호</li>
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
                            <ul className="board-info-ul">
                                <li>제목</li>
                                <li></li>
                                <li>작성자</li>
                                <li></li>
                            </ul>
                        </div>
                        <div className="board-text">
                            {quillDiv(props.location.state.writeYN)}
                        </div>
                        <div>
                            <button type="button" onClick={ onSubmitBoard }> 저장하기</button>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default BoardDetail
