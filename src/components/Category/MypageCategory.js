//카테고리 사이드바

import React from "react";
import {Menu, MenuLi, MenuTitle} from './style';

class MypageCategory extends React.Component{
  constructor(){
    super();
  }
  render() {
    return (
      <Menu>
        <MenuTitle>My page</MenuTitle>
        <MenuLi>사용자 정보 조회</MenuLi>
        <MenuLi>사용자 정보 수정</MenuLi>
        <MenuLi>장바구니</MenuLi>
        <MenuLi>주문조회</MenuLi>
      </Menu>
    )
  }
}

export default MypageCategory;