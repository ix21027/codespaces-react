import styled from 'styled-components';

import Flex from './ui/Flex';
import {Title} from './ui/Text';
import { Tile } from "./ui/Tile";
import { Header } from './header';

export function GameStatsRow() {
  return (
    <Flex padding='16px 0 0 0 '>
      <Tile>
        <Flex direction='column' mr='20px'>
          <Header color='#242731' />
        </Flex>
      </Tile>
    </Flex>
  );
}



   
