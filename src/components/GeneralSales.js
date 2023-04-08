import Flex from './ui/Flex';
import { Font } from './ui/Font';
import { Tile } from "./ui/Tile";
import { InfoIcon } from './ui/icons/InfoIcon';
import { SettingsIcon } from './ui/icons/SettingsIcon';


export function GeneralSales() {
  return (
    <Flex gap='16px' padding='16px 0 0 0 '>
      <Tile radius='4px' height='344px'>
        <Font $primary m='24px 0 0 32px'  size='18px' lh='24px'>
          General Sales / Time 
        </Font> 
        <InfoIcon m='24px 12px '/>
        <SettingsIcon m='24px 9px 0 1330px'/>
        <Font m='26px 0 0 0' size='13px' lh='20px'>
          Table settings
        </Font> 
        
      </Tile>
    </Flex>
  );
}



   
