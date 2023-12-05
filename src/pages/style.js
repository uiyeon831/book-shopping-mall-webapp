import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: justify;
  gap: 2rem;
  padding-bottom: 70px;
`

const MainTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
  position: relative;
  left: 60px;
`

const MainBookContainer = styled.div`
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
`

const ArrowIcon = styled.img`
  height: 50px;
  width: 30px;
  &:hover {
    cursor: pointer;
  }
`

const MainBookBox = styled.div`
  display: flex;
  gap: 50px;
  justify-content: center;
  align-items: center;
`

const Book = styled.div`
  width: 220px;
  height: 290px;
  border: solid 1px black;
  &:hover {
    cursor: pointer;
  }
`

export {MainContainer, MainTitle, MainBookContainer, ArrowIcon, MainBookBox, Book};