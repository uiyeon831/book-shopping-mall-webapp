import { Link, Outlet } from 'react-router-dom';
import React from "react";
import Header from '../../Header/Header';
import MypageCategory from '../../Category/MypageCategory';
import Footer from '../../Footer/Footer';
import { DivMain, CenterDiv } from '../LayoutStyle';


class MainPageLayout extends React.Component {
  constructor(){
    super();
  }
  render(){
    return (
      <DivMain>
        <Header />
        <CenterDiv>
          <MypageCategory />
          <Outlet />
        </CenterDiv>
        <Footer /> 
      </DivMain>
    )
  }
}




export default MainPageLayout;