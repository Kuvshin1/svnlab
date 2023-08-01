import React from 'react'
import { ListGroup, Badge } from 'react-bootstrap'

export interface NavigationItemViewProps {
    title: string
    count?: number
}

export function NavigationView (props: {
    data: NavigationItemViewProps[]
}): React.ReactElement {
  return (
        <ListGroup className='rounded-0'>
            {
                props.data.map((item, index) => {
                    return (
                        <ListGroup.Item
                            key={index}
                            action href=""
                            className="d-flex border border-secodary border-top-0
                            justify-content-between align-items-start bg-dark text-light">
                            <div className="ms-2 fw-bold me-auto">
                                {item.title}
                            </div>
                            {item.count == null ? (
                                <></>
                            ): (
                                <Badge bg="secondary" pill>
                                    {item.count}
                                </Badge>
                            )}
                        </ListGroup.Item>
                    )
                })
            }
        </ListGroup>
  )
};
