import { Link, Outlet } from 'react-router-dom';
import React from "react";
import ProductHeader from '../../Header/ProductHeader';
import ProductCategory from '../../Category/ProductCategory';
import Footer from '../../Footer/Footer';
import { DivMain, CenterDiv } from '../LayoutStyle';

class ProductLayout extends React.Component {
  constructor(){
    super();
  }
  render(){
    return (
      <DivMain>
        <ProductHeader />
        <CenterDiv>
          <ProductCategory />
          <Outlet />
        </CenterDiv>
        <Footer /> 
      </DivMain>
    )
  }
}

export default ProductLayout;