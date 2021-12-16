import styled from 'styled-components';

export const ButtonInvisible = styled.button`

background: transparent;
    border: none !important;
    color: #b3b7c2;
    font-size: 1em;
    font-weight: bold;
    letter-spacing: .2em;
    text-transform: uppercase;
   
    &:hover{
       background:hsl(225, 41%, 13%); 
       color:white;
       width:100%;
       height:100%;
       border-radius:5px;
    }  

`;

export const ButtonClose = styled.button`
z-index: 1000;
background: transparent;
    border: none !important;
    color: #b3b7c2;
    font-size: 1em;
    font-weight: bold;
    letter-spacing: .2em;
    text-transform: uppercase;
    transition: 0.1s ease-in-out;
    &:hover{
       
       color:black;
       
    } 

`;

export const AcceptService = styled.button`
background-color: green;
  color: white;
  padding: 10px 18px;
  border: none;
  float:right;
  margin-right:-1.0rem;
margin-top:2.2rem;
  margin-top:2.2rem;

  border-radius:0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #069961;
            }
            @media  (max-width: 600px) {
    width: 100%;
        margin-top: 0;
      }

`
export const RejectService = styled.button`
background-color: #bf0b0b;
  color: white;
  padding: 10px 18px;
  border: none;
  border-radius: 4px;
    float:right;
  cursor: pointer;
  margin-top:2.2rem;
  margin-left:1.2rem;
  margin-right:-1.2rem;
border-radius:0.5rem;

  &:hover {
    background-color: red;
            }
            @media  (max-width: 600px) {
    width: 100%;
        margin-top: 0;
      }

`

export const CancelService = styled.button`
background-color: green;
  color: white;
  padding: 10px 18px;
  border: none;
  float:right;
  margin-right:-1.0rem;
margin-top:2.2rem;
  margin-top:2.2rem;

  border-radius:0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #069961;
            }
            @media  (max-width: 600px) {
    width: 100%;
        margin-top: 0;
      }

`