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

  @media screen and (max-width: 768px) {
    img {
      width: 1.5rem;
      height: 1.5rem;
    }
    padding: 0;
    width: 100%;
  }
`;

export const LogoWrapper = styled.div`
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  @media screen and (max-width: 768px) {
    padding-bottom: 2rem;
    flex-direction: row;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 0;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
    font-weight: 600;
    width: 100%;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-left: 1rem;
  @media screen and (max-width: 768px) {
    padding-left: 1rem;
  }

  div {
    display: flex;
    flex-direction: column;
  }
`;

export const LeftArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 55%;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0;
    flex-direction: column;
    padding: 0;
  }
`;

export const SocialWrapper = styled.div`
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding-bottom: 2rem;
  }
`;
