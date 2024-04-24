import { Container, Form, Button } from 'semantic-ui-react';

const PasswordScreen: React.FC = () => {

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log('Password restored successfully');
  };

  return (
    <Container text>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h2>Restore password</h2>
        <p>Enter your new password below:</p>

        <Form onSubmit={handleFormSubmit}>
          <Form.Field>
            <label>New passowrd</label>
            <input type="password" placeholder="Enter your new password" required />
          </Form.Field>

          <Form.Field>
            <label>Confirmar Contraseña</label>
            <input type="password" placeholder="Confirm your new password" required />
          </Form.Field>

          <Button type="submit" primary>
            Restore password
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default PasswordScreen;

