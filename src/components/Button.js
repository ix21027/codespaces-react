import styled from "styled-components"

export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 0px;
  border: 0px;
  font-family: 'Metropolis', sans-serif;
  font-style: normal;
  font-size: 0.77em;
  width: 400px;
  height: 50px;
  color: #FFFFFF;
  background: #8941FF;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    box-shadow:
      0 0 50px #fff,            
      -5px 0 20px #f0f,        
      5px 0 20px #0ff;
    transition: all 0.2s ease-in-out;
  }
`