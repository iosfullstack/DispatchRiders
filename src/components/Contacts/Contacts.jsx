import { React, useState } from 'react'
import axios from 'axios'
import Img2 from "../../assets/images/contacts/img2.png"
import { ContactContents, ContactForm, ContactImg, ContactWrapper, EmailButton, EmailInput, FormWrapper, SectionWrapper } from './ContactsStyle'

const Contacts = () => {
    const [message, setMessage] = useState(false)
    const [errors, setErrors] = useState(false)
    const [email, setEmail] = useState('')

    const sendEmail = async (e) => {
        e.preventDefault();

            await axios.post('https://dispatchng.herokuapp.com/email', email);
            setEmail('')
            .then(response => {
                console.log(response.text)
                if (email === '') {
                    return setErrors(true)
                } else {
                    return setMessage(true)
                }
            })
            .catch(error => {
                console.log(error.text)
            })
        }

  return (
    <SectionWrapper id='contacts'>
        <ContactWrapper>
            <ContactContents>
                <ContactForm>
                    <h3>Let's keep you updated when we launch</h3>
                    <p>
                        Get information on our launch, your packages when on delivery and
                        delivered, and also to collate feedbacks and testimonials.
                    </p>
                    <FormWrapper>
                        <form action="">
                            <EmailInput onChange={e => setEmail(e.target.value)} value={email} type="email" name="email" id="" placeholder='Enter your Email' />
                            <EmailButton onSubmit={sendEmail}>Submit</EmailButton>
                        <span>{message ? true && "hfgfgfgfg" : errors && "hffggfgffffff"}</span>
                        </form>
                    </FormWrapper>
                </ContactForm>
                <ContactImg>
                    <img src={Img2} alt="bus" />
                </ContactImg>
            </ContactContents>
        </ContactWrapper>
    </SectionWrapper>
  )
}

export default Contacts