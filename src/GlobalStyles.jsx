import styled from "styled-components";

export const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100%;

  @media screen and (max-width: 768px) {
    position: static;
    bottom: 0px;
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
  color: black;
  padding: 0;
  margin: 0;
  text-align: center;
`;
