import React, {useState, useEffect}  from 'react'
import '../BoardDetail/BoardDetail.css';
import { insertBoard } from "../../../../_actions/board_actions";
import { getBoardNo } from "../../../../_actions/common_actions";
import { useDispatch } from "react-redux";

// 리액트 퀼
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";


// BOARD_DETAILPAGE
function BoardDetail(props) {

    const [ contentVal , setContentVal ] =  useState ('에디터모드');
    const [ contentTitle , setContentTitle ] =  useState ('');
    const boardNo = props.location.state.boardno;

    const dispatch = useDispatch();

    const onSubmitBoard = () => {
        let body = {            
            title : contentTitle,
            contents : contentVal,
            readCount : 0,
            like : 0,
            author : 'dongjun',
            comments : '소설임',
            reply : '비고'
        }
        console.log('제목 입력 : >> ',body.ContentTitle);
        console.log('내용 입력 : >>',body.ContentVal);

        return (
            dispatch(insertBoard(body)).then(response => {
                console.log(response.payload)
                if(response.payload.success){
                    console.log('Add board', response.payload.success)
                    props.history.push("/");
                }else {
                    alert('Failed Sign up')
                }
            })
        )

    }

    const onGetboardNo = () => {
        return (
            dispatch(getBoardNo()).then(response => {
                console.log(response.payload);

            })
        )
    }

    useEffect(() => {
        // console.log(props.location.state.writeYN);
        console.log('selected board no =====', boardNo);
    })
    

    const setContentValHandler = e => {
        setContentVal(e);
    }

    const setContentTitleHandler = e => {
        // console.log(e.currentTarget.value);
        setContentTitle(e.currentTarget.value);
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
                value={contentVal}
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
                                {props.location.state.writeYN == 'N' &&
                                    <ul className="board-info-ul">
                                        <li>No.</li>
                                        <li>1</li>                                
                                        <li>Views</li>
                                        <li>0</li>                                
                                        <li>Likes</li>
                                        <li>0</li>                
                                    </ul>
                                }
                                {props.location.state.writeYN == 'N' &&
                                    <ul className="board-info-ul">
                                        <li>Writer</li>
                                        <li>안좋아</li>                        
                                        <li>Date</li>
                                        <li>2020-10-09</li>        
                                    </ul>
                                }   
                            </div>
                        
                        <div className="board-title ">
                            <ul className="board-info-ul">
                                <li>Title</li>
                                <li style={{"flex":"3"}} >
                                    <input name="title" id="board-title-input" onChange={setContentTitleHandler} value={contentTitle} placeholder="제목을 입력해 주세요" />
                                </li>
                            </ul>
                        </div>
                        <div className="board-text">
                            {quillDiv(props.location.state.writeYN)}
                        </div>
                        <div className="board-btn-container">
                            <button type="button" className="board-saveBtn" onClick={ onSubmitBoard }> 저장하기</button>
                            <button type="button" className="board-saveBtn" onClick={ onGetboardNo }> 게시글번호가져오기</button>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default BoardDetail
