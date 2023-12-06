import styled from "styled-components";
import { ShowMessage, LoginBtn, Input } from '../../../components/Style/style'

const JoinContainer = styled.div`
  margin-top: 50px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 70px;
`

const JoinForm = styled.form`
  display: flex;
  flex-direction: column;  
  justify-content: center;
  align-items: center;
  gap: 15px;
`

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const InputBox = styled.div`
  display: flex;
  line-height: 40px;
`

const Label = styled.label`
  width: 130px;
`

const JoinInput = styled(Input)`
  margin-left: 130px;
`

const AddressInput = styled(Input)`
  width: 140px;
`

const AddressBtn = styled(LoginBtn)`
  width: 122px;
  height: 42px;
  margin: 0 5px;
`

const JoinShowMessage = styled(ShowMessage)`
  margin-left: 130px;
`

const JoinBtn = styled(LoginBtn)`
  width: 180px;
  margin-top: 30px;
`

export { JoinContainer, JoinForm, InputContainer, InputBox, Label, JoinShowMessage, JoinBtn, JoinInput, AddressInput, AddressBtn };