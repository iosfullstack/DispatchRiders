import styled from "styled-components";
import {Link as LinkR} from 'react-router-dom'
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  position: relative;
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const NavMenu = styled.div`
  > ul {
    display: flex;
    list-style: none;
    align-items: center;
    gap: 15px;
  }
    li {
    display: flex;
    padding: 0 15px;
    font-size: 16px;
    font-weight: 500;
    list-style: none;
    cursor: pointer;
    &:hover {
      color: #137547;
    }
  }
  a {
    color: black;
    text-decoration: none;
  }
  a:hover {
    
  }
  @media (max-width: 1200px) {
    > ul > li {
      padding: 10px;
    }
  }
  @media (max-width: 920px) {
    display: none;
  }
`;

export const Logo = styled(LinkR)`
    text-decoration: none;
`
export const MobileMenuBtn = styled.div`
  display: none;
  > button {
    padding: 0px;
  }
  @media (max-width: 920px) {
    display: block;
  }
`;
export const ContactLink = styled(LinkS)`
  border: 2px solid #137547;
  border-radius: 10px;
  padding: 15px 35px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background: #137547;
    color: #fff;
  }
`
export const MobileWrapper = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1000000;
  background-color: #fff;
  position: fixed;
  top: 0px;
`;

export const MobileContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
`;

export const MobileMenu = styled.div`
  > ul {
    padding: 0px;
    display: flex;
    flex-direction: column;
    list-style: none;
  }
  li {
    display: block;
    text-align: left;
    font-size: 16px;
    font-weight: 600;
    padding: 38px 0;
    cursor: pointer;
    &:hover {
      color: #137547;
    }
  }
  a {
    color: black;
    text-decoration: none;
  }
`;

export const NavClose = styled.div`
  text-align: right;
  padding-right: 24px;
`

export const MobileCTA = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-right: 24px;
  font-size: 16px;
  font-weight: 600;
  margin: 0px;
  &:hover {
    background: #137547;
    color: #fff;
    border-radius: 10px;
  }
`;

export const NavIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    margin-right: 20px;
  }
`;