import styled, {css} from "styled-components";
import { Link as LinkS } from "react-scroll";

export const HeroWrapper = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
`;

export const TypeWriter = styled.div`
    display: flex;
    gap: 15px;
    overflow: hidden;
    @media (max-width: 569px) {
        width: 100%;
    }
    @media (max-width: 320px) {
        width: 100%;
    }
`
export const TypeWriterText = styled.span`
    font-size: 28px;
    font-weight: 800;
    color: #137547;
    ${props => props.text && css`
        font-size: 28px;
        font-weight: 800;
        color: black;
    `}
    @media (max-width: 769px) {
       font-size: 22px;
    }
    @media (max-width: 569px) {
        font-size: 18px;
    }
    @media (max-width: 320px) {
        font-size: 16px;
    }
`

export const HeroTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
`
export const HeroText = styled.h3`
    color: #5BBA6F;
    font-size: 36px;
    font-family: 'Source Sans Pro', sans-serif;
    @media (max-width: 769px) {
       font-size: 32px;
    }
`
export const HeroCenter = styled.div`
    display: flex;
    flex-direction: column;
    width: 800px;
    @media (max-width: 769px) {
       width: 100%;
    }
`

export const HeroCenterText = styled.p`
    font-weight: 500;
    font-size: 24px;
    text-align: center;
    @media (max-width: 769px) {
       font-size: 14px;
    }
`
export const HeroLink = styled(LinkS)`
    background: #137547;
    border-radius: 10px;
    padding: 15px 35px;
    color: #fff;
    font-size: 20px;
    width: 100px;
    margin: auto;
    text-align: center;
    cursor: pointer;
    &:hover {
        background: #fff;
        color: #137547;
    }
`
export const HeroImages = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 769px) {
       flex-direction: column-reverse;
    }
    > img {
        width: 580px;
        @media (max-width: 769px) {
       width: 100%;
    }
    }
    
`