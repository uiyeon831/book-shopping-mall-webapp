//header

import React from "react";
import {HeaderStyle, HeaderLogoDiv, PageRoute, HeaderP} from './style';
import {Logo} from '../Style/style';

class Header extends React.Component {
  constructor(){
    super();
  }
  render() {
    return (
      <HeaderStyle>
      <HeaderLogoDiv><Logo>Logo</Logo></HeaderLogoDiv>
      <PageRoute>
        <HeaderP>회원가입</HeaderP>
        <HeaderP>로그인</HeaderP>
        <HeaderP>장바구니</HeaderP>
      </PageRoute>
    </HeaderStyle>
    )
  }
}

export default Header;