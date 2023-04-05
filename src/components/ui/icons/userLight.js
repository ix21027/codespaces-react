import Icon from './icon'
import styled from'styled-components'
import { Title } from '../all';

const BG = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;

  width: 36px;
  height: 36px;

  background: #242731;
  border-radius: 40px;
`;

const Text = styled(Title)`
  font-size: 0.8em;
  margin-left: 12px;
  font-size: 14px;
  line-height: 20px;
  width: 69px;
  height: 20px;

`

const UserLightIcon = ({ fill, width, height }) => {
  return (
    <BG>
      <Icon width={width||"24"} height={height||"24"} fill={fill} margin='6px'>
        <path d="M19.7274 20.4471C19.2716 19.1713 18.2672 18.0439 16.8701 17.2399C15.4729 16.4358 13.7611 16 12 16C10.2389 16 8.52706 16.4358 7.12991 17.2399C5.73276 18.0439 4.72839 19.1713 4.27259 20.4471" stroke="white" stroke-linecap="round"/>
        <circle cx="12" cy="8" r="4" stroke="white" stroke-linecap="round"/>
      </Icon>  
    </BG>
  );
}

export {UserLightIcon, Text};