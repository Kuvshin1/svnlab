import React from 'react'
import { NavigationItemViewProps, NavigationView } from './navigation.view'

export function Navigation (): React.ReactElement {
  const navigationData: NavigationItemViewProps[] = [
    {
      title: 'Pull requests',
      count: 10
    },
    {
      title: 'Issues'
    }
  ]
  return (
        <NavigationView
            data={navigationData}
        />
  )
};
