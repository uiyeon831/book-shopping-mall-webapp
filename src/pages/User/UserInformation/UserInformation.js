//사용자 정보 조회 페이지

import React from "react";
import { Container, TitleMargin } from '../../../components/Style/style';
import { Information, UserInformationBox, UserPTag, ModifyBtn, WithdrawalBtn, UserInfoBtnBox, AddressContainer, InfoContainer } from './style';

class UserInformation extends React.Component {
  constructor(){
    super();
  }
  render(){
    return (
      <Container>
				<TitleMargin>사용자 정보</TitleMargin>
				<InfoContainer>
					<Information>
						<UserInformationBox>
							<UserPTag>이름</UserPTag>
							<UserPTag id="nameValue" class="resData"></UserPTag>
						</UserInformationBox>
						<UserInformationBox>
							<UserPTag>이메일</UserPTag>
							<UserPTag id="emailValue" class="resData"></UserPTag>
						</UserInformationBox>
						<UserInformationBox>
							<UserPTag>전화번호</UserPTag>
							<UserPTag id="phoneValue" class="resData"></UserPTag>
						</UserInformationBox>
						<UserInformationBox>
							<UserPTag>주소</UserPTag>
							<AddressContainer>
								<UserPTag id="postalCode" class="resData"></UserPTag>
								<UserPTag id="addressValue" class="resData"></UserPTag>
								<UserPTag id="addressDetailValue" class="resData"></UserPTag>
							</AddressContainer>
						</UserInformationBox>
					</Information>
					<UserInfoBtnBox>
						<ModifyBtn class="changeBtn">수정하기</ModifyBtn>
						<WithdrawalBtn id="withdrawal">회원탈퇴</WithdrawalBtn>
					</UserInfoBtnBox>
				</InfoContainer>
      </Container>
    );
  }
}

export default UserInformation;