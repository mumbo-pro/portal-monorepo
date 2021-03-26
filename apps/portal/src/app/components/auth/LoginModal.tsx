import React, { useState, useEffect, FormEvent } from 'react'
import { Button, Modal, Form } from 'react-bootstrap-v5'

import { AppState } from '../../store/interface'
import { useAppStore } from '../../store/index'

function LoginModal() {
  const [modal, setModal] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { setUser } = useAppStore((state: AppState) => state)

  const toggle = () => {
    setModal((modal) => !modal)
  }

  const login = (user) => {
    console.log('login APi call here')
  }
  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const user = { email, password }
    login(user)
    setUser(user)
  }

  return (
    <>
      <Button variant="secondary" onClick={toggle}>
        Login
      </Button>

      <Modal show={modal} onHide={toggle}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                className="mb-3"
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                className="mb-3"
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" variant="dark" className="mt2" onClick={toggle}>
              Login
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default LoginModal
