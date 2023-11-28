import styled from "styled-components";

const LoginContainer = styled.div`
  height : auto;
  min-height: 100vh;
  margin-top: 50px;
  padding-bottom: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;
`

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;  
  justify-content: center;
  align-items: center;
  gap: 8px;
`

const WhetherMember = styled.div`
  display: flex;
`

const MemberLogin = styled.p`
  width: 150px;
  height: 43px;
  border: solid 1px black;
  border-bottom: none;
  color: black;
  text-align: center;
  line-height: 43px;
  &:last-child{
    border: none;
    border-bottom: solid 1px black;
    background-color: rgb(235, 235, 235);
  }
  &:hover{
    cursor: pointer;
  }
`

const NonMemberLogin = styled.p`
  width: 150px;
  height: 43px;
  border: solid 1px black;
  border-bottom: none;
  color: black;
  text-align: center;
  line-height: 43px;
  &:first-child{
    border: none;
    border-bottom: solid 1px black;
    background-color: rgb(235, 235, 235);
  }
  &:hover{
    cursor: pointer;
  }
`

const LoginInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const LoginInput = styled.input`
  width: 270px;
  height: 40px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 0;
  padding: 0 15px;
`

const ShowMessage = styled.div`
  width: 280px;
  height: 15px;
  line-height: 15px;
  font-size: 12px;
  padding: 0 10px;
  color: red;
  display: block;
`

const LoginBtn = styled.button`
  width: 300px;
  height: 55px;
  border: 1px solid black;
  border-radius: 10px;
  margin-top: 10px;
  &:hover{
    cursor: pointer;
  }
`

const JoinPTag = styled.p`
  width: 270px;
  color: black;
  font-size: 12px;
  text-align: right;
  padding-top: 5px;
`

export {LoginContainer, LoginForm, WhetherMember,  MemberLogin, NonMemberLogin, LoginInputContainer, InputDiv, LoginInput, ShowMessage, LoginBtn, JoinPTag};