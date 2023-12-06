//회원가입 페이지

import React from "react";
import { Logo, Input, NumberInput } from '../../../components/Style/style'
import { JoinContainer, JoinForm, InputContainer, InputBox, Label, JoinShowMessage, JoinBtn, JoinInput, AddressInput, AddressBtn } from './style.js'

class Join extends React.Component {
  constructor(){
    super();
  }
  render(){
    return (
      <JoinContainer>
        <Logo>Logo</Logo>
        <JoinForm>
          <InputContainer>
            <InputBox>
              <Label htmlFor="username">이름</Label>
              <Input type="text" id="username" placeholder="홍길동" />
            </InputBox>
            <JoinShowMessage id="showUsernameMessage"></JoinShowMessage>
          </InputContainer>
          <InputContainer>
            <InputBox>
              <Label htmlFor="email">이메일</Label>
              <Input type="text" id="email" placeholder="abc@gmail.com" />
            </InputBox>
            <JoinShowMessage id="showEmailMessage"></JoinShowMessage>
          </InputContainer>
          <InputContainer>
            <InputBox>
              <Label htmlFor="password">비밀번호</Label>
              <Input type="password" id="password" placeholder="영문/숫자/특수문자 조합 (8~20 글자)" />
            </InputBox>
            <JoinShowMessage id="showPasswordMessage"></JoinShowMessage>
          </InputContainer>
          <InputContainer>
            <InputBox>
              <Label htmlFor="repassword">비밀번호 확인</Label>
              <Input type="password" id="repassword" />
            </InputBox>
            <JoinShowMessage id="showRepasswordMessage"></JoinShowMessage>
          </InputContainer>
          <InputContainer>
            <InputBox>
              <Label htmlFor="phoneNumber">전화번호</Label>
              <NumberInput type="number" id="phoneNumber" placeholder="010-1234-1234 (숫자만 입력)" />
            </InputBox>
            <JoinShowMessage id="showPhoneNumberMessage"></JoinShowMessage>
          </InputContainer>
          <InputContainer>
            <InputBox>
              <Label htmlFor="address">주소</Label>
              <AddressInput type="text" id="address" />
              <AddressBtn>주소찾기</AddressBtn>
            </InputBox>
            <JoinInput type="text" />
            <JoinInput type="text" id="adressDtail" placeholder="상세주소" />
            <JoinShowMessage id="showAddressMessage"></JoinShowMessage>
          </InputContainer>
          <JoinBtn>회원가입</JoinBtn>
        </JoinForm>
      </JoinContainer>
    );
  }
}

export default Join;