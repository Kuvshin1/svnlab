import React from 'react'
import { HeaderView } from '../components/header/header.view'
import { FilesView, RepoItems } from '../components/files/files.view'
import { Col, Container, Row } from 'react-bootstrap'
import { Navigation } from '../components/navigation/navigation.container'

const repoData: RepoItems[] = [
  {
    type: 'FOLDER',
    name: 'fronted',
    lastCommitComment: 'Create files view to HomePage',
    lastChangeAt: Date.parse('2021-11-14 04:11')
  },
  {
    type: 'FILE',
    name: 'Readme.md',
    lastCommitComment: 'update Readme',
    lastChangeAt: Date.parse('2021-11-13 14:55')
  }
]

export default function HomePage (): React.ReactElement {
  return (
    <Container className='m-0 p-0 bg-dark pb-5 vh-100' fluid>
      <Row className={'gx-0'}>
        <HeaderView />
      </Row>
      <Row className={'gx-0'}>
        <Col md={2} className={'border mt-5 ms-3'}>
          <Navigation />
        </Col>
        <Col md={{ offset: 1, span: 7 }}>
          <FilesView data={repoData} />
        </Col>
      </Row>
    </Container>
  )
};
