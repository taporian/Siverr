import styled from "styled-components";
import { cardShadow, hoverEffect, themeColor } from '../../utils';

export const InfoCard = styled.div`
  height: 100%;
  width: 14rem;
  background-color: white;
  border-radius: 1rem;
  padding: 1rem;
  color: white;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 80%;
  }
`;

export const Card = styled.div`
  background-color: rgba(183, 194, 243, 0.3);
  border-radius: 1rem;
  margin-bottom: 1rem;
`;

export const CardContent = styled.div`
  padding: 0.7rem 1rem 0.3rem 1rem;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.4rem;
  ${({ justify }) =>
    justify &&
    `
      justify-content:space-around;
      width:90%
  `}
`;
export const Digit = styled.div`
  background-color: ${themeColor};
  padding: 0.8rem 1rem;
  font-size: 1.3rem;
  border-radius: 1rem;
`;
export const InfoContainer = styled.div`
  margin-left: 0.7rem;
`;
export const Title = styled.h3`
  color: black;
`;
export const SubTitle = styled.h5`
  color: #333333;
  font-weight: normal;
`;