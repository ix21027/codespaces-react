import styled from 'styled-components';

const Icon = styled.svg`
  width: ${props => props.width || '1.5em'};
  height: ${props => props.height || '1.5em'};
  fill: ${props => props.fill || 'none'};
  viewBox:  ${props => props.viewBox ||  '0 0 25 24'};
`;

export default Icon;