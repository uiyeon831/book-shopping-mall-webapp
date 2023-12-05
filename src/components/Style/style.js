import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height : auto;
  min-height: 100vh;
  margin-top: 30px;
  padding-bottom: 2.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`

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
  margin-top: 10px;
  &:hover{
    cursor: pointer;
  }
`

const Title = styled.p`
  font-size: 20px;
  font-weight: 600;
`


const TitleMargin = styled(Title)`
  margin-top: 50px;
`

export {Container, Logo, ATag, Input, ShowMessage, LoginBtn, NumberInput, Title, TitleMargin};