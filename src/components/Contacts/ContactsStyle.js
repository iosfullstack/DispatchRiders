import styled from "styled-components";
import bgImg from "../../assets/images/contacts/img1.png"
import bgImg1 from "../../assets/images/contacts/img3.png"

export const SectionWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  background: url(${bgImg}); 
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 569px) {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background: url(${bgImg1}); 
    }
`;

export const ContactWrapper = styled.div`
    padding: 24px 24px;
    overflow: hidden;
`
export const ContactContents = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 0px 24px;
`
export const ContactForm = styled.div`
    display: block;
    width: 500px;
    @media (max-width: 769px) {
        width: 100%;
    }
    > h3 {
        color: #FAFAFA;
        font-size: 40px;
        font-weight: 800;
        @media (max-width: 769px) {
        font-size: 32px;
    }
    }
    > p {
        font-size: 16px;
        font-weight: 500px;
        color: #EEEEEE;
        @media (max-width: 769px) {
        font-size: 14px;
    }
    }
`
export const FormWrapper = styled.div`
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
    ::placeholder {
      font-size: 16px;
      font-weight: 500;
      color: #BDBDBD;
    }
    &:focus {
      outline: 0px;
    }
    @media (max-width: 920px) {
      width: 100%;
    }
`
export const EmailButton = styled.button`
    background: #5BBA6F;
    border-radius: 10px;
    padding:16px 24px;
    border: none;
    color: white;
    position: absolute;
    right: 30px;
    top: 6%;
    cursor: pointer;
    @media (max-width: 920px) {
        right: -20px;
    }
`
export const ContactImg = styled.div`
    /* width: 700px; */
    img {
        width: 600px;
        @media (max-width: 920px) {
            width: 100%;
            padding-top: 50px;
        }
    }
`