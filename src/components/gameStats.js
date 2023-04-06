import styled from 'styled-components';

import Flex from './ui/Flex';
import {Title} from './ui/Text';
import { Tile } from "./ui/Tile";
import { Header } from './header';

export function GameStatsRow() {
  return (
    <Flex gap='16px' padding='16px 0 0 0 '>
      <Tile radius='4px' basis='79%'>
        
      </Tile>
      <Tile radius='4px' basis='25.66%'>
       
      </Tile>
    </Flex>
  );
}



   
