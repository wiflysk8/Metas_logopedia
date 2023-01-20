import styled from "styled-components";

export const LogoContainer = styled.div`
  min-height: 90px;
  min-width: 90px;
  max-width: 110px;

  display: inline-block;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (max-width: 768px) {
    min-height: 100px;
    min-width: 100px;
    max-width: 130px;
    max-height: 130px;
  }
`;
