import React from 'react'
import ServiceCard from './ServiceCard'
import {Col} from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const serviceData = [
    {
        imgUrl: weatherImg,
        title: 'Weather',
        desc: 'Get the latest weather updates'
    },
    {
        imgUrl: guideImg,
        title: 'Tour Guide',
        desc: 'Get the best tour guides'
    },
    {
        imgUrl: customizationImg,
        title: 'Customization',
        desc: 'Customize your tour'
    }
]

function ServiceList() {
  return (
    <>
        {serviceData.map((item,index) => (
            <Col lg='3' key={index}>
            <ServiceCard item={item} />
            </Col>
        ))}
    </>
  )
}

export default ServiceList