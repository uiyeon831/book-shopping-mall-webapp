import styled from "styled-components";

const Menu = styled.ul`
  width: 10%;
  height: 60vh;
  background-color: #ebebeb;
  border-radius: 10px;
  min-width: 180px;
  max-width: 180px;
  text-align: center;
  margin-left: 35px;
  position: fixed;
`

const MenuLi = styled.li`
  height: 20px;
  line-height: 20px;
  letter-spacing: 2px;
  font-size:  15px;
  color: #3c3c3c;
  display: list-item;
  padding: 15px;
  border-bottom: 0.5px solid #3c3c3c;
  &:hover{
    cursor: pointer;
    font-weight: 600;
  }
`

const MenuTitle = styled.p`
  height: 30px;
  line-height: 30px;
  font-size: 20px;
  letter-spacing: 2px;
  padding: 10px;
  border-bottom: 2px solid #3c3c3c;
  margin: 0px;
  font-weight: 600;
`

export {Menu, MenuLi, MenuTitle};