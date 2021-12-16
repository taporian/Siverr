
import styled from "styled-components";
import { DropdownButton,Dropdown } from "react-bootstrap";
export const MenuLink = styled.a`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #7b7d84;
  font-weight:bold;
  transition: all 0.3s ease-in;
  font-size: 0.9rem;
  &:hover {
    color: #18a563;
  }
`;

export const DropButton = styled.div`
#dropdown-basic-button{

  background-color:#16A663;
  border:none;
  transition:ease-in 0.2;
  &:hover{
    background-color:#3EB074;
  }
}


`;

export const Nav = styled.div`
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: white;
  top: 0;
  left: 0;
  right: 0;
  position: initial;
  z-index: 1030;
`;

export const Logo = styled.a`
  padding: 1rem 1rem;
  color: #404145;
  text-decoration: none;
  font-weight: 1000;
  font-size: 2rem;
  font-family:Arial Black;
  letter-spacing: -2.5px;
  &:hover{
    color: #404145;
  }
  span {
   
    font-weight: 400;
    font-size: 1.5rem;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  padding: 10px; 
  
  
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? "18.75rem" : "0")};
    transition: max-height 0.3s ease-in;
    width: 100%;
  }
`;

export const NavDropDown = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: black;
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 768px) {
    display: flex;
  }
`;

export  const MenuLinkRoute = styled.a`
padding: 10px 0;
cursor: pointer;
text-align: center;
text-decoration: none;
color: #7b7d84;
width:100%;
font-size: 0.9rem;
&:hover {
  color: #7b7d84;
  border-bottom:3px solid #1dc172 !important;
}
`;
export const LogoFooter = styled.p`

  color: #404145; 
  font-weight: 500;
  font-size: 1.5rem;
  font-family:Arial Black;
  letter-spacing: -2.5px;
 
`;