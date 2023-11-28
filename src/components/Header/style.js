import styled from "styled-components";

const HeaderStyle = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  background-color: white;
`

const Logo = styled.p`
  width: 10%;
  font-size: 28px;
  font-weight: 600;
  text-align: left;
  &:hover {
    cursor: pointer;
  }
`

const HeaderLogoDiv = styled.div`
  width: 22rem;
  height: 1.5rem;
  margin: 30px 50px;
`

const HeaderInput = styled.input`
  width: 22rem;
  height: 1.5rem;
  margin: 40px;
  padding: 3px 10px;
  border: 1px solid black;
  border-radius: 10px;
`

const PageRoute = styled.div`
  width: 22rem;
  height: 1.5rem;
  display: flex;
  justify-content: flex-end;
	gap: 12px;
  margin: 30px 50px;
`

const HeaderP = styled.p`
  &:hover {
    cursor: pointer;
  }
`

export {HeaderStyle, Logo, HeaderLogoDiv, HeaderInput, PageRoute, HeaderP};