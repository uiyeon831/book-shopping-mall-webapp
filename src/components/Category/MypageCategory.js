//카테고리 사이드바

import React from "react";
import {MenuMyAdmin, MenuLi, MenuTitle} from './style';

class MypageCategory extends React.Component{
  constructor(){
    super();
  }
  render() {
    return (
      <MenuMyAdmin>
        <MenuTitle>My page</MenuTitle>
        <MenuLi>내정보</MenuLi>
        <MenuLi>내정보 수정</MenuLi>
        <MenuLi>장바구니</MenuLi>
        <MenuLi>주문조회</MenuLi>
      </MenuMyAdmin>
    )
  }
}

export default MypageCategory;