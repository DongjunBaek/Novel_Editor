import React, { Suspense } from 'react';
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
import NovelDetail from "./views/Novel/NovelDetail/NovelDetail";
//null   Anyone Can go inside
//true   only logged in user can go inside
//false  logged in user can't go inside

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '69px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/boardList" component = {Auth(BoardList, false)} />
          <Route exact path="/boardDetail" component={Auth(boardDetail, false)}  />
          <Route exact path="/NovelList" component = {Auth(NovelList, false)} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
