import styled from "styled-components";

export const FooterWrapper = styled.div`
    width: 100%;
    background: #040404;
    color: #fff;
`
export const FooterContainer = styled.div`
    padding: 24px 24px;
    margin: auto;
    > hr {
        max-width: 1400px;
    }

  @media (max-width: 1000px) {
    margin: auto 56px;
  }

  @media (max-width: 567px) {
    margin: auto 20px;
  }
`
export const FooterContent = styled.div`
     display: flex;
  position: relative;
  justify-content: space-between;
  padding: 0 24px;
  > div {
    width: 320px;
    > p {
    font-size: 16px;
  }
  }

  @media (max-width: 920px) {
    padding: 0px;
  }
  
  @media (max-width: 567px) {
    flex-direction: column;
  }
`
export const FooterLink = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @media (max-width: 567px) {
    gap: 32px;
    
  }
  @media (max-width: 769px) {
    padding-bottom: 40px;
    }
`

export const FooterMenu = styled.div`
    > h5 {
    margin: 0px;
    font-size: 18px;
    /* font-weight: 800; */
  }
  > ul {
    list-style-type: none;
    padding: 0px;
    margin-top: 25px;
  }

  > ul > li {
    margin-bottom: 36px;
    cursor: pointer;
  }

  > ul > li > a {
    text-decoration: none;
    color: #fff;
    &:hover {
      color: #137547;
    }
  }
`
export const SocialIconWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 24px;
    @media (max-width: 769px) {
    flex-direction: column;
    align-items: center;
  }
`
export const CopyRight = styled.div`
    @media (max-width: 769px) {
        padding-bottom: 20px;
    }
`
export const SocialIcon = styled.div`
    display: flex;
    width: 109px;
    justify-content: space-between;
    > a {
        color: #BDBDBD;
    }
`
export const FooterForm = styled.form`
  width: 220px;
  position: relative;
  left: 230px;
  @media (max-width: 920px) {
        bottom: 120px;
        left: 70px;
    }
  #q {
    /* position: relative; */
    width: 150px;
  padding: 8px;
  border-radius: 50px;
  border: 0px;
  outline: none;
  }
  img {
    position: absolute;
    right: 60px;
    top: 2px;
  }
  span {
    position: absolute;
    bottom: -3px;
    width: 40px;
    height: 40px;
    text-align: center;
    border-radius: 50%;
    background-color: #137547;
    color: #fff;
  }
  span > a {
    position: absolute;
    text-decoration: none;
    color: #fff;
    top: 10px;
    right: 7px;
  }
`
export const FooterInput = styled.input`
  width: 120px;
  /* height: 45px; */
  padding: 8px;
  border-radius: 50px;
  border: 0px;
  outline: none;
`