import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Formik, FormikValues } from 'formik'
import * as Yup from 'yup'
import classNames from 'classnames'

export function LoginCardView (): React.ReactElement {
  const SignInSchema = Yup.object().shape({
    login: Yup.string()
      .min(2, 'Too Short!')
      .max(10, 'Too Long!')
      .required('Can`t be empty'),
    password: Yup.string()
      .required('Can`t be empty')
  })

  return (
    <Formik
      initialValues={{ login: '', password: '' }}
      validationSchema={SignInSchema}
      onSubmit={(values: FormikValues) => {
        console.log(values)
      }}
    >
      {({ errors, touched, values, handleChange, handleBlur }) => (
        <Form className='border border-2 p-4 rounded-3'>
          <h2>Sign in to SvnLab</h2>
          <Form.Group controlId="formBasicLogin">
            <Form.Label>Login</Form.Label>
            <Form.Control
              type="login"
              name="login"
              onBlur={handleBlur}
              className={classNames('shadow-none', (touched.login && errors.login) ? 'is-invalid' : '')}
              onChange={handleChange}
              value={values.login} />
          </Form.Group>
          {(touched.login && errors.login) ? <div className="mb-3 text-danger">{errors.login}</div> : ''}
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              onBlur={handleBlur}
              className={classNames('shadow-none', (touched.password && errors.password) ? 'is-invalid' : '')}
              onChange={handleChange}
              value={values.password} />
          </Form.Group>
          {(touched.password && errors.password) ? <div className="text-danger">{errors.password}</div> : ''}
          <Button
            variant="primary"
            type="submit"
            className={classNames('mt-3', 'shadow-none', (errors.login ?? errors.password) ? 'disabled' : '')}>
            Sign in
          </Button>
        </Form>
      )}
    </Formik>
  )
};
