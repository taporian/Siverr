import React from "react";
import { RiHomeLine, RiFileCopyLine } from "react-icons/ri";
import { FaWallet } from "react-icons/fa";
import { AiOutlinePieChart } from "react-icons/ai";
import Badge from "./Badge";
import AvatarImage from "../assets/avatarImage.png";
import {Container,ProfileContainer,Avatar,Name,LinksContainer,Links,Link,ContactContainer} from '../components/styled/Sidebar.styled'

function Sidebar() {
  return (  
    <Container>
      <ProfileContainer>
        <Avatar src={AvatarImage} />
        <Name>Kishan Sheth</Name>
        <Badge content="Pro Level" />
      </ProfileContainer>
      <LinksContainer>
        <Links>
          <Link>
            <RiHomeLine />
            <h3>Dashboard</h3>
          </Link>
          <Link>
            <RiFileCopyLine />
            <h3>Projects</h3>
          </Link>
          <Link>
            <FaWallet />
            <h3>Invoices</h3>
          </Link>
          <Link>
            <AiOutlinePieChart />
            <h3>Reports</h3>
          </Link>
        </Links>
        <ContactContainer>
          <span>Having troubles?</span>
          <a href="#">Contact us </a>
        </ContactContainer>
      </LinksContainer>
    </Container>
  );
}



export default Sidebar;