import * as React from 'react'

import { User } from '../interfaces'

type ListDetailProps = {
  item: User
}

const ListDetail = ({ item: user }: ListDetailProps): React.ReactElement => (
  <div>
    <h1>
      Detail for
      {user.name}
    </h1>
    <p>
      ID:
      {user.id}
      repos:
      {user.repos}
    </p>
  </div>
)

export default ListDetail
