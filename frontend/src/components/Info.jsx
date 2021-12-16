import React from "react";
import Badge from "./Badge";
import {InfoCard, Card,CardContent,Row,Digit,InfoContainer,Title,SubTitle} from './styled/Info.styled'
function Info() {
  return (
    <InfoCard>
      <Card>
        <CardContent>
          <Row>
            <Digit>98</Digit>
            <InfoContainer>
              <Title>Rank</Title>
              <SubTitle>In top 20%</SubTitle>
            </InfoContainer>
          </Row>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Row>
            <Digit>32</Digit>
            <InfoContainer>
              <Title>Projects</Title>
              <SubTitle>8 this month</SubTitle>
            </InfoContainer>
          </Row>
          <Row justify>
            <Badge content="mobile app" glow />
            <Badge content="branding" glow />
          </Row>
        </CardContent>
      </Card>
    </InfoCard>
  );
}



export default Info;