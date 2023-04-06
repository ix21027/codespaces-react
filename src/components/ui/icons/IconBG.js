import styled from "styled-components";

export const IconBG = styled.div`
  display: flex;
  padding: ${({ padding }) => padding || '12px'};
  margin: ${({ margin }) => margin || '20px 22px 36px 20px'};
  width: ${({ w }) => w || '24px'};
  height: ${({ h }) => h || '24px'};
  background: ${({ bg }) => bg};
  border-radius: ${({ r }) => r || '8px'};
`;
