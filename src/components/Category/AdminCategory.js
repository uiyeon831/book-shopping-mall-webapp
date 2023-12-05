//카테고리 사이드바

import React from "react";
import { MenuLi, MenuMyAdmin, MenuTitle } from './style';

class AdminCategory extends React.Component{
  constructor(){
    super();
  }
  render() {
    return (
      <MenuMyAdmin>
        <MenuTitle>Admin</MenuTitle>
        <MenuLi>상품조회</MenuLi>
        <MenuLi>상품등록</MenuLi>
        <MenuLi>카테고리관리</MenuLi>
        <MenuLi>회원관리</MenuLi>
        <MenuLi>주문관리</MenuLi>
      </MenuMyAdmin>
    )
  }
}

export default AdminCategory;