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

  div {
    display: flex;
    gap: 1rem;
  }
  @media screen and (max-width: 768px) {
    span {
      width: 80%;
      text-align: left;
      padding-left: 1rem;
      letter-spacing: 2px;
    }
    div {
      flex-direction: column;
    }
  }
`;

export const TeamImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 45%;
  object-fit: cover;
  margin-bottom: 1rem;

  p {
    margin: 0;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 12px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 4rem;
  }
`;

export const TeamMember = styled.div`
  width: 35%;
  @media screen and (max-width: 768px) {
    width: 75%;
  }
`;
