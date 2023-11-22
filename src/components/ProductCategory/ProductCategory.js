//카테고리 사이드바

import React from "react";
import './ProductCategory.css';

class Category extends React.Component{
  constructor(){
    super();
  }
  render() {
    return (
      <div className="category">
        <ul>
          <li>소설</li>
          <li>시/에세이</li>
          <li>인문</li>
          <li>가정/육아</li>
          <li>요리</li>
        </ul>
      </div>
    )
  }
}

export default Category;