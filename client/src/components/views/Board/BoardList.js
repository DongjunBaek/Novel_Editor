import React, {useState, useEffect} from 'react'
// import '../Board/BoardList.css'
import { Link } from "react-router-dom";
import axios from 'axios';


function BoardList(props) {
    
    const onEditorMode = () => {
        props.history.push('/boardDetail',{ writeYN: 'Y'});
    }
    
    const onReaderMode = (no) => {
        console.log('eeeeeeeeeeee',no);
        props.history.push('/boardDetail',{ writeYN: 'N', boardno : no});
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
                console.log('response.data.boardList',response.data.boardList);
                setBoardList(response.data.boardList);
            }else {
                alert('게시판 리스트를 가져오는 것에 실패했습니다.')
            }
        })
    }

    const getDate = (str) => {
        return str.substring(0,10);
    }
    const renderBoardList = BoardList.map((board, index)=>{
        // console.log(index+"=========="+board);
        // console.log(board.no);
        return <tr key={index} onClick = { () => onReaderMode(board.no) } no={board.no} className="boardRow">
                    <td>{index}</td>
                    <td>{board.title}</td>
                    <td>{board.author}</td>
                    <td>{getDate(board.date)}</td>
                    <td>{board.readCount}</td>
                    <td>{board.like}</td>
                </tr>
        
    })



    return (
            <article className="content-container">
                <div id="boardList-top">
                    <h1>자유 게시판</h1>
                </div>
                <div id="boardList-md">
                    <table id="searchBox">
                        <thead>
                            <tr>
                                <td>
                                    <label htmlFor="search">
                                        <select name="search" id="search">
                                            <option>제목</option>
                                            <option>작성자</option>
                                        </select>
                                    </label>
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
                        </thead>
                        <tbody>

                            <tr className="blueTr">
                                <th>번호</th>
                                <th>제목</th>
                                <th>작성자</th>
                                <th>작성날짜</th>
                                <th>조회 수</th>
                                <th>추천 수</th>
                            </tr>
                            {renderBoardList}
                        </tbody>
                        <tfoot>
                            <div id="boardList-bot-container">
                                <button id="pre">이전</button>
                                <button>1</button>
                                <button>2</button>
                                <button>3</button>
                                <button>4</button>
                                <button>5</button>
                                <button id="next">다음</button>
                            </div>
                        </tfoot>
                    </table>
                </div>
            </article>
    )
}

export default BoardList
