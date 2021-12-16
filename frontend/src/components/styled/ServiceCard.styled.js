import styled from "styled-components";
import { cardShadow, hoverEffect, themeColor } from '../../utils';

export const YourProjects = styled.button`
  height: 70%;
  background-color: white;
  border:none;
  
  margin: 0;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: ${cardShadow};
  transition: 0.3s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
    background-color:#6100D4;
    color:white;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    height: max-content;
    width: 75%;
    margin-top: 1rem;
  }
`;

export const Project = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.3rem;
  
`;
export const Avatar = styled.div`
  img {
    height: 4rem;
    width: 4rem;
    border-radius: 4rem;
  }
`;
export const Detail = styled.div`
  margin-left: 1rem;
`;
export const Title = styled.h3`
  font-size:1.2rem;
  font-weight: 500;
  /* font-size:20px; */
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    font-size: 1rem;
  }
`;
export const SubTitle = styled.h5`
  font-weight: 300;
`;
export const AllProjects = styled.h5`
  text-align: end;
  color: ${themeColor};
  cursor: pointer;
`;