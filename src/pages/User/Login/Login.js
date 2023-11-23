//로그인 페이지

import React from "react";
import './Login.css'

class Login extends React.Component {
  constructor(){
    super();
  }
  render(){
    return (
      <main className="login">
        <p className="logo">Logo</p>
        <form>
          <div class="whetherMember">
            <p class="member">회원 로그인</p>
            <p class="nonMember">비회원 주문 조회</p>
          </div>
          <div id="showLoginMessage" class="showMessage"></div>
          <div class="loginInput">
            <div>
              <input type="text" placeholder="이메일" id="email" />
              <div id="showEmailMessage" class="showMessage"></div>
            </div>
            <div>
              <input type="password" placeholder="비밀번호" id="password" />
              <div id="showPasswordMessage" class="showMessage"></div>
            </div>
          </div>
          <button id="loginBtn">로그인</button>
          <a href="/join"><p className="joinBtn">회원가입</p></a>
        </form>
      </main>
    );
  }
}

export default Login;