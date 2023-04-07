import Flex from "./ui/Flex";
import { Font } from "./ui/Font";
import { IconBG } from "./ui/icons/IconBG";
import { Tile } from "./ui/Tile";

export function Info({ icon, title, subtitle, bg }) {
  return (
    <Tile alignItems='center'>
      <IconBG bg={bg}>{icon}</IconBG>
      <Flex gap='0.4em' direction='column' mr='20px'>
        <Font $primary mt='3px' size='44px'>{title}</Font>
        <Font size='13px' lh='16px'>{subtitle}</Font>
      </Flex>
    </Tile>
  );
}
