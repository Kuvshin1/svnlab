import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { LoginCardView } from '../components/login/login.view'

export function LoginPage (): React.ReactElement {
  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xl={3} lg={5} md={5} className="mt-5">
          <LoginCardView />
        </Col>
      </Row>
    </Container>
  )
};
