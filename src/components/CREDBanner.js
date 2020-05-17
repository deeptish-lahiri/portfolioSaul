import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Image from "react-bootstrap/Image"
import {
  ProjectTitle,
  ProjectSubtitle,
  ProjectClient,
} from "./shared/ProjectTitle"

const CREDBanner = () => (
  <div>
    <Container>
      <Row>
        <Col xs={12} md={8} lg={{ span: 4, offset: 1 }}>
          <div className="banner-image-cont">
            <Image
              className="banner-image center-block"
              src="https://static.wixstatic.com/media/d9469f_21fc5f0d36184f5295fb8a390bfe1a8f~mv2.png/v1/fill/w_574,h_1076,al_c,q_90,usm_0.66_1.00_0.01/Screen%2520Shot%25202020-03-01%2520at%25209_45_e.webp"
            />
          </div>
        </Col>
        <Col xs={12} md={8} lg={7}>
          {/* <h1 className="banner-heading">Designing experience for pay later</h1>
          <h2 className="banner-heading">Brand</h2>
          <p className="banner-text">Lazypay</p>*/}
          <ProjectTitle>Cred</ProjectTitle>
          <ProjectSubtitle>
            Designing Experience for pay later product
          </ProjectSubtitle>
          <ProjectClient>About product</ProjectClient>
          <p className="banner-text">
            India's first 'Buy Now Pay Later' product launched to reduce
            friction while shopping online. Provided instant credit for shopping
            with flexible repayment options The 'Pay Later' feature in the app
            helped reduce online shopping drop-offs by 95%
          </p>
          {/*<h2 className="banner-heading">Role</h2>
          <p className="banner-text">
            User Research · User Flows ·  Wireframes · Usability Testing ·
            Visual Design
        </p> */}
        </Col>
      </Row>
    </Container>
  </div>
)

export default CREDBanner
