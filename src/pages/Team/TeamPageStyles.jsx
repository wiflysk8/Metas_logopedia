import styled from "styled-components";

export const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 2rem;
  @media screen and (max-width: 768px) {
    margin-top: 34%;
  }
  h2 {
    font-size: 2rem;
    font-weight: 900;
    margin-bottom: 2rem;
    color: #b1c2b6;
  }
  span {
    font-size: 1.3rem;
    font-weight: 500;
    width: 60%;
    margin-bottom: 2rem;
    line-height: 1.5;
    text-align: center;
  }

  strong {
    font-weight: 900;
  }

  @media screen and (max-width: 768px) {
    span {
      width: 80%;
      text-align: left;
      padding-left: 1rem;
      letter-spacing: 2px;
    }
  }
`;

export const TeamImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  flex: 1;
  object-fit: cover;
  margin-bottom: 1rem;

  strong {
    margin-top: 1rem;
    text-align: center;
  }

  p {
    margin: 0;
    margin-top: 0.5rem;
    text-align: center;
  }

  img {
    width: 100%;
    max-width: 100%;
    height: auto;
    border-radius: 12px;
    object-fit: cover;
    aspect-ratio: 3/4;
    display: block;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 4rem;
  }
`;

export const TeamMember = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  width: 60%;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 75%;
  }
`;
