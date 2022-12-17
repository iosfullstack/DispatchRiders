import styled from "styled-components";

export const ServiceWrapper = styled.div`
    width: 100%;
    position: relative;
    overflow: hidden;
    margin-bottom: 50px;
`
export const ServiceContainer = styled.div`
    position: relative;
    margin: auto;
    padding: 0px 24px;
    @media (max-width: 580px) {
        padding: 0px;
    }
`
export const TypographyH = styled.p`
    width: 580px;
    margin: auto;
    font-size: 36px;
    font-weight: 800;
    text-align: center;
    @media (max-width: 580px) {
        width: 100%;
        font-size: 20px;
    }
`
export const ServiceRow = styled.div`
    display: flex;
    justify-content: center;
    /* flex-wrap: wrap; */
    padding-top: 40px;
    /* gap: 5px; */
    @media (max-width: 920px) {
        flex-wrap: wrap;
    }
    > div {
        box-sizing: border-box !important;
    }
`
export const ServiceCard = styled.div`
    width: 400px;
    height: 250px;
    margin: 16px;
    background: #F5F5F5;
    padding: 20px;
    border-radius: 10px;
    @media (max-width: 1027px) {
        width: 265px; 
    }
    @media (max-width: 480px) {
        width: 300px; 
        height: 150px;
    }
    @media (max-width: 320px) {
        width: 250px; 
        height: 180px;
    }

    img {
        width: 80px;
    }
    @media (max-width: 480px) {
        img {
            width: 40px;
        }
    }
    h2 {
        font-size: 32px;
    }
    @media (max-width: 480px) {
        h2 {
            font-size: 22px;
        }
    }
    
    p {
        font-size: 16px;
        font-weight: 500;
    }
    @media (max-width: 480px) {
        p {
            font-size: 14px;
        }
    }

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        box-shadow: 1px 2px 8px 5px rgba(7,115,31,0.53);
        -webkit-box-shadow: 1px 2px 8px 5px rgba(7,115,31,0.53);
        -moz-box-shadow: 1px 2px 8px 5px rgba(7,115,31,0.53);
  }
`
export const TypographyP = styled.p`
    font-size: 24px;
    font-weight: 800;
    text-align: center;

    @media (max-width: 480px) {
        font-size: 14px;
    }
`