import styled from "styled-components";
import { JoinForm, InputContainer } from '../Join/style';

const InfoForm = styled(JoinForm)`
  margin-top: 50px;
  padding: 40px 50px;
  border-top: 1px solid #b0b0b0;
`

const InfoBtnBox = styled.div`
  display: flex;
  gap: 20px;
`

const InfoPassword = styled.div`
  margin: 0;
  margin-left: 130px;
`

const InfoInputContainer = styled(InputContainer)`
  gap: 0;
`

export { InfoForm, InfoBtnBox, InfoPassword, InfoInputContainer };