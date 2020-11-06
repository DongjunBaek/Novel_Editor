import React, { Suspense, useEffect  } from 'react';
import { Route, Switch, Link } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import BoardList from "./views/Board/BoardList";
import boardDetail from"./views/Board/BoardDetail/BoardDetail";
import NovelList from "./views/Novel/NovelList";
import novelDetail from "./views/Novel/NovelDetail/NovelDetail";
import Signup from "./views/Signup/Signup";
import Success from './views/Signup/Success';
//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside




function App() {

  useEffect(() => {

    let calHeigth = (nowHeight) => {
      let wholeHeight = 0;
      let appHeight = document.getElementById("app-container");
      
      
    }

    calHeigth();


  })

  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <section id="root-container">
        <NavBar />
        <Switch>
          <section id="root-section">
            <Route exact path="/" component={Auth(LandingPage, null)} />
            <Route exact path="/login" component={Auth(LoginPage, false)} />
            <Route exact path="/register" component={Auth(RegisterPage, false)} />
            <Route exact path="/boardList" component = {Auth(BoardList, false)} />
            <Route exact path="/boardDetail" component={Auth(boardDetail, false)}  />
            <Route exact path="/NovelList" component = {Auth(NovelList, false)} />
            <Route exact path="/novelDetail" component = {Auth(novelDetail, false)} />
            <Route exact path="/signup" component = {Auth(Signup, false)} />
            <Route exact path="/success" component={Auth(Success, false)}  />          
          </section>
        </Switch>
      </section>
      {/* <Footer /> */}
    </Suspense>
  );
}

export default App;
