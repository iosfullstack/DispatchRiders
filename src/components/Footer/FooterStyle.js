import styled from "styled-components";

export const FooterWrapper = styled.div`
    width: 100%;
    position: relative;
    overflow: hidden;
    background: #040404;
    color: #fff;
`
export const FooterContainer = styled.div`
    padding: 0px 24px;
    > hr {
        max-width: 1440px;
        color: #BDBDBD;
    }
`
export const FooterContent = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 34px 0px;
    flex-wrap: wrap;
    padding: 24px;
`
export const FooterRight = styled.div`
    width: 328px;
    > img {
        width: 200px;
    }
    > p {
        font-size: 16px;
        color: #BDBDBD;
    }
    @media (max-width: 580px) {
        > img {
            width: 150px;
        }
    }
`
export const FooterLeft = styled.div`
    width: 450px;
    display: flex;
    justify-content: space-between;
    padding-top: 24px;
    flex-wrap: wrap;
    @media (max-width: 580px) {
        gap: 20px;
    }
`
export const FooterMenu = styled.div`
       > h5 {
    margin: 0px;
    font-size: 18px;
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
    color: #BDBDBD;
    &:hover {
      color: #137547;
    }
  }
`
export const FooterBelow = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 24px 0px;
    /* flex-wrap: wrap; */
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`
export const CopyRight = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: #BDBDBD;
    @media (max-width: 580px) {
        text-align: center;
    }
`
export const SocialIconWrapper = styled.div`
    display: flex;
    gap: 100px;
    align-items: center;
    /* flex-wrap: wrap; */
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 10px;
    }
`
export const FooterForm = styled.form`
  width: 220px;
  position: relative;
  @media (max-width: 580px) {
        bottom: 140px;
        left: 45px;
    }
    @media (max-width: 360px) {
        bottom: 160px;
    }
  #q {
    /* position: relative; */
    width: 150px;
  padding: 10px;
  border-radius: 50px;
  border: 0px;
  outline: none;
  }
  img {
    position: absolute;
    right: 60px;
    top: 4px;
  }
  span {
    position: absolute;
    top: -5px;
    width: 50px;
    height: 50px;
    text-align: center;
    border-radius: 50%;
    background-color: #137547;
    color: #fff;
  }
  span > a {
    position: absolute;
    text-decoration: none;
    color: #fff;
    top: 8px;
    right: 7px;
  }
`
export const SocialIcon = styled.div`
    display: flex;
    gap: 20px;
    > a {
        color: #BDBDBD;
    }
`
