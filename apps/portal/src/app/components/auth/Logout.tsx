import React from 'react'
import { Button } from 'reactstrap'
import { useAppStore } from '../../store/index'
import { AppState } from '../../store/interface'

const Logout = () => {
  const { logout } = useAppStore((state: AppState) => state)

  const userLogout = () => {
    // api call
    console.log('logout')
    logout()
  }

  return <Button variant="dark" onClick={userLogout}>Logout</Button>
}

export default Logout
