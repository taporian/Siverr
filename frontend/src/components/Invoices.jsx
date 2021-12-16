import React from "react";

import Badge from "./Badge";
import AvatarImage from "../assets/avatarImage5.jpeg";
import AvatarImage2 from "../assets/avatarImage6.jpeg";
import {InvoicesContainer, CardContent,Invoice,Info,Avatar,TextContainer,Title,SubTitle,Container,Price} from '../components/styled/Invoices.styled';

function Invoices() {
  return (
    <InvoicesContainer>
      <CardContent>
        <Invoice>
          <Info>
            <Avatar>
              <img src={AvatarImage} alt="" />
            </Avatar>
            <TextContainer>
              <Title>Alexander Williams</Title>
              <SubTitle>ABC Holdings</SubTitle>
            </TextContainer>
          </Info>
          <Container>
            <Badge content="Paid" paid />
            <Price>$ 1,200.87</Price>
          </Container>
        </Invoice>
        <Invoice>
          <Info>
            <Avatar>
              <img src={AvatarImage2} alt="" />
            </Avatar>
            <TextContainer>
              <Title>John Philips</Title>
              <SubTitle>Inchor Associates</SubTitle>
            </TextContainer>
          </Info>
          <Container>
            <Badge content="Late" late />
            <Price>$ 1,200.87</Price>
          </Container>
        </Invoice>
      </CardContent>
    </InvoicesContainer>
  );
}



export default Invoices;