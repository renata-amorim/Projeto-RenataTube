import React from "react"
import styled from "styled-components"
import logoImg from "../../assets/logoImg.png"
import DarkModeSwitch from "./components/DarkModeSwitch"
import Search from "./components/Search"

const StyledMenu = styled.header`
  display: flex;
  flex-direction: row;
  height: 70px;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.backgroundLevel1 || "#FFFFFF"};
  border: 1px solid ${({ theme }) => theme.borderBase || "#e5e5e5"};
  align-items: center;
  padding: 0 16px;
  gap: 16px;
  position: fixed;
  width: 100%;
  .logo {
    width: 100%;
    max-width: 80px;
    @media (min-width: 600px) {
      max-width: 127px;
    }
    .text {
      fill: ${({ theme }) => theme.textColorBase || "#222222"}
    }
  }
`

function Menu({ valueFilter, setValueFilter }) {
  return (
    <StyledMenu>
      <div>
        <Logo />
      </div>
      <Search valueFilter={valueFilter} setValueFilter={setValueFilter} />
      <DarkModeSwitch />
    </StyledMenu>
  )
}

function Logo() {
  return (
    <img src={logoImg.src} className="logo" />
  )
}

export default Menu