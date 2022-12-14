import React from "react";
import { CopyRight, FooterContainer, FooterContent, FooterForm, FooterLink, FooterMenu, FooterWrapper, SocialIcon, SocialIconWrapper } from './FooterStyle'
import logo from "../../assets/images/footer/img1.png"
import { Link } from 'react-scroll'
import { FaLinkedin, FaInstagram } from 'react-icons/fa'
import { MdMessage } from 'react-icons/md'
import { BsTwitter } from 'react-icons/bs'

import Hand from "../../assets/images/footer/img2.png"

const Footer = () => {
  return (
    <FooterWrapper>
        <FooterContainer>
            <FooterContent>
            <div>
                <img src={logo} alt='dispatch logo' 
                    width= "200px"
                />
                <p>
                    No: 8, Ugwuonyia Monaque, Enugu State, Nigeria.
                </p>
                <p>
                    No: 31, Eze Street, Uwani LGA, Enugu State, Nigeria.
                </p>
            </div>

            <FooterLink>
                <FooterMenu>
                    <h5>About</h5>
                    <ul>
                        <li>
                            <Link to="home" smooth={true} spy={true}>About Us</Link>
                        </li>
                        <li>
                            <Link to="services" smooth={true} spy={true}>Our Services</Link>
                        </li>
                        <li>
                            <Link to="contacts" smooth={true} spy={true}>Contact Us</Link>
                        </li>
                    </ul>
                </FooterMenu>
                <FooterMenu>
                    <h5>Support</h5>
                    <ul>
                        <li>
                            <Link to="/">FAQs</Link>
                        </li>
                        <li>
                            <Link to="/">Support</Link>
                        </li>
                    </ul>
                </FooterMenu>
                <FooterMenu>
                    <h5>Legal</h5>
                    <ul>
                        <li>
                            <Link to="/">Privacy Policy</Link>
                        </li>
                        <li>
                            <Link to="/">Terms and Condition</Link>
                        </li>
                        <li>
                            <Link to="/">CAC Policy</Link>
                        </li>
                    </ul>
                </FooterMenu>
            </FooterLink>
            </FooterContent>
            <hr/>
            <SocialIconWrapper>
            <CopyRight>
                © Copyright 2022 DispatchNg. All Right Reserved.
            </CopyRight>

            <FooterForm>
            <input
                  id="q"
                  aria-label="Chat"
                  placeholder="Chat with us here"
                  type="text"
                  name="q"
                />
                <img src={Hand} alt='emoji' />
                <span>
                    <a href="https://wa.me/08133649624" target="_blank" rel="noopener noreferrer"><MdMessage size="25"/></a>
                </span>
            </FooterForm>

            <SocialIcon>
                <a href="#hghgh" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size="22" />
                    </a>
                <a href="#hghghgh" target="_blank" rel="noopener noreferrer">
                    <BsTwitter  size="22" />
                    </a>
                <a href="#hghghghh" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin size="22" />
                </a>
            </SocialIcon>
            </SocialIconWrapper>
        </FooterContainer>
    </FooterWrapper>
  )
}

export default Footer