import { React, useState } from 'react';
import { Link } from 'react-scroll';
import { ContactLink, Logo, MobileContentWrapper, MobileCTA, MobileMenu, MobileMenuBtn, MobileWrapper, Nav, NavClose, NavMenu } from './NavbarStyle'
import logo from '../../../assets/images/navbarimg/img1.png'
import FeatherIcon from "feather-icons-react";
import Button from '../../atoms/Button';


const Navbar = () => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  return (
    <div>
        <Nav>
          <div>
                <Logo> 
                <img src={logo} width="200" alt="Nerdy Eye Logo" />
                </Logo>

                <NavMenu>
                  <ul>
                    <Link to='home' smooth={true} spy={true} style={{color: "#137547"}}>
                    <li>
                      Home
                    </li>
                    </Link>
                    <Link to='services' smooth={true} spy={true}>
                    <li>
                       Our Services
                    </li>
                    </Link>
                    <Link to='/' smooth={true} spy={true}>
                    <li>
                      Cooperation
                    </li>
                    </Link>
                    <Link to='contacts' smooth={true} spy={true}>
                    <li>
                      Contact
                    </li>
                    </Link>
                    
                      <ContactLink to='contacts' smooth={true} spy={true}>Contact Us</ContactLink>
                    
                  </ul>
              </NavMenu>
              <MobileMenuBtn>
              <Button
                label={<FeatherIcon icon="menu" />}
                variant="text"
                onClick={() => setShowMobileNav(!showMobileNav)}
              />
              </MobileMenuBtn>
              </div>
              
              <MobileWrapper style={{ display: `${showMobileNav ? "block" : "none"}` }}>
                <MobileContentWrapper>
                <NavClose>
                <FeatherIcon
                  onClick={() => setShowMobileNav(!showMobileNav)}
                  icon="x"
                  size="24"
                 />
                </NavClose>

                <MobileMenu>
                <ul>
                   <Link to='home' smooth={true} spy={true}>
                    <li>
                      Home
                    </li>
                    </Link>
                    <Link to='services' smooth={true} spy={true}>
                    <li>
                       Our Services
                    </li>
                    </Link>
                    <Link to='/' smooth={true} spy={true}>
                    <li>
                      Cooperation
                    </li>
                    </Link>
                    <Link to='contacts' smooth={true} spy={true}>
                    <li>
                      Contact
                    </li>
                    </Link>
                    <MobileCTA>
                      <ContactLink>Contact Us</ContactLink>
                    </MobileCTA>
                  </ul>
                </MobileMenu>
                </MobileContentWrapper>
              </MobileWrapper>
        </Nav>
    </div>
  )
}

export default Navbar;