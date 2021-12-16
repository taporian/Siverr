import React from "react";

import Badge from "./Badge";
import AvatarImage from "../assets/avatarImage4.jpeg";
import {RecommendProject,CardContent,Detail,InfoContainer,Avatar,Info,InfoName,InfoUpdate,Title,ProjectInfo,PriceContainer,Price} from '../components/styled/ProjectRecommendation.styled'

function ProjectRecommendation() {
  return (
    <RecommendProject>
      <CardContent>
        <Detail>
          <InfoContainer>
            <Avatar>
              <img src={AvatarImage} alt="" />
            </Avatar>
            <Info>
              <InfoName>Thomas Martin</InfoName>
              <InfoUpdate>Updated 10m ago</InfoUpdate>
            </Info>
          </InfoContainer>
          <Badge content="Design" />
        </Detail>
        <Title>
          Need a designer to form branding essentials for my business.
        </Title>
        <ProjectInfo>
          Looking for a talented brand designer to create all the branding
          materials for my new startup.
        </ProjectInfo>
        <PriceContainer>
          <Price>$8700/month</Price>
          <Badge content="Full Time" clean />
        </PriceContainer>
      </CardContent>
    </RecommendProject>
  );
}



export default ProjectRecommendation;