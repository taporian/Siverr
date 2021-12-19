import styled from "styled-components";
import px2vw from "../../utils/px2vw";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
 
  margin-top: ${px2vw(32)};
  margin-right: ${px2vw(32)};
  max-width: 100%;
  
  @media (min-width: 1024px) {
  
    flex-wrap: nowrap;
  }
  @media screen and (max-width: 962px) {
    display:block;
   
  .home-card {
    display: block;
  }
`;

export const Box = styled.div`
  display: flex;
 
  width: ${px2vw(320, 320)};
  min-height: ${px2vw(200, 320)};
  flex-direction: column;
  padding: ${px2vw(20)};
  margin: ${px2vw(20)};
  background-color: ${props => props.bgColor};
  height: 100%;
  

  @media (min-width: 768px) {
    width: ${px2vw(320, 768)};
    min-height: ${px2vw(200, 768)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: ${px2vw(500)};
    min-height: ${px2vw(300)};
    height: 100%;
  }
`;


export const BoxTitle = styled.h3`
  color: #333;
  font-weight:800;
  font-size: 2rem;
  margin-top:1.5rem;
  margin-left:4.5rem;
  margin-bottom:0;
  font-family:"arial";
  

  
  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;
export const BoxHeader = styled.div`
background-color:#FAFAFA;
align-self: center;
  color: #333;
  font-size: 2rem;
  text-align: center;
  flex:0.8;
  border:1.5px solid #efeff0;
  width:100%;
  padding:2.7rem 0 2.7rem 0;
  margin-left:2%;
  margin-right:2%;
  height:100%;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;
export const H4 = styled.h4`

font-weight:700;



`;

export const BoxText = styled.p`
  margin-top: ${px2vw(20)};
  color: #666;
  font-size: 1.5rem;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;

export const Homebutton = styled.button`

background-color: white;
border:1px solid #18A563 ;
color: #18A563;  
cursor: pointer;
border-radius:0.2rem;
padding:0.5rem 0.2rem 0.5rem 0.2rem;
width:80%;
height:100%;
font-size:15px;
font-weight:600;
  &:hover {
    background-color: #18A563;
    color:white;
            }
            @media  (max-width: 600px) {
    width: 100%;
        margin-top: 0;
      }
      `;
