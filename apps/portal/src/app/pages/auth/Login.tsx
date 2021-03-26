import React from 'react'
import * as yup from 'yup'
import { Formik } from 'formik'
import { Container, Form, Row, Col, Button } from 'react-bootstrap-v5'

const schema = yup.object().shape({
  email: yup.string().email("Enter Valid Email").required(),
  password: yup.string().required().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
})

function FormExample() {
  return (
    <Formik
      validationSchema={schema}
      onSubmit={alert}
      initialValues={{
        email: 'Mark',
        password: 'Otto',
      }}
    >
      {({ handleSubmit, handleChange, handleBlur, values, touched, isValid, errors }) => (
        <form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationFormik01">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                isValid={touched.email && !errors.email}
              />
              <span className="text-danger" >{touched.email && errors.email && <div>{errors.email}</div>}</span>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationFormik02">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                isValid={touched.password && !errors.password}
              />
              <span className="text-danger" >{touched.password && errors.password && <div>{errors.password}</div>}</span>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Button type="submit">Login</Button>
        </form>
      )}
    </Formik>
  )
}

const Login = () => {
  return (
    <Container>
      <FormExample />
    </Container>
  )
}

export default Login
