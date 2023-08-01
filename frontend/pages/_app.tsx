import React from 'react'
import { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

export default function MyApp ({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
