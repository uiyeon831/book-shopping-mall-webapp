import styled from "styled-components";

const Logo = styled.p`
  width: 70px;
  font-size: 28px;
  font-weight: 600;
  text-align: left;
  &:hover {
    cursor: pointer;
  }
`

const ATag = styled.a`
  text-decoration: none;
`

const Input = styled.input`
  width: 270px;
  height: 40px;
  border: 1px solid black;
  border-radius: 10px;
  margin: 0;
  padding: 0 15px;
`

const NumberInput = styled(Input)`
  &::-webkit-outer-spin-button{
  -webkit-appearance: none;
  margin: 0;
  }
  &::-webkit-inner-spin-button{
  -webkit-appearance: none;
  margin: 0;
  } 
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

export {Logo, ATag, Input, ShowMessage, LoginBtn, NumberInput};