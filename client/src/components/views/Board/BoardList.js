import React, {useState, useEffect} from 'react'
import '../Board/BoardList.css'
import { Link } from "react-router-dom";
import axios from 'axios';


function BoardList(props) {
    
    const onEditorMode = () => {
        props.history.push('/boardDetail',{ writeYN: 'Y'});
    }
    
    const onReaderMode = () => {
        props.history.push('/boardDetail',{ writeYN: 'N'});
    }

    const [Skip, setSkip] = useState(0);
    const [Limit, setLimit] = useState(10);
    const [BoardList, setBoardList] = useState([]);

    useEffect(() => {

        let body = {
            skip : Skip,
            limit : Limit
        }
        
        getBoards(body)

    }, [])

    const getBoards= (body) => {

        axios.get('/api/board/boardList', body)
        .then(response => {
            if(response.data.success){
                // console.log(response.data);
                console.log('boardList',response.data.boardList);
                setBoardList([response.data.boardList]);
            }else {
                alert('상품 정보를 가져오는 것에 실패했습니다.')
            }
        })
    }

    const getDate = (str) => {
        return str.substring(0,10);
    }
    const renderBoardList = BoardList.map((board, index)=>{

        console.log('board', board[0]);
        
        return (
            <tr key={index} >
                <td>{index}</td>
                <td>{board[index].title}</td>
                <td>{board[index].author}</td>
                <td>{getDate(board[index].date)}</td>
                <td>{board[index].readCount}</td>
                <td>{board[index].like}</td>
            </tr>
        )
    })



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
                                    <button id="searchBtn">Search</button>
                                </td>
                                <td>
                                    <button onClick = { onEditorMode }>글쓰기</button>
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
                            <tr onClick = { onReaderMode }>
                                <td>1</td>
                                <td>제목</td>
                                <td>writer</td>
                                <td>20-07-31</td>
                                <td>0</td>
                                <td>0</td>
                            </tr>
                            {renderBoardList}
                        </tbody>
                        <tfoot>

                        </tfoot>
                    </table>
                </div>
                <div className="boardList-bot">
                    <div className="boardList-bot-container">
                        <button id="pre">이전</button>
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>4</button>
                        <button>5</button>
                        <button id="next">다음</button>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default BoardList
