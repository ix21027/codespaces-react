import styled from 'styled-components';
import { Title } from './ui/Text';
import { UserLightIcon, Text } from "./ui/icons/userLight";

const HeaderContainer = styled.div`
  height: 59px;
  background-color: ${ ({color}) => color || '#111216' };
  color: '#FFFFFF';
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0 28px 0;
`;

export function Header({color}) {
  return (
    <HeaderContainer color={color}>
      <Title w='100%' size='20px'>DASHBOARD</Title>
      <UserLightIcon/> <Text> Username </Text>
    </HeaderContainer>
  );
}
