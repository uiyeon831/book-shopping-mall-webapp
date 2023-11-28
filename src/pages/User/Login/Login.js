//로그인 페이지

import React from "react";
import {Logo, ATag} from '../../../components/Style/style';
import {LoginContainer, LoginForm, WhetherMember, MemberLogin,  LoginInputContainer, InputDiv, LoginInput, ShowMessage, LoginBtn, JoinPTag} from './style';

class Login extends React.Component {
  constructor(){
    super();
  }
  render(){
    return (
      <LoginContainer>
        <Logo>Logo</Logo>
        <LoginForm>
          <WhetherMember>
            <MemberLogin>회원 로그인</MemberLogin>
            <MemberLogin>비회원 주문 조회</MemberLogin>
          </WhetherMember>
          <ShowMessage></ShowMessage>
          <LoginInputContainer>
            <InputDiv>
              <LoginInput type="text" placeholder="이메일" />
              <ShowMessage></ShowMessage>
            </InputDiv>
            <InputDiv>
              <LoginInput type="password" placeholder="비밀번호" />
              <ShowMessage></ShowMessage>
            </InputDiv>
          </LoginInputContainer>
          <LoginBtn>로그인</LoginBtn>
          <ATag href="/join"><JoinPTag>회원가입</JoinPTag></ATag>
        </LoginForm>
      </LoginContainer>
    );
  }
}

export default Login;