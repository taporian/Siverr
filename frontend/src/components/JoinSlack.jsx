import React from "react";
import { FaSlack } from "react-icons/fa";
import {JoinChannel,CardContent,Slack,SlackFoot,SlackLogo,SlackText,SlackHead,SlackJoin} from '../components/styled/JoinSlack.styled'
function JoinSlack() {
  return (
    <JoinChannel>
      <CardContent flex={true}>
        <Slack>
          <SlackLogo>
            <FaSlack />
          </SlackLogo>
          <SlackText>
            <SlackHead>Engage with clients</SlackHead>
            <SlackFoot>Join slack channel</SlackFoot>
          </SlackText>
        </Slack>
        <SlackJoin>Join Now</SlackJoin>
      </CardContent>
    </JoinChannel>
  );
}



export default JoinSlack;