import React from 'react';
import '../LandingPage/LandingPage.css';

function LandingPage() {
    return (
            <div className="app landing-container">
                {/* <img src="/background/books.jpg" id="landingPage-bg" />
                <img src=''></img> */}
                <article className="landing-left">                    
                    <h1>N</h1>
                </article>
                <article className="landing-right">
                    <h2>ovel Editor</h2>
                </article>
                <article className="landing-side"> 
                    <span> 1 . 소설을 위한 특별한 에디터</span>
                    <span> 2 . 다른 곳에서는 제공하지 않는 특별한 기능</span>
                    <span> 3 . 내 캐릭터 대사에 일러스트 넣기</span>
                    <span> 4 . 나만의 캐릭터 시트지 만들기</span>
                    <span> 5 . 누구나 한번에 간단 사용법</span>
                </article>
            </div>
    )
}

export default LandingPage
