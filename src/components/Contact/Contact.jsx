import React from 'react'
import { ContactContainer, ContactDetails, ContactImage, ContactText, ContactWrapper, DetailsWrapper, EmailButton, EmailInput, FormWrapper, TypographyH, TypographyP } from './ContactStyle'
import Img2 from "../../assets/images/contacts/img2.png"

const Contact = () => {
  return (
    <ContactWrapper id='contacts'>
       <ContactContainer>
        <DetailsWrapper>
            <ContactDetails>
                <ContactText>
                    <TypographyH>
                        Let's keep you updated when we launch
                    </TypographyH>
                    <TypographyP>
                        Get information on our launch, your packages when on delivery and
                        delivered, and also to collate feedbacks and testimonials.
                    </TypographyP>
                </ContactText>

                <FormWrapper>
                    <form action="">
                        <EmailInput type="email" name="email" id="" placeholder='Enter your Email' />
                        <EmailButton type="submit" name="Submit"/>
                    </form>
                </FormWrapper>
            </ContactDetails>
            <ContactImage>
                <img src={Img2} alt='vehicles' />
            </ContactImage>
        </DetailsWrapper>
       </ContactContainer>
    </ContactWrapper>
  )
}

export default Contact