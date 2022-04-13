import React from "react"
import Helmet from "react-helmet"
import { Container, Row, Col, Image, Button } from "react-bootstrap"

export default function Layout(props, { children }) {
  return (
    <>
      <Helmet>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>SimonSaysHello</title>
      </Helmet>
      <header>
        <Container className="mt-3">
          <Row>
            <Col className="d-flex flex-column" xs={8} md={6}>
              <h6 className="text-secondary mb-2">{props.dateString}</h6>
              <h2 className="text-black">{props.pageTitle}</h2>
            </Col>
            <Col className="d-flex justify-content-end align-self-center">
              <Image src='/profilepic2021.jpg' alt="Simon Schueller" roundedCircle className="profileImg"></Image>
            </Col>
          </Row>
        </Container>
      </header>
      <main>{children}</main>
    </>
  )
}