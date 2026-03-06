import styled from "styled-components";

export const CookieBannerContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.98);
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 1.5rem;
  border-top: 2px solid #81a08a;

  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`;

export const CookieBannerContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const CookieBannerText = styled.div`
  flex: 1;
  color: #333;
  font-size: 0.95rem;
  line-height: 1.5;

  p {
    margin: 0;
    color: #333;
  }

  a {
    color: #81a08a;
    text-decoration: underline;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: #b1c2b6;
    }
  }

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
    text-align: center;
  }
`;

export const CookieBannerButtons = styled.div`
  display: flex;
  gap: 1rem;
  flex-shrink: 0;

  @media screen and (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
`;

export const CookieButton = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 120px;

  @media screen and (max-width: 768px) {
    flex: 1;
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
  }
`;

export const CookieButtonAccept = styled(CookieButton)`
  background-color: #81a08a;
  color: white;

  &:hover {
    background-color: #b1c2b6;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(129, 160, 138, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const CookieButtonReject = styled(CookieButton)`
  background-color: transparent;
  color: #333;
  border: 2px solid #333;

  &:hover {
    background-color: #f5f5f5;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
  }
`;

