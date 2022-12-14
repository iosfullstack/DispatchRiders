import styled, {css} from "styled-components";

export const HeroWrapper = styled.div`
  /* width: 100%; */
  /* position: absolute; */
  overflow: hidden;
  background: #ffffff;
  /* bottom: -245px; */
  padding: 0px 24px;
`;

export const ServicesContainer = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  padding: 56px 0px;
  /* width: 100%; */
  /* margin: auto; */
  @media (max-width: 769px) {
       width: 100%;
    }
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
    `}
`
export const GridRow = styled.div`
  /* width: 100%; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  /* gap: 20px; */
  > div {
    /* width: 40%; */
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
        box-shadow: 0px 10px 40px 6px rgba(87, 87, 87, 0.12);
  }
`