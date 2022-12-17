import React from 'react'
import { Slide } from 'react-awesome-reveal'
import { ServiceCard, ServiceContainer, ServiceRow, ServiceWrapper, TypographyH, TypographyP } from './ServiceStyle'

import img1 from "../../assets/images/sevicesimg/img1.png";
import img2 from "../../assets/images/sevicesimg/img2.png";
import img3 from "../../assets/images/sevicesimg/img3.png";


const serviceData = [
    {
        bgIcon: img1,
        title: "Pickups",
        desc: "We pickup at any interval to any destination you want to go airports, officies, home, school, hotels, etc. We have you covered",
    },
    {
        bgIcon: img2,
        title: "Rentals",
        desc: "We have you covered in all your car renting and other renting services. ",
    },
    {
        bgIcon: img3,
        title: "Deliveries",
        desc: "We pickup all your packages on delivery, on order, on requestsand on any form of acceptance for faster and delivery and usage. ",
    },
];

const Service = () => {
    
  return (
    <ServiceWrapper id="services">
        <ServiceContainer>
            <Slide direction='up'>
                <TypographyH>
                    We guarantee safe and fast delivery 
                    for your packages
                </TypographyH>
            </Slide>
            <ServiceRow>
            {serviceData.map((services, key) => (
              <div key={key}>
                <ServiceCard>
                    <img src={services.bgIcon} alt="" />
                    <h2>{services.title}</h2>
                    <p>{services.desc}</p>
                </ServiceCard>
              </div>
            ))}
            </ServiceRow>
            <TypographyP>
                And lots more.....
            </TypographyP>
        </ServiceContainer>
    </ServiceWrapper>
  )
}

export default Service