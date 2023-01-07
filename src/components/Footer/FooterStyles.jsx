import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: var(--color-backgroundColor);
  padding: 3rem 0;
  color: black;
  text-align: center;
  width: 100%;
`;

export const LogoWrapper = styled.div`
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  img {
    width: 2rem;
    height: 2rem;
    margin: 0 0.5rem;
    cursor: pointer;
  }
`;
