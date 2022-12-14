import styled, {css} from "styled-components";

export const ServiceWrapper = styled.div`
  overflow: hidden;
  background: #ffffff;
  padding: 0px 24px;
  @media (max-width: 569px) {
        padding: 0px 24px;
    }
`;

export const ServicesContainer = styled.div`
  padding: 56px 0px;
`

export const ServiceText = styled.p`
  font-size: 30px;
  font-weight: 800;
  text-align: center;
  width: 500px;
  margin: auto;
  @media (max-width: 769px) {
       width: 100%;
       font-size: 24px;
    }
  

  ${props => props.text && css`
        font-size: 14px; 
        @media (max-width: 320px) {
           /* width: 100%; */
           font-size: 14px;
        }
    `}
`
export const GridRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  
  > div {
    padding: 20px;
    box-sizing: border-box !important;
  }
`
export const ServiceCard = styled.div`
  width: 320px;
  height: 250px;
  background: #F5F5F5;
  border-radius: 20px; 
  padding: 32px;
  @media (max-width: 569px) {
        /* width: 100%; */
        padding: 0px 24px;
    }
    @media (max-width: 320px) {
        width: 100%;
        padding: 0px;
    }
  > h2 {
    font-size: 32px;
    font-weight: 800;
  }
  > p {
    font-size: 14px;
    font-weight: 500;
  }
  &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        box-shadow: 1px 2px 8px 5px rgba(7,115,31,0.8);
        -webkit-box-shadow: 1px 2px 8px 5px rgba(7,115,31,0.8);
        -moz-box-shadow: 1px 2px 8px 5px rgba(7,115,31,0.8);
  }
`