//사용자 정보 수정 페이지

import React from "react";
import { Input, NumberInput, TitleMargin, Container, ShowMessage } from '../../../components/Style/style';
import { InputContainer, InputBox, Label, JoinShowMessage, JoinBtn, JoinInput, AddressInput, AddressBtn } from '../Join/style';
import { InfoForm, InfoBtnBox, InfoInputContainer, InfoPassword } from './style';

class ChangeUserInformation extends React.Component {
  constructor(){
    super();
  }
  render(){
    return (
      <Container>
        <TitleMargin>사용자 정보 수정</TitleMargin>
        <InfoForm>
          <InputContainer>
            <InputBox>
              <Label htmlFor="username">이름</Label>
              <Input type="text" id="username" />
            </InputBox>
            <JoinShowMessage></JoinShowMessage>
          </InputContainer>
          <InputContainer>
            <InputBox>
              <Label htmlFor="email">이메일</Label>
              <Input type="text" id="email" />
            </InputBox>
            <JoinShowMessage></JoinShowMessage>
          </InputContainer>
          <InfoInputContainer>
            <InputBox>
              <Label htmlFor="password">비밀번호</Label>
              <Input type="password" id="password" />
            </InputBox>
            <JoinShowMessage></JoinShowMessage>
            <InfoPassword>
              <Input type="password" id="repassword" />
              <ShowMessage></ShowMessage>
            </InfoPassword>
          </InfoInputContainer>
          <InputContainer>
            <InputBox>
              <Label htmlFor="phoneNumber">전화번호</Label>
              <NumberInput type="number" id="phoneNumber" />
            </InputBox>
            <JoinShowMessage></JoinShowMessage>
          </InputContainer>
          <InputContainer>
            <InputBox>
              <Label htmlFor="address">주소</Label>
              <AddressInput type="text" id="address" />
              <AddressBtn>주소찾기</AddressBtn>
            </InputBox>
            <JoinInput type="text" />
            <JoinInput type="text" id="adressDtail" />
            <JoinShowMessage></JoinShowMessage>
          </InputContainer>
          <InfoBtnBox>
            <JoinBtn>취소</JoinBtn>
            <JoinBtn>완료</JoinBtn>
          </InfoBtnBox>
        </InfoForm>
      </Container>
    );
  }
}

export default ChangeUserInformation;