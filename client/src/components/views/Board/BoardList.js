import React from 'react'
import '../Board/BoardList.css'

function BoardList(props) {
    return (

        <div className="app">
            <h3>BoardList</h3>
            <div className="boardList-container">
                
                <table className="border test BoardTable">
                    <thead className="border flex">
                        <tr className="flex">
                            <th>번호</th>
                            <th>제목</th>                            
                            <th>작성자</th>                            
                            <th>작성날짜</th>                            
                            <th>조회 수</th>                            
                            <th>추천 수</th>                            
                        </tr>
                    </thead>
                    <tbody>
                        <td>1</td>
                        <td>Title</td>
                        <td>writer</td>
                        <td>20-07-31</td>
                        <td>0</td>
                        <td>0</td>
                    </tbody>
                    <tfoot>

                    </tfoot>
                </table>
            </div>
        </div>
    )
}

export default BoardList
