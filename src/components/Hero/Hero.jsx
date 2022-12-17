import React from 'react'
import Img1 from "../../assets/images/heroimgs/img1.png"
import Img2 from "../../assets/images/heroimgs/img2.png"
import TypeWriterEffect from 'react-typewriter-effect';
import { HeroCenter, HeroCenterText, HeroImages, HeroLink, HeroText, HeroTextContainer, HeroWrapper, TypeWriter, TypeWriterText } from './HeroStyle'
import { Slide } from 'react-awesome-reveal';

const Hero = () => {
  return (
    <HeroWrapper id='home'>
        <HeroTextContainer>
            <Slide direction='up'>
            <HeroText>Coming Soon!!!</HeroText>
            <TypeWriter>
            <TypeWriterText>
            <TypeWriterEffect
        startDelay={1000}
        cursorColor= 'transparent'
        multiText={[
          'Seamless',
          'Quickest',
          'Safest',
          'Trusted'
        ]}
        multiTextDelay={1000}
        multiTextLoop={true}
        typeSpeed={500}
      />
            </TypeWriterText>
            <TypeWriterText text>
            <TypeWriterEffect
        startDelay={1000}
        cursorColor="transparent"
        multiText={[
          'Delivery',
          'Delivery',
          'Delivery',
          'Delivery',
        ]}
        multiTextDelay={1000}
        // multiTextLoop={true}
        typeSpeed={500}
      />
            </TypeWriterText>
            </TypeWriter>
            <HeroCenter>
                <HeroCenterText>
                    With reliable and faster dispatch and logistics services, 
                    we get your orders complete
                    and satisfying for you.
                </HeroCenterText>
                <HeroLink  to='contacts' smooth={true} spy={true}>Get Started</HeroLink>
            </HeroCenter>
            </Slide>
        </HeroTextContainer>
        <HeroImages>
            <img src={Img1} alt='car' />
            <img src={Img2} alt='motorcycle' />
        </HeroImages>
    </HeroWrapper>
  )
}

export default Hero