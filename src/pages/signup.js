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
    <Background color='#242731' jc='center'>
      <Form onSubmit={handleSubmit}>
        <Font $primary>Welcome</Font>
        <Spacer height={12} />
        <Font>Welcome! Please enter your details</Font>
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
        <Font>Or<Link to="/login"> Log in</Link>
        </Font>
      </Form>
    </Background>
  )
}
