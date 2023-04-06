import styled from 'styled-components';

const Flex = styled.div`
  display: ${({display}) => display || 'flex'};
  justify-content: ${({jc}) => jc || 'center'};
  margin-right: ${({mr}) => mr};
  padding: 1.25em;
  gap: ${({gap}) => gap || '1.3em'};
  padding: ${({padding}) => padding || '0'};
  width: 100%;
  flex-direction: ${({direction}) => direction || 'row'};
  align-items: flex-start;
  flex-wrap: ${({$wrap}) => $wrap && 'wrap'};
`;

export default Flex;