import React from "react";

import AvatarImage from '../assets/avatarImage2.jpeg';
import AvatarImage2 from '../assets/avatarImage3.jpeg';
import {YourProjects,Project,Avatar,Detail,Title,SubTitle,AllProjects} from './styled/ServiceCard.styled'
import { useDispatch } from "react-redux";
import {Table} from './Table';
import AdminDashboard from '../pages/Admin/Dashboard/AdminDashboard';

function ServiceCard({servicesText,fetchServices,icon,state}) {
  const dispatch = useDispatch();
  
  return (
    <div>
    <YourProjects onClick={()=>{
      if(typeof fetchServices === "function"){
        dispatch(fetchServices());
        dispatch(state());
      }
      
    }}>
      {icon}
      <Project>
        {/* <Avatar>
          <img src={AvatarImage} alt="" />
        </Avatar> */}

         <Title >{servicesText} </Title> 
          {/* <SubTitle>1 day remaining</SubTitle> */}
         

      </Project>
      {/* <Project> */}
        {/* <Avatar>
          <img src={AvatarImage2} alt="" />
        </Avatar> */}
        {/* <Detail>
          <Title>Personal branding project</Title>
          <SubTitle>5 days remaining</SubTitle>
        </Detail> */}
      {/* </Project> */}
     
      {/* <AllProjects><center>See all projects</center></AllProjects> */}

      
    </YourProjects>

    
    {/* {serviceData && serviceData.map(data =>(
      <div>
            <div>{data.id}</div>
            <div>{data.user.name}</div>
            </div>
          ))} */}
    </div>
  );
  
}



export default ServiceCard;