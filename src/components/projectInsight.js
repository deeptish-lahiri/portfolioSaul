import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import "./layout.css"

const ProjectInsight = () => (
  <div className="projectInsight-cont">
    <Container fluid>
      <Row>
        <Col className="hoverCard" xs={12} md={8} lg={{ span: 5, offset: 1 }}>
          <p>
            Users were familiar with the credit model and knew how it works.
            They like to opt for credit only when they have the ability to pay
            it back. The fear of living in debt was quite obvious.
          </p>
        </Col>
        <Col xs={12} md={8} lg={5}>
          <p>ta da</p>
        </Col>
      </Row>
    </Container>
  </div>
)

export default ProjectInsight
