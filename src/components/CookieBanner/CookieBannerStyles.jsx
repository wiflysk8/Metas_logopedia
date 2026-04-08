import styled from "styled-components";

export const CookieBannerContainer = styled.div`
  position: fixed;
  bottom: max(0.75rem, env(safe-area-inset-bottom, 0px));
  right: max(0.75rem, env(safe-area-inset-right, 0px));
  left: auto;
  width: auto;
  max-width: min(21rem, calc(100vw - 1.25rem));
  z-index: 1000;
  padding: 0.65rem 0.75rem;
  background-color: rgba(255, 255, 255, 0.98);
  border: 1px solid rgba(129, 160, 138, 0.45);
  border-radius: 10px;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.12);
  contain: layout style paint;

  @media screen and (max-width: 380px) {
    max-width: calc(100vw - 1rem);
    right: 0.5rem;
    bottom: max(0.5rem, env(safe-area-inset-bottom, 0px));
  }
`;

export const CookieBannerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
`;

export const CookieBannerText = styled.div`
  color: #333;
  font-size: 0.75rem;
  line-height: 1.4;

  p {
    margin: 0;
    color: #1a1a1a;
  }

  a {
    color: #3d5a45;
    text-decoration: underline;
    font-weight: 600;
    transition: color 0.3s ease;

    &:hover {
      color: #2f4a38;
    }
  }
`;

export const CookieBannerButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  justify-content: flex-end;
`;

export const CookieButton = styled.button.attrs({ type: "button" })`
  padding: 0.35rem 0.65rem;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  font-size: 0.72rem;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 0;
`;

export const CookieButtonAccept = styled(CookieButton)`
  background-color: #4d6b56;
  color: #ffffff;

  &:hover {
    background-color: #3d5a45;
  }
`;

export const CookieButtonReject = styled(CookieButton)`
  background-color: transparent;
  color: #1a1a1a;
  border: 1px solid #3a3a3a;

  &:hover {
    background-color: #f0f0f0;
  }
`;
