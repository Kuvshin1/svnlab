import Link from 'next/link'
import React from 'react'
import { Row, Col, Image, InputGroup, FormControl, Button } from 'react-bootstrap'

export function HeaderView (): React.ReactElement {
  return (
        <Row className='pt-2 pb-2 bg-dark'>
            <Col md={1} >
                <Col md={{ span: 5, offset: 5 }} >
                    <Image src="/elephant_icon46.png" roundedCircle />
                </Col>
            </Col>
            <Col md={3}>
                <InputGroup className='pt-1'>
                    <FormControl
                        placeholder="Search"
                        aria-label="Recipient's username"
                        className="shadow-none"
                    />
                    <Button variant="secondary" className="shadow-none" >
                        <i className='bi bi-search'></i>
                    </Button>
                </InputGroup>
            </Col>

            <Col md={{ span: 1, offset: 6 }}>
                <Col md={{ offset: 11 }} >
                    <Link href='/'>
                        <i className="text-white bi bi-box-arrow-right fs-3" ></i>
                    </Link>
                </Col>
            </Col>
            <Col md={1}>
                <Col md={{ span: 5, offset: 3 }}>
                    <Image src="/avatar.png" roundedCircle />
                </Col>
            </Col>
        </Row >
  )
}
