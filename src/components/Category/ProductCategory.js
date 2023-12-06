//카테고리 사이드바

import React from "react";
import { Menu, MenuLi, MenuLine } from './style';

class ProductCategory extends React.Component{
  constructor(){
    super();
  }
  render() {
    return (
      <Menu>
        <MenuLi>베스트셀러</MenuLi>
        <MenuLi>신간</MenuLi>
        <MenuLine /> 
        <MenuLi>소설</MenuLi>
        <MenuLi>시/에세이</MenuLi>
        <MenuLi>인문</MenuLi>
        <MenuLi>가정/육아</MenuLi>
        <MenuLi>요리</MenuLi>
      </Menu>
    )
  }
}

export default ProductCategory;