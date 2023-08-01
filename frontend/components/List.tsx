import * as React from 'react'
import { Button } from 'react-bootstrap'
import ListItem from './ListItem'
import { User } from '../interfaces'

type Props = {
  items: User[]
}

const List = ({ items }: Props): React.ReactElement => (
  <ul>
    <Button>Test Bootstrap button</Button>
    {items.map((item) => (
      <li key={item.id}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
)

export default List
