import React from 'react'
// import axios from 'axios'
import { ContactContainer, ContactDetails, ContactImage, ContactText, ContactWrapper, DetailsWrapper, EmailButton, EmailInput, FormWrapper, TypographyH, TypographyP } from './ContactStyle'
import Img2 from "../../assets/images/contacts/img2.png"
import { useState } from 'react'

const Contact = () => {
    const [email, setEmail] = useState()
    // const [message, setMessage] = useState(false)
    // const [errors, setErrors] = useState(false)

    const sendEmail = async  (e) => {
        const url = 'https://dispatchng.herokuapp.com/email';
        e.preventDefault()
        setEmail('')
        await fetch(url, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                "Content-Type": "application/json;",
                'Accept': 'application/json, text/plain, */*',
                credentials: "omit", //
            },
            withCredentials: true,
            // credentials: 'same-origin',
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            cache: 'no-cache',
            crossdomain: true,
            // email,
        })
        .then((response) => response.data)
        .then((email) => {
            console.log('Success:', email)
        })
        .catch((error) => {
            console.error('Error:', error)
        })
    }
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
                    <form action="" method='post' onSubmit={sendEmail}>
                        <EmailInput value={email} onChange={e => setEmail(e.target.value)} type="email" name="email" id="" placeholder='Enter your Email' />
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