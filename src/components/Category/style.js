import styled from "styled-components";

const Menu = styled.ul`
  height: 70vh;
  background-color: #f5f5f5;
  min-width: 160px;
  max-width: 160px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 30px 0;
  position: sticky;
  top: 20px;
`

const MenuMyAdmin = styled(Menu)`
  height: 40vh;
`

const MenuLi = styled.li`
  width: 120px;
  height: 20px;
  line-height: 20px;
  letter-spacing: 2px;
  font-size:  15px;
  color: #3c3c3c;
  display: list-item;
  padding: 20px 0 20px 20px;

  &:hover{
    cursor: pointer;
    font-weight: 600;
  }
`

const MenuTitle = styled.p`
  width: 120px;
  height: 30px;
  line-height: 30px;
  font-size: 18px;
  letter-spacing: 1px;
  padding-top: 10px;
  padding-bottom: 20px;
  margin: 0px;
  font-weight: 600;
  padding-left: 20px;
`

const MenuLine = styled.div`
  width: 120px;
  height: 1px;
  background-color: #8f8f8f;
  margin: 20px 0;
`

export { Menu, MenuLi, MenuTitle, MenuLine, MenuMyAdmin };