import styled from "styled-components";

const ProductCategoryBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 110px 0;
`

const ProductCategoryUl = styled.ul`
  width: 1300px;
  min-width: 800px;
  height: 60px;
  background-color: #f5f5f5;
  padding: 0 70px;

  display: flex;
  justify-content: left;
  align-items: center;
  gap: 3.5rem;
`

const CategoryLi = styled.li`
  &:hover {
    cursor: pointer;
  }
`

const CategoryLine = styled.li`
  width: 1px;
  height: 40px;
  background-color: #8f8f8f;
  margin: 0 10px;
`

export { ProductCategoryBox, ProductCategoryUl, CategoryLi, CategoryLine };