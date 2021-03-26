import React from 'react'
import { Container } from 'react-bootstrap-v5'
import AppNavBar from './AppNavBar'

export const Layout = ({ children }) => {
  return (
    <div>
      <AppNavBar />
      <Container>{children}</Container>
    </div>
  )
}
