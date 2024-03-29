import React, { useState } from 'react';
// import './Sections/Navbar.css';
import Btn from '../Common/btn';

function NavBar() {

  

  return (
    // <div className="nav">
    //   <ul className="nav-ul">
    //     <li><a href="/">HOME</a></li>
    //     <li><a href="/BoardList">BoardList</a></li>
    //     <li><a href="/NovelList">NovelList</a></li>
    //     <li><a href="/signup">sign up</a></li>
    //   </ul>
    // </div>
    <div className="nav">
      <div className="logo-container">
        <img src="" id="logo" />
      </div>
      <ul className="nav-ul">
        <li><Btn href="/" btnNm="HOME" /></li>
        <li><Btn href="/BoardList" btnNm="BoardList" /></li>
        <li><Btn href="/NovelList" btnNm="NovelList" /></li>
        <li><Btn href="/signup" btnNm="Sign In" /></li>
      </ul>
    </div>

    // <nav className="menu" style={{ position: 'fixed', zIndex: 5, width: '100%' }}>
    //   <div className="menu__logo">
    //     <a href="/" className="logo">GGwin</a>
    //   </div>
    //   <div className="menu__container">
    //     <div className="menu_left">
    //       <LeftMenu mode="horizontal" />
    //     </div>
    //     <div className="menu_rigth">
    //       <RightMenu mode="horizontal" />
    //     </div>
    //     <Button
    //       className="menu__mobile-button"
    //       type="primary"
    //       onClick={showDrawer}
    //     >
    //       <Icon type="align-right" />
    //     </Button>
    //     <Drawer
    //       title="Basic Drawer"
    //       placement="right"
    //       className="menu_drawer"
    //       closable={false}
    //       onClose={onClose}
    //       visible={visible}
    //     >
    //       <LeftMenu mode="inline" />
    //       <RightMenu mode="inline" />
    //     </Drawer>      
  )
}

export default NavBar