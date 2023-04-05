import Flex from "./ui/Flex";
import { Subtitle, Title } from "./ui/Text";
import { IconBG } from "./ui/icons/IconBG";
import { Tile } from "./ui/Tile";

export function Info({ icon, title, subtitle, bg }) {
  return (
    <Tile>
      <IconBG bg={bg}>{icon}</IconBG>
      <Flex gap='0.4em' direction='column' mr='20px'>
        <Title mt='3px' size='44px'>{title}</Title>
        <Subtitle size='13px'>{subtitle}</Subtitle>
      </Flex>
    </Tile>
  );
}
