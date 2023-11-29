//사용자 정보 조회 페이지

import React from "react";
import {Container, Title} from '../../../components/Style/style';
import {} from './style';

class UserInformation extends React.Component {
  constructor(){
    super();
  }
  render(){
    return (
      <Container>
        <Title>사용자 정보</Title>
      </Container>
    );
  }
}

export default UserInformation;