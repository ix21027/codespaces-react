import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Button, 
  Input, 
  Font,
  Background, 
  Form, 
  Link,
  Spacer 
} from '../components/ui/all'

export const LogIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard')
  }

  return (
    <Background color='#242731'>
      <Form onSubmit={handleSubmit}>
        <Font $primary>Welcome back</Font>
        <Spacer height={12} />
        <Font>Welcome back! Please enter your details</Font>
        <Spacer height={43} />
        <Input type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} />
        <Spacer height={12} />
        <Input type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <Spacer height={37} />
        <Button type="submit">Log in</Button>
        <Spacer height={43} />
        <Font>Or<Link to="/signup"> Sign up</Link>
        </Font>
      </Form>
    </Background>
  )
}
