import styled from "styled-components"

export const Background = styled.div`
  height: 100vh;

  width: 100%;
  display: ${({display}) => display || 'inline-flex'};
  justify-content: ${({jc}) => jc || 'center'};
  gap: ${({gap}) => gap || '1em'};
  &::before {
    content: "";
    position: fixed;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: ${({color}) => color };
  }
  // margin: 0px;
  // padding: 0px;
  // background-color: ${({color}) => color };
  // overflow: hidden;
  // width: 100%;
  // display: ${({display}) => display || 'inline-flex'};
  // justify-content: ${({jc}) => jc || 'center'};
  // gap: ${({gap}) => gap};
`;