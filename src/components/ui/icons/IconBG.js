import styled from "styled-components";

export const IconBG = styled.div`
  display: flex;
  padding: 12px;
  margin: 20px 22px 36px 20px ;
  width: 24px;
  height: 24px;
  background: ${({ bg }) => bg};
  border-radius: 8px;
`;
