//header

import React from "react";
import './ProducHeader.css';

class ProductHeader extends React.Component {
  constructor(){
    super();
  }
  render() {
    return (
      <div className="header">
        <p className="logo">Logo</p>
        <form><input type="text" /></form>
        <div className="pageRoute">
          <p>회원가입</p>
          <p>로그인</p>
          <p>장바구니</p>
        </div>
      </div>
    )
  }
}

export default ProductHeader;