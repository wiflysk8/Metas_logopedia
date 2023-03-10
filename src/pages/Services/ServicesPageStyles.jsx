import styled from "styled-components";

export const StyledServices = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h2 {
    font-size: 2rem;
    font-weight: 900;
    margin-bottom: 4rem;
    color: #b1c2b6;
    text-align: center;
  }
  p {
    font-size: 1.3rem;
    font-weight: 500;
    width: 60%;
    margin-bottom: 2rem;
    line-height: 1.5;
    text-align: center;
  }
  h4 {
    font-size: 1.2rem;
    font-weight: 900;
    margin-bottom: 4rem;
    color: #b1c2b6;
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    margin-top: 34%;
    h2 {
      font-size: 2rem;
    }
    padding-bottom: 2rem;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 400px;
  gap: 1rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
  span {
    font-size: 1.3rem;
    tex-align: center;
    color: #b1c2b6;
    font-weight: 500;
  }
  @media screen and (max-width: 768px) {
    width: 80%;
    align-self: center;
  }
`;

export const ImagesWrapper = styled.div`
  display: flex;
  gap: 2rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  margin: 0 100px;
  @media screen and (max-width: 768px) {
    width: 100%;
    align-self: center;
    flex-direction: column;
  }
`;

export const ContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  position: relative;
  gap: 1rem;
  align-self: flex-start;
  h3 {
    font-size: 1rem;
    font-weight: 900;
    letter-spacing: 8px;
    background-color: #f5f5f5;
    padding: 0.2rem 0;
    width: 70%;
    text-align: center;
    margin-bottom: 1rem;
  }
  ul {
    display: list-item;
    align-self: flex-start;
  }
  li {
    flex-direction: column;
    margin-bottom: 1rem;
    list-style: square;
    display: list-item;
  }
  div {
    margin-bottom: 3rem;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media screen and (max-width: 768px) {
    width: 100vw;
    div {
      width: 84%;
    }
    h3 {
      letter-spacing: 1px;
      text-align: center;
      padding: 0.5rem 2rem;
      padding: 4px 5rem;
      width: 100%;
    }
  }
`;
