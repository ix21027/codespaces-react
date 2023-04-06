import styled from 'styled-components';
import { Logo } from './icons/Logo';
import {MenuMain} from './icons/MenuMain';
import {MenuCards} from './icons/MenuCards';
import {MenuProduct} from './icons/MenuProduct';
import {MenuWearTear} from './icons/MenuWearTear';
import {MenuGames} from './icons/MenuGames';
import {MenuSettings} from './icons/MenuSettings';

const SideBarContainer = styled.div`
  width: 90px;
  background-color: #242731;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;


export const Sidebar = () => {
  return (
    <SideBarContainer>
      <Logo/>
      <MenuMain/>
      <MenuCards />
      <MenuProduct />
      <MenuWearTear />
      <MenuGames />
      <MenuSettings />
    </SideBarContainer>
  );
}


