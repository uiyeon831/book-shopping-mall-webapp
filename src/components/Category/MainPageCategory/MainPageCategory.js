//카테고리 사이드바

import React from "react";
import { ProductCategoryBox, ProductCategoryUl, CategoryLi, CategoryLine } from './style';

class MainCategory extends React.Component{
  constructor(){
    super();
  }
  render() {
    return (
      <ProductCategoryBox>
        <ProductCategoryUl>
          <CategoryLi>베스트</CategoryLi>
          <CategoryLi>신간</CategoryLi>
          <CategoryLine />
          <CategoryLi>소설</CategoryLi>
          <CategoryLi>시/에세이</CategoryLi>
          <CategoryLi>인문</CategoryLi>
          <CategoryLi>가정/육아</CategoryLi>
          <CategoryLi>요리</CategoryLi>
        </ProductCategoryUl>
      </ProductCategoryBox>
    )
  }
}

export default MainCategory;