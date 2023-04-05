import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Button, 
  Input, 
  Title, 
  Subtitle, 
  Background, 
  Form, 
  Link,
  Spacer 
} from '../components/ui/all'

export const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard')
  }

  return (
    <Background color='#242731'>
      <Form onSubmit={handleSubmit}>
        <Title>Welcome</Title>
        <Spacer height={12} />
        <Subtitle>Welcome! Please enter your details</Subtitle>
        <Spacer height={43} />
        <Input placeholder="Name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} />
        <Spacer height={12} />
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
        <Button type="submit">Sign up</Button>
        <Spacer height={43} />
        <Subtitle>Or<Link to="/login"> Log in</Link>
        </Subtitle>
      </Form>
    </Background>
  )
}
