//관리자 회원관리 페이지

import React from "react";
import { Container } from '../../../components/Style/style';

class AdminUser extends React.Component {
  constructor(){
    super();
  }
  render(){
    return (
      <Container>
        회원관리 페이지입니다.
      </Container>
    );
  }
}

export default AdminUser;