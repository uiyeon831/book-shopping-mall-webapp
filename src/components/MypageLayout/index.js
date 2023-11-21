import React from "react";
import Header from '../Header/Header';
import MypageCategory from '../MypageCategory/MypageCategory';
import Footer from '../Footer/Footer';
import { Link, Outlet } from 'react-router-dom';

class MainPageLayout extends React.Component {
  constructor(){
    super();
  }
  render(){
    return (
      <div>
        <Header />
        <MypageCategory />
        <Outlet />
        <Footer /> 
      </div>
    )
  }
}

export default MainPageLayout;