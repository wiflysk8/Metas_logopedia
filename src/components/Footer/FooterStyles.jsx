import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: var(--color-backgroundColor);
  padding: 1rem 0;
  color: black;
  text-align: center;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 2rem;
    height: 2rem;
    margin: 0 0.5rem;
    cursor: pointer;
  }
`;

export const LogoWrapper = styled.div`
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
  padding: 1rem 0;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const LeftArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 55%;
  padding-left: 1rem;
`;
