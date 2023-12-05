//메인 페이지

import React from "react";
import {Container} from '../components/Style/style';
import {MainContainer, MainTitle, MainBookContainer, ArrowIcon, MainBookBox, Book} from './style';
import LeftArrowIcon from '../assets/image/left_arrow_icon.png';
import RightArrowIcon from '../assets/image/right_arrow_icon.png';

class MainPage extends React.Component {
  constructor(){
    super();
  }
  render(){
    return (
      <Container>
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
        <MainContainer>
          <MainTitle>신간</MainTitle>
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
        <MainContainer>
          <MainTitle>추천 도서</MainTitle>
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
    </Container>
    );
  }
}

export default MainPage;