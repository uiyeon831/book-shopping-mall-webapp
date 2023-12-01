//카테고리 사이드바

import React from "react";
import {Menu, MenuLi, MenuTitle} from './style';

class ProductCategory extends React.Component{
  constructor(){
    super();
  }
  render() {
    return (
      <Menu>
        <MenuTitle>카테고리</MenuTitle>
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