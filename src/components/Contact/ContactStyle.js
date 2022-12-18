import styled from "styled-components";
import bgImg from "../../assets/images/contacts/img4.png"

export const ContactWrapper = styled.div`
    width: 100%;
    position: relative;
    overflow: hidden;
    background: url(${bgImg}); 
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    /* margin-bottom: 50px; */
`
export const ContactContainer = styled.div`
    padding: 0px 24px;
`
export const DetailsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`
export const ContactDetails = styled.div`
    width: 630px;
    display: flex;
    flex-direction: column;
    padding: 0 24px;
    @media only screen and (max-width : 540px) {
  /* Styles */
    width: 100%;
}
`
export const ContactText = styled.div`
    width: 500px;
    @media only screen and (max-width : 540px) {
  /* Styles */
    width: 100%;
}
`
export const TypographyH = styled.h2`
    font-size: 40px;
    font-weight: 800;
    color: #FAFAFA;
    @media only screen and (max-width : 540px) {
  /* Styles */
    font-size: 24px;
}
`
export const TypographyP = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: #EEEEEE;
    @media only screen and (max-width : 540px) {
  /* Styles */
    font-size: 12px;
}
`
export const FormWrapper = styled.div`
/* width: 100%; */
position: relative;
    form {
        position: relative;
        transition: 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
`
export const EmailInput = styled.input`
    padding: 8px 8px 8px 16px;
    width: 450px;
    height: 38px;
    border: none;
    border-radius: 10px;
    outline: none;
    box-shadow: 5px 5px 30px rgba (0, 0, 0, .2);
    @media only screen and (max-width : 540px) {
  /* Styles */
    width: 100%;
}
    ::placeholder {
      font-size: 16px;
      font-weight: 500;
      color: #BDBDBD;
    }
    &:focus {
      outline: 0px;
    }
`
export const EmailButton = styled.input`
    /* width: 150px; */
    background: #5BBA6F;
    border-radius: 10px;
    padding:16px 34px;
    border: none;
    color: white;
    position: absolute;
    right: 22%;
    top: 6%;
    cursor: pointer;
    @media only screen and (max-width : 1600px) {
  /* Styles */
    right: 25%;
}
    @media only screen and (max-width : 1440px) {
  /* Styles */
    right: 14%;
}
    @media only screen and (max-width : 1224px) {
  /* Styles */
    right: 6%;
}
    @media only screen and (max-width : 768px) {
  /* Styles */
    right: 26%;
}
@media only screen and (max-width : 540px) {
  /* Styles */
    right: -18px;
}
`
export const ContactImage = styled.div`
    img {
        width: 800px;
    }
    @media only screen and (max-width : 1224px) {
  /* Styles */
        img {
            width: 100%;
        }
}
`