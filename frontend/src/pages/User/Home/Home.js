import React, { useEffect, useState } from 'react';
import { slideImageheader,slideImageCourses } from '../../../components/SlideShow/slideImages';
import Slideshow from '../../../components/SlideShow/Slideshow';
import { Container, Box, BoxTitle, BoxText,BoxHeader,Homebutton ,H4} from '../../../components/styled/Home.styled';
import { useSelector } from 'react-redux';
import Homecard from '../../../components/Card/Homecard';
import HomecardGraphics from '../../../components/Card/HomecardGraphics';
import { useHistory } from 'react-router-dom';


export default function Home(props) {
  // const redirect = props.location.state.redirect;
  const [redirect,setRedirect] = useState("");
  const history = useHistory();
   const  {  errorDataGuest,services } = useSelector((state) =>  state.fetchAllDataGuestReducer);
   const  {  errorIllustratorDataGuest, guestIllustratorData } = useSelector((state) =>  state.fetchIllustratorDataGuestReducer);
    const lorem =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, sed iure blanditiis voluptatum nulla quidem minus quam tempora obcaecati necessitatibus inventore! Vitae totam quam pariatur facilis fugit maxime adipisci eaque.";
 


const data = [
    {
      id: Math.random(),
      title: "Box titulo 1",
      text: lorem,
      bgColor: "#D5CAFA"
    },
    {
      id: Math.random(),
      title: "Box titulo 2",
      text: lorem,
      bgColor: "#EDA9A9"
    },
    {
      id: Math.random(),
      title: "Box titulo 3",
      text: lorem,
      bgColor: "#F2EE8D"
    },
    {
      id: Math.random(),
      title: "Box titulo 4",
      text: lorem,
      bgColor: "#9FEACD"
    }
  ];

  useEffect(()=>{
    if(props.location.state?.redirect){
      setRedirect(props.location.state.redirect)
    }
  },[])

  useEffect(()=>{
    // console.log({redirect})
    if(redirect){
      history.push(`${redirect}`)
    }
  },[redirect])

    return (
      <>
      
      
      <Container style={{'width':'100%','height':'100%'}}> 
     
        <BoxHeader><H4>Hi Where's</H4>
        <p style={{'font-size':'15px'}}>Post Services for your buisness</p>
        <a href={'/addService'}><Homebutton>Post A Service</Homebutton></a>
        </BoxHeader>
 
        <Slideshow slideimage={slideImageheader}/>
        </Container>
        <BoxTitle>Continue browsing </BoxTitle>
        <Container style={{'display':'flex','flex-wrap':'wrap','width':'100%','height':'100%','margin-top':'1rem'}}>
        

        {services && services.length>0 && services.map(guest => (
         
  

            <Homecard services={guest}/>
             

      
          
        ))}
     
     
       
      </Container>
    
      <Container style={{'width':'100%','height':'100%','display':'block','padding':'1rem'}}>
      <Slideshow slideimage={slideImageCourses}/>
    
      </Container>
      
      <Container style={{'display':'flex','flex-wrap':'wrap','width':'100%','height':'100%','margin-top':'1rem','background':'#e4e5e7'}}>
        <Container style={{'display':'flex','flex-wrap':'wrap','width':'100%','height':'100%','margin-top':'1rem','background':'#e4e5e7'}}>
      <BoxTitle style={{"margin-right":"auto"}}>Beautiful illustrations, handpicked for you </BoxTitle>
      </Container>
      {guestIllustratorData && guestIllustratorData.guestIllustratorData && guestIllustratorData.guestIllustratorData.data.length>0 && guestIllustratorData.guestIllustratorData.data.map(guest => (      
         <>
        <HomecardGraphics services={guest}/>
         </>   
    ))}
    </Container>
      </>
    );
}
