import styled from "styled-components";
import { MetodologyWrapper } from "../Metodology/MetodologyPageStyles";

export const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 7%;
  @media (max-width: 768px) {
    margin-top: 36%;
  }
`;

export const StyledImageContainer = styled.div`
  margin-top: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
  object-fit: cover;
  margin-bottom: 3rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 768px) {
    width: 100%;
    height: 220px;
    margin-bottom: 1rem;
  }
`;

export const StyledQuote = styled.div`
  position: absolute;
  top: 40%;
  left: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: 600;
  color: white;
  text-align: center;
  margin-top: 2%;
  @media (max-width: 768px) {
    font-size: 12px;
    left: 35%;
  }
`;

export const StyledDescription = styled(MetodologyWrapper)`
  margin-top: 3rem;
  p {
    margin: 10px;
    text-align: left;
  }
  strong {
    font-weight: 800;
  }
`;
