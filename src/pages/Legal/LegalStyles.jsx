import styled from "styled-components";

export const LegalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  margin-top: 8%;
  margin-bottom: 2rem;
  padding: 2rem;

  @media screen and (max-width: 768px) {
    margin-top: 34%;
    padding: 1rem;
  }
`;

export const LegalContent = styled.div`
  max-width: 800px;
  width: 100%;
  text-align: left;
  line-height: 1.6;

  h1 {
    font-size: 2rem;
    font-weight: 900;
    margin-bottom: 2rem;
    color: #b1c2b6;
    text-align: center;

    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
    color: #333;

    @media screen and (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

