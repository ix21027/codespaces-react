import styled from 'styled-components';
import { Font } from './ui/Font';
import { UserLightIcon } from "./ui/icons/userLight";

const HeaderContainer = styled.div`
  height: 59px;
  background-color: ${ ({color}) => color || '#111216' };
  color: '#FFFFFF';
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${ ({p}) => p || '5px 0 28px 0'};
`;

export function Header({color}) {
  return (
    <HeaderContainer color={color}>
      <Font $primary w='100%' size='20px'>DASHBOARD</Font>
      <UserLightIcon/> <Font $primary size='0.8em' ml='12px'> Username </Font>
    </HeaderContainer>
  );
}
