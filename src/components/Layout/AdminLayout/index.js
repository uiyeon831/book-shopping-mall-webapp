import React from "react";
import Header from '../../Header/Header';
import AdminCategory from '../../Category/AdminCategory';
import Footer from '../../Footer/Footer';
import { Link, Outlet } from 'react-router-dom';
import { DivMain, CenterDiv } from '../LayoutStyle';


class ProductLayout extends React.Component {
  constructor(){
    super();
  }
  render(){
    return (
      <DivMain>
        <Header />
        <CenterDiv>
          <AdminCategory />
          <Outlet />
        </CenterDiv>
        <Footer /> 
      </DivMain>
    )
  }
}

export default ProductLayout;