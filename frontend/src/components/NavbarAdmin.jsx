import React from "react";
import { NavbarContainer,Text, InputContainer,Icon,Input } from "./styled/NavbarAdmin.styled";
import { FiSearch } from "react-icons/fi";
function NavbarAdmin() {
  return (
    <NavbarContainer>
      <Text>
        Good morning,
        <span> Kishan</span>
      </Text>
      <InputContainer>
        <Icon>
          <FiSearch />
        </Icon>
        <Input type="text" placeholder="Search for projects" />
      </InputContainer>
    </NavbarContainer>
  );
}



export default NavbarAdmin;