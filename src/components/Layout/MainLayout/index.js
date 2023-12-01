import React from "react";
import ProductHeader from '../../Header/ProductHeader';
import MainCategory from './../../Category/MainPageCategory/MainPageCategory';
import Footer from '../../Footer/Footer';
import { Link, Outlet } from 'react-router-dom';


class MainLayout extends React.Component {
  constructor(){
    super();
  }
  render(){
    return (
      <div>
        <ProductHeader />
        <MainCategory />
        <Outlet />
        <Footer /> 
      </div>
    )
  }
}

export default MainLayout;