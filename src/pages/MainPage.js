//메인 페이지

import React from "react";
import './MainPage.css';
import LeftArrowIcon from '../assets/image/left_arrow_icon.png';
import RightArrowIcon from '../assets/image/right_arrow_icon.png';

class MainPage extends React.Component {
  constructor(){
    super();
  }
  render(){
    return (
      <div className="mainpage">
        <div className="container">
          <div className="title">베스트 셀러</div>
          <div className="bookContainer">
            <img src={LeftArrowIcon} />
            <div className="bookBox">
              <div className="book"></div>
              <div className="book"></div>
              <div className="book"></div>
              <div className="book"></div>
              <div className="book"></div>
            </div>
            <img src={RightArrowIcon} />
          </div>
        </div>
    </div>
    );
  }
}

export default MainPage;