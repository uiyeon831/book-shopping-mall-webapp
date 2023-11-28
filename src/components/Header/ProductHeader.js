//header

import React from "react";
import {HeaderStyle, Logo, HeaderLogoDiv, HeaderInput, PageRoute, HeaderP} from './style';

class ProductHeader extends React.Component {
  constructor(){
    super();
  }
  render() {
    return (
      <HeaderStyle>
        <HeaderLogoDiv><Logo>Logo</Logo></HeaderLogoDiv>
        <form><HeaderInput type="text" /></form>
        <PageRoute>
          <HeaderP>회원가입</HeaderP>
          <HeaderP>로그인</HeaderP>
          <HeaderP>장바구니</HeaderP>
        </PageRoute>
      </HeaderStyle>
    )
  }
}

export default ProductHeader;