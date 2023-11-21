import React from "react";
import ProductHeader from '../ProductHeader/ProductHeader';
import ProductCategory from '../ProductCategory/ProductCategory';
import Footer from '../Footer/Footer';
import { Link, Outlet } from 'react-router-dom';

class ProductLayout extends React.Component {
  constructor(){
    super();
  }
  render(){
    return (
      <div>
        <ProductHeader />
        <ProductCategory />
        <Outlet />
        <Footer /> 
      </div>
    )
  }
}

export default ProductLayout;