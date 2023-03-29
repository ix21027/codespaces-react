import { useState } from 'react';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Title, Subtitle } from '../components/Text';
import { LogInContainer } from '../components/LogInContainer';
import { Form } from '../components/Form';

import styled from "styled-components";
// import { Link } from'react-router-dom';
import Spacer from "../components/Spacer"

export const LogIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle sign in logic
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
        <Subtitle>Or <Link> Sign up</Link>
          {/* <Link to="/signup">Sign Up</Link> */}
        </Subtitle>
      </Form>
    </LogInContainer>
  )
}


const Link = styled.a`
  color: #78B4ED;
`