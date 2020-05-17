import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Image from "react-bootstrap/Image"

const ProjectArticleCenter = () => (
  <div className="articleBG-red">
    <Container>
      <Row>
        <Col xs={12} md={8} lg={{ span: 11, offset: 1 }}>
          <div className="article-center-cont">
            <h2 className="banner-heading">Problem Statement</h2>
            <h3 className="article-heading">
              75% customer drop off rate on payment page
            </h3>
            <p className="article-text">
              Businesses were losing out on sales since customers were bouncing
              off from the payment page.
            </p>
            <h3 className="article-heading">Low purchasing power</h3>
            <p className="article-text">
              In India, Credit card penetration is as low as 0.66 per capita
              which minimized the spending ability of shoppers drastically.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
)

export default ProjectArticleCenter
