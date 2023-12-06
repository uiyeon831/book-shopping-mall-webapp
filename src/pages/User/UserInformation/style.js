import styled from "styled-components";
import { LoginBtn, } from '../../../components/Style/style';

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Information = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-top: 50px;
  padding: 40px 20px;
  border-top: 1px solid #b0b0b0;

`

const UserInformationBox = styled.div`
  display: flex;
  gap: 30px;
  padding-left: 30px;
`

const UserPTag = styled.p`
  width: 120px;
  &:last-child{
    color: #5e5e5e;
    width: 230px;
  }
`

const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  color: #5e5e5e;
`

const UserInfoBtnBox = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 150px;
`

const ModifyBtn = styled(LoginBtn)`
  width: 150px;
`

const WithdrawalBtn = styled.p`
  color: black;
  font-size: 12px;
  text-align: right;
  padding: 7px 5px;
  &:hover{
    cursor: pointer;
  }
`

export { Information, UserInformationBox, UserPTag, ModifyBtn, WithdrawalBtn, UserInfoBtnBox, AddressContainer, InfoContainer };