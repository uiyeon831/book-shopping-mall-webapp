//카테고리 사이드바

import React from "react";

class MypageCategory extends React.Component{
  constructor(){
    super();
  }
  render() {
    return (
      <ul>
        <li>사용자 정보 조회</li>
        <li>사용자 정보 수정</li>
        <li>장바구니</li>
        <li>주문조회</li>
      </ul>
    )
  }
}

export default MypageCategory;