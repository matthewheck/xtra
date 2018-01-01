import React from "react"

import {
  Collapse,
  Container,
  Row,
  Col,
  Button
} from 'reactstrap'

const Story = (props) => (
  <Container>
    <Row>
      <Col>
        <h2>{props.title}</h2>
        <h3>{props.subtitle}</h3>
        <hr/>
        {props.body}
        <hr/>
      </Col>
    </Row>
  </Container>
)

export default Story
