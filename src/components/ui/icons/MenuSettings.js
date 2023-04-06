import { IconBG } from './IconBG';
import Icon from './icon'

export const MenuSettings = ({ fill, width, height }) => {
  return (
    <IconBG  h='48px' w='48px' bg='#191C23' r='40px' margin='8px 18px' padding='0px'>
      <Icon margin='0' width={width || '48px'} height={height || '48px'} fill={fill}>
        <path d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z" fill="#191C23"/>
        <path d="M24 19L32 19" stroke="#7D869E" stroke-linecap="round"/>
        <path d="M16 19L20 19" stroke="#7D869E" stroke-linecap="round"/>
        <path d="M29 29L32 29" stroke="#7D869E" stroke-linecap="round"/>
        <path d="M16 29L24 29" stroke="#7D869E" stroke-linecap="round"/>
        <circle cx="22" cy="19" r="2" transform="rotate(90 22 19)" stroke="#7D869E" stroke-linecap="round"/>
        <circle cx="27" cy="29" r="2" transform="rotate(90 27 29)" stroke="#7D869E" stroke-linecap="round"/>
      </Icon>
    </IconBG>
  );
}