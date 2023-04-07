import styled from "styled-components";

export const Tile = styled.div`
  background: ${({ bg }) => bg || '#242731'};
  width: ${({ width }) => width || '100%'};
  min-height: 104px;
  height: ${({ height }) => height};
  border-radius: ${({ radius }) => radius || '8px'};
  flex-grow: ${({ flexGrow }) => flexGrow || '1'};
  display: flex;
  align-items: ${({ alignItems }) => alignItems};
  justify-content: flex-start;
  flex-basis: ${({ basis }) => basis || ''};
`;
