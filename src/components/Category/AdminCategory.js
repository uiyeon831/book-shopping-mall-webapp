//카테고리 사이드바

import React from "react";

class AdminCategory extends React.Component{
  constructor(){
    super();
  }
  render() {
    return (
      <ul>
        <li>product</li>
        <li>category</li>
        <li>user</li>
        <li>order</li>
      </ul>
    )
  }
}

export default AdminCategory;