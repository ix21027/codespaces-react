import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Button, 
  Input, 
  Title, 
  Subtitle, 
  LogInContainer, 
  Form, 
  Link,
  Spacer 
} from '../components/comps'

export const LogIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('dashboard')
  }

  return (
    <LogInContainer>
      <Form onSubmit={handleSubmit}>
        <Title>Welcome back</Title>
        <Spacer height={12} />
        <Subtitle>Welcome back! Please enter your details</Subtitle>
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
        <Subtitle>Or<Link to="/signup"> Sign up</Link>
        </Subtitle>
      </Form>
    </LogInContainer>
  )
}
