import styled from "styled-components";

const ProductCategoryBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 70px;
`

const ProductCategoryUl = styled.ul`
  width: 50%;
  height: 120px;
  border-radius: 10px;
  background-color: rgb(245, 245, 245);

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3.5rem;
`

const CategoryLi = styled.li`
  &:hover {
    cursor: pointer;
  }
`

export {ProductCategoryBox, ProductCategoryUl, CategoryLi};