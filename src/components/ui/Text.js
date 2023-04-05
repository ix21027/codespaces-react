import styled from "styled-components"

export const Title = styled.p`
  font-family: 'Metropolis', sans-serif;
  font-style: normal;
  font-weight: 302;
  font-size: ${({size}) => size || '40px'};
  line-height: 40px;
  margin: 0 0 0 0;
  color: #FFFFFF;
  width: ${({w}) => w};
  margin-top: ${({mt}) => mt};
`

export const Subtitle = styled.p`
  font-family: 'Metropolis', sans-serif;
  font-style: normal;
  font-size: ${({size}) => size || '0.77em'};
  font-weigth: 1em;
  color: #9496A6;
  margin: 0 0 0 0;
`