import styled from "styled-components"

export const Font = styled.p`
  font-family: 'Metropolis', sans-serif;
  font-weight: 300;
  font-size: ${({$primary, size}) => size || ($primary ? '40px' : '0.77em')};
  line-height: ${({lh}) => lh || '40px'};
  margin: ${({m}) => m || '0 0 0 0'};
  color:  ${( {$primary, c} ) => c || ($primary ? '#FFFFFF' : '#9496A6') };
  width: ${({w}) => w};
  margin-top: ${({mt}) => mt};
  margin-left: ${({ml}) => ml};
`