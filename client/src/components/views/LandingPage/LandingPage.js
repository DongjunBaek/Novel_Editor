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
                            <span className="right-div-b-title"> 인프런 강의를 통하여 React와 node.js 그리고 mongoDB를 활용한 웹프로젝트의 특성을 가지며</span>
                            <p className="div-h-p"> 공부한 것들을 실제로 결과물로 만들어 보기위한 목적도 있다.</p>
                        </div>
                        <div className="content-right-div-f">
                            <span className="right-div-f-title"> 추천 소설</span>
                            <div className="novel-card">
                                <img className="novel-card-img" src={require('../LandingPage/img/back_01.jpg')}/>
                                <div>
                                    <span>제목 내용 추천 수</span>
                                </div>
                            </div>
                            <div className="novel-card">
                                <img />
                                <div>
                                    <span>제목 내용 추천 수</span>
                                </div>
                            </div>
                            <div className="novel-card">
                                <img />
                                <div>
                                    <span>제목 내용 추천 수</span>
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
