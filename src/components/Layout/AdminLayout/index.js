import React from "react";
import Header from '../../Header/Header';
import AdminCategory from '../../Category/AdminCategory';
import Footer from '../../Footer/Footer';
import { Link, Outlet } from 'react-router-dom';

class ProductLayout extends React.Component {
  constructor(){
    super();
  }
  render(){
    return (
      <div>
        <Header />
        <AdminCategory />
        <Outlet />
        <Footer /> 
      </div>
    )
  }
}

export default ProductLayout;