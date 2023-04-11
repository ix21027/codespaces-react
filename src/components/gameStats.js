import Flex from './ui/Flex';
import { Font } from './ui/Font';
import { Tile } from "./ui/Tile";


export function GameStatsRow() {
  return (
    <Flex gap='1em' padding='16px 0 0 0 '>
      <Tile radius='4px' basis='79%' height='344px'>
        <Font $primary m='24px 0 0 32px' w='82.5%' size='18px' lh='24px'>Game Stats</Font>
        <Font m='26px 0 0 32px' size='12px' lh='16px'>Data type</Font> 
      </Tile>
      <Tile radius='4px' basis='25.66%' height='344px'>
        <Font $primary m='24px 0 0 32px' w='42.5%' size='18px' lh='24px'>Game Stats</Font>
        <Font m='26px 0 0 32px' size='12px' lh='16px'>Location</Font> 
      </Tile>
    </Flex>
  );
}



   
