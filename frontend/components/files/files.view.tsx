import React, { useState } from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import 'bootstrap-icons/font/bootstrap-icons.css'
import moment from '../../node_modules/moment'
import classNames from 'classnames'

export interface RepoItems {
  type: fileType
  name: string
  lastCommitComment: string
  lastChangeAt: number
}

type fileType = 'FOLDER' | 'FILE'

const iconByType: Record<fileType, string> = {
  FOLDER: 'bi bi-folder2',
  FILE: 'bi bi-file-earmark'
}

function RepoItemView (props: RepoItems): React.ReactElement {
  const [hover, setHover] = useState('')
  function addHover (): void {
    setHover('bg-secondary')
  }
  function dropHover (): void {
    setHover('')
  }
  return (
        <Row className={classNames('p-3 rounded-0 m-0', hover)} md={2}
            onMouseOut={dropHover}
            onMouseOver={addHover}
        >
            <Col md={'auto'} >
                <i className={iconByType[props.type]} />
            </Col>
            <Col md={3} className={'me-auto text-nowrap'} >
                {props.name}
            </Col>
            <Col md={3} className={'me-auto text-nowrap'} >
                {props.lastCommitComment}
            </Col>
            <Col md={'auto'} className='d-flex justify-content-end'>
                {moment(props.lastChangeAt).fromNow()}
            </Col>
        </Row>
  )
}

export function FilesView (props: { data: RepoItems[] }): React.ReactElement {
  return (
        <Container className='mt-5 rounded-3 bg-dark text-white p-0 border'>
            <Row className='p-2 m-0 rounded-0 bg-secondary border-0 justify-content-between' md={2}>
                <Col md={'auto'}>
                    <Image className="img-fluid " src="/avatar.png" roundedCircle />
                </Col>
                <Col md={'auto'} className='me-auto pt-2'>
                    <a href='' className="link-light deccoration-none">RepoOvner</a>
                </Col>
                <Col md={'auto'} className='pt-2 '>
                    Last commit comment
                </Col>
                <Col md={{ span: 'auto', offset: 2 }} className='pt-2'>
                    Last commit date
                </Col>
                <Col md={{ span: 'auto' }} className='pt-2'>
                    8 commits
                </Col>
            </Row>
            {props.data.map((value: RepoItems) => (
                <RepoItemView
                    key={value.name.toString()}
                    {...value}
                />
            ))}
        </Container>
  )
}
