import React from 'react';
import '../LandingPage/LandingPage.css';

function LandingPage() {
    return (
        <div className="app main-container">
            <img id="main-container-back-img" src={require('../LandingPage/img/back_01.jpg')} />
            <section className="landing-cotainer">
                <article className="landing-content-left">
                    <img src={require('../LandingPage/img/back_03.jpg')} />
                    <div className="content-left-div">
                        <span className="left-div-span-title"> Story Planet</span>
                        <span className="left-div-span-sub"> UI/UX IN Planet</span>
                        <span className="left-div-span-sub"> Illustrations Support</span>
                        <span className="left-div-span-sub"> Character Sheet</span>
                        <span className="left-div-span-sub"> Accessibility</span>
                    </div>
                </article>
                <article className="landing-content-right">
                    <div className="content-right-container">
                        <div className="content-right-div-h">
                            <span className="right-div-h-title">내가 원하는 기능을 직접 만들어 보자</span>
                            <p className="div-h-p"> 현재 나와있는 텍스트 에디터는 기본적인 게시글에 해당하는 텍스트 에디터이다.
                            그래서 소설을 작성하는 것을 도와주는 에디터를 찾고싶었지만 찾을 수 없었고, 
                            실제로 직접 만들어서 사용하면 어떨까 라는 생각에서 출발하여 만들기로 했다.</p>                        
                        </div>
                        <div className="content-right-div-b">
                            <span className="right-div-b-title"> React & node.js & mongoDB </span>
                            <p className="div-h-p"> 새로운 환경에서 제작해보는 프로젝트 </p>
                        </div>
                        <div className="content-right-div-f">
                            <span className="right-div-f-title"> 추천 소설</span>
                            <div className="novel-card-container">
                                <div className="novel-card">
                                    <img className="novel-card-img" src={require('../LandingPage/img/back_05.jpg')}/>
                                    <div className="novel-card-info">
                                        {/* <span>제목 내용 추천 수</span> */}
                                        <span> 오늘은 그레이 블루</span>
                                        <span>상상속에서 색깔이 현실에 입혀진다. 내마음의 색은?</span>
                                        <span>★★★☆☆</span>                                    
                                    </div>
                                </div>
                                <div className="novel-card">
                                    <img className="novel-card-img" src={require('../LandingPage/img/back_06.jpg')}/>
                                    <div className="novel-card-info">
                                        {/* <span>제목 내용 추천 수</span> */}
                                        <span> 오늘은 그레이 블루</span>
                                        <span>상상속에서 색깔이 현실에 입혀진다. 내마음의 색은?</span>
                                        <span>★★★☆☆</span>                                    
                                    </div>
                                </div>
                                <div className="novel-card">
                                    <img className="novel-card-img" src={require('../LandingPage/img/back_07.jpg')}/>
                                    <div className="novel-card-info">
                                        {/* <span>제목 내용 추천 수</span> */}
                                        <span> 오늘은 그레이 블루</span>
                                        <span>상상속에서 색깔이 현실에 입혀진다. 내마음의 색은?</span>
                                        <span>★★★☆☆</span>                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>

                {/* <article className="landing-side"> 

                </article> */}
            </section>
        </div>
    )
}

export default LandingPage
