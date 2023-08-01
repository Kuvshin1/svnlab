import React from 'react'
import Link from 'next/link'

import { User } from '../interfaces'

type Props = {
  data: User
}

const ListItem = ({ data }: Props): React.ReactElement => (
  <Link href="/users/[id]" as={`/users/${data.id}`}>
    <a>
      {data.id}
      :
      {data.name}
      :
      {data.repos[0]}
      :
      {data.repos[1]}
    </a>
  </Link>
)

export default ListItem
