import React from "react";

import NavbarAdmin from "./NavbarAdmin";
import Earnings from "./Earnings";
import Info from "./Info";
import JoinSlack from "./JoinSlack";
import ProjectRecommendation from "./ProjectRecommendation";
import ServiceCard from "./ServiceCard";
import Invoices from "./Invoices";
import {Container,SubContainer,SectionOne,ColumnOne1,ColumnOne2,ColumnTwo1,ColumnTwo2,TitleText,SectionTwo,InvoiceContainer} from '../components/styled/MainContent.styled'
function MainContent() {
  return (
    <Container>
      <NavbarAdmin />
      <SubContainer>
        <SectionOne>
          <ColumnOne1>
            <Earnings />
            <Info />
          </ColumnOne1>
          <ColumnTwo1>
            <TitleText>Your Projects</TitleText>
            <ServiceCard />
          </ColumnTwo1>
        </SectionOne>
        <SectionTwo>
          <ColumnOne2>
            <InvoiceContainer>
              <TitleText>Recent Invoices</TitleText>
              <Invoices />
            </InvoiceContainer>
            <JoinSlack />
          </ColumnOne2>
          <ColumnTwo2>
            <TitleText>Recommended Project</TitleText>
            <ProjectRecommendation />
          </ColumnTwo2>
        </SectionTwo>
      </SubContainer>
    </Container>
  );
}



export default MainContent;