import React from 'react'
import "./Newsletter.css"

import { Container,Row,Col } from 'reactstrap'
import MaleTourist from "../assets/images/male-tourist.png"


const Newsletter = () => {
  return (
    <section className='newsletter'>
        <Container>
            <Row>
                <Col lg="6">
                    <div className="newsletter__content">
                        <h2>Subscribe to get Useful Traveling Information</h2>

                        <div className="newsletter__input">
                            <input type="email" placeholder='Enter Your Email'/>
                            <button className='btn newsletter__btn'>Subscribe</button>
                        </div>

                        <p>Subscribe to our newsletter for exclusive travel tips, destination highlights, and the latest deals on our tours! Discover hidden gems and plan your next adventure with insider information delivered straight to your inbox.
                        </p>
                    </div>
                </Col>
                <Col lg="6">
                    <div className="newsletter__img">
                        <img src={MaleTourist} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Newsletter