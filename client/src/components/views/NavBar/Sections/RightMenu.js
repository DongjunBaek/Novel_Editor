/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import axios from 'axios';
import { USER_SERVER } from '../../../Config';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";
import '../Sections/Navbar.css' 

function RightMenu(props) {
  const user = useSelector(state => state.user)

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then(response => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert('Log Out Failed')
      }
    });
  };
    return (
      <div className="nav">
          <ul className="nav-ul">
              <li><a href = "/BoardList">BoardList</a></li>
              <li><a href = "/NovelList">NovelList</a></li>
              <li><a href = "/signup">sign up</a></li>
          </ul>
      </div>
    )
}

export default withRouter(RightMenu);

