import { Container, FormField, Button, Form } from 'semantic-ui-react'
import './Login.css'
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  return (
    <Container className="container">
      <p>
        <a className="help" href="https://www.lipsum.com/feed/html">Need help?</a>
      </p>
      <div className="main">
        <div className="slogan">
          <img src="/car.png" alt="car_logo" width="150px" height="150px" />
          <span>India´s first waterless car cleaning company</span>
        </div>
        <div className="form">
          <h1 className="formTitle">Log in</h1>
          <Form>
            <FormField 
              className="formField"
              error={{
                content: 'Please enter a valid email address',
                pointing: 'below',
              }}>
              <label>Email</label>
              <input placeholder='joe@email.com' name="email" />
            </FormField>
            <FormField className="formField">
              <label>Password</label>
              <input placeholder='Enter your Password' name="password"/>
            </FormField>
            <FormField>
            <p className="forgot" onClick={() => navigate('/password')}>
              forgot password?
            </p>
            </FormField>
            <Button type='submit'>Login</Button>
          </Form>
        </div>
      </div>
    </Container>
  )
}
