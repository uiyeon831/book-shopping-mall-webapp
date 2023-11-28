//메인 페이지

import React from "react";
import './MainPage.css';
import {MainPageBox, MainContainer, MainTitle, MainBookContainer, ArrowIcon, MainBookBox, Book} from './style';
import LeftArrowIcon from '../assets/image/left_arrow_icon.png';
import RightArrowIcon from '../assets/image/right_arrow_icon.png';

class MainPage extends React.Component {
  constructor(){
    super();
  }
  render(){
    return (
      <MainPageBox>
        <MainContainer>
          <MainTitle>베스트 셀러</MainTitle>
          <MainBookContainer>
            <ArrowIcon src={LeftArrowIcon} />
            <MainBookBox>
              <Book></Book>
              <Book></Book>
              <Book></Book>
              <Book></Book>
              <Book></Book>
            </MainBookBox>
            <ArrowIcon src={RightArrowIcon} />
          </MainBookContainer>
        </MainContainer>
    </MainPageBox>
    );
  }
}

export default MainPage;