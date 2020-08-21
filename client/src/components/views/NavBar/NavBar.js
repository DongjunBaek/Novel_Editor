import React, { useState } from 'react';
import './Sections/Navbar.css';

function NavBar() {


  return (
    <div className="nav">
      <ul className="nav-ul">
        <li><a href="/BoardList">BoardList</a></li>
        <li><a href="/NovelList">NovelList</a></li>
        <li><a href="/signup">sign up</a></li>
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