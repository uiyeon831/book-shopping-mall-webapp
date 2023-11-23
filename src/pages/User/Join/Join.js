//회원가입 페이지

import React from "react";
import './Join.css'

class Join extends React.Component {
  constructor(){
    super();
  }
  render(){
    return (
      <main className="join">
        <p className="logo">Logo</p>
        <form>
          <div>
            <label htmlFor="username">이름</label>
            <input type="text" id="username" />
            <div id="showUsernameMessage" class="showMessage">입력해주세요</div>
          </div>
          <div>
            <label htmlFor="email">이메일</label>
            <input type="text" id="email" />
            <div id="showEmailMessage" class="showMessage">입력해주세요</div>
          </div>
          <div>
            <label htmlFor="password">비밀번호</label>
            <input type="password" id="password" />
            <div id="showPasswordMessage" class="showMessage">입력해주세요</div>
          </div>
          <div>
            <label htmlFor="repassword">비밀번호 확인</label>
            <input type="password" id="repassword" />
            <div id="showRepasswordMessage" class="showMessage">입력해주세요</div>
          </div>
          <div>
            <label htmlFor="phoneNumber">전화번호</label>
            <input type="number" id="phoneNumber" />
            <div id="showPhoneNumberMessage" class="showMessage">입력해주세요</div>
          </div>
          <div>
            <label htmlFor="address">주소</label>
            <input type="text" id="address" />
            <div id="showAddressMessage" class="showMessage">입력해주세요</div>
          </div>
          <button id="joinBtn">회원가입</button>
          
        </form>
      </main>
    );
  }
}

export default Join;