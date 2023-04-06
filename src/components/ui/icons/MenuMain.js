import { IconBG } from './IconBG';
import Icon from './icon'

export const MenuMain = ({ fill, width, height }) => {
  return (
    <IconBG  h='48px' w='48px' bg='#8941FF' r='40px' margin='18px 18px' padding='0px'>
      <Icon margin='0px' width={width || '48px'} height={height || '48px'} fill={fill}>
        <rect x="15.6666" y="15.7083" width="5.875" height="5.875" rx="0.979167" stroke="white" stroke-width="0.979167" stroke-linecap="round"/>
        <rect x="15.6666" y="25.5" width="5.875" height="5.875" rx="0.979167" stroke="white" stroke-width="0.979167" stroke-linecap="round"/>
        <rect x="25.4584" y="15.7083" width="5.875" height="5.875" rx="0.979167" stroke="white" stroke-width="0.979167" stroke-linecap="round"/>
        <rect x="25.4584" y="25.5" width="5.875" height="5.875" rx="0.979167" stroke="white" stroke-width="0.979167" stroke-linecap="round"/>
      </Icon>
    </IconBG>
  );
}