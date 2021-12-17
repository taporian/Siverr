import React,{useState} from 'react';
import { Table } from '../components/Table';
import { ButtonInvisible, RejectService ,AcceptService,CancelService} from './styled/Button';
import Popup from './Popup/Popup';
import { URL_Image } from './URL';
import { InputFormTxt,TextareaForm } from './styled/Form.style';
import { acceptServiceAdmin,rejectServiceAdmin } from '../redux/action-creators';
import { useDispatch } from "react-redux";
export default function TableList({serviceData,errors}) {
const [buttonPopup,setButtonPopup] = useState(false);
const [popdata,sePopData]=useState('');
const [rejectdisabled,SetrejectDisabled]=useState(false);
const [reason_for_rejection,setReasonForRejection]=useState('');
const dispatch = useDispatch();


    return (
        <>
       
   { errors ? 
   
   <Table key={0}>
   <Table.Head>
     <Table.TR >
       <Table.TH  >Message</Table.TH>
       </Table.TR>
  </Table.Head>
  <Table.Body>
  <Table.TR >
  <Table.TH  style={{"color":"black","background":"white"}}>{errors.message}</Table.TH>
  </Table.TR> 
  </Table.Body> 
  </Table>

   
   :
  
        <Table key={0}>
           
  <Table.Head>
    <Table.TR key={0}>
      <Table.TH  >User</Table.TH>
      <Table.TH>Service Title</Table.TH>
      <Table.TH>Category</Table.TH>
      <Table.TH>SubCategory</Table.TH>
      {serviceData[0].reason_for_rejection &&  <Table.TH>Reason for Rejection</Table.TH> }
    </Table.TR>
  </Table.Head>

  <Table.Body>
  
{serviceData  && serviceData.map((serviceList,index) => (
   <>
 
     <Table.TR key={index}>
      <Table.TH >
        <ButtonInvisible onClick={()=>{
         setButtonPopup(true);
         sePopData(serviceList);
       
    }}>
      {serviceList.user && serviceList.user.name}</ButtonInvisible></Table.TH> 


      <Table.TH>{serviceList.title}</Table.TH>
   {serviceList.subcategories ? <Table.TH>{serviceList.subcategories.categories.name}</Table.TH> : <Table.TH>null</Table.TH> }
    {serviceList.subcategories ? <Table.TH>{serviceList.subcategories.name}</Table.TH> : <Table.TH>null</Table.TH>    } 
    {serviceList.reason_for_rejection && <Table.TH>{serviceList.reason_for_rejection}</Table.TH> }
    
    </Table.TR> 
    {console.log(popdata)}
   { serviceList && popdata && popdata.user &&  
   <Popup  trigger={buttonPopup} setTrigger={setButtonPopup} >
     
        <div className="blog-inner">
            <div className="blog-slider pt-200">
                <div className="blog-slider__item ">
                    <div className="blog-slider__img">
                  { popdata &&  <img alt={`${popdata.title}`} className="finbyz-zoomin pic-service" src={URL_Image+popdata.image} title={`${popdata.title}`}/>}
                    </div>
                    <div className="blog-slider__content">
                    <div className="blog-slider__title finbyz-fadeinup">{'User '+popdata.user.name}</div>
                  { popdata.subcategories && popdata.subcategories.status_subcategory === 0 && popdata.subcategories.name? <div className="blog-slider__title finbyz-fadeinup">{'Pending SubCategory: '+popdata.subcategories.name}</div> :<div className="blog-slider__title finbyz-fadeinup">{popdata && popdata.subcategories && 'Subcategory: '+popdata.subcategories.name}</div> }
                  { popdata.subcategories && popdata.subcategories.categories.status_category === 0 && popdata.subcategories.categories.name? <div className="blog-slider__title finbyz-fadeinup">{'Pending Category: '+popdata.subcategories.categories.name}</div> :<div className="blog-slider__title finbyz-fadeinup"> {popdata && popdata.subcategories && popdata.subcategories.categories && 'Category: '+popdata.subcategories.categories.name }  </div> }
                  <div className="blog-slider__title finbyz-fadeinup">{'Price: '+popdata.price+'$'}</div>
                { popdata && popdata.description && <div className="blog-slider__text finbyz-fadeinup">{!rejectdisabled&& <p >{popdata.description}</p>}
                    </div>}   
                    {!rejectdisabled && popdata && popdata.status_service === '0' && popdata.reason_for_rejection == null ?  <RejectService onClick={()=>{
                      SetrejectDisabled(true);
                    }}>Reject</RejectService> : ''}
                    {!rejectdisabled && popdata && popdata.status_service === '0' && popdata.reason_for_rejection == null ?  <AcceptService onClick={()=>{
                      setButtonPopup(false);
                      dispatch(acceptServiceAdmin(popdata.id))}}>Accept</AcceptService>  : ''}
                      {rejectdisabled ?<><p style={{'color':'black'}}>Reason for rejection</p><InputFormTxt onChange={(event)=>{
                        setReasonForRejection(event.target.value)
                      }} /> 
                      <RejectService onClick={()=>{
                            dispatch(rejectServiceAdmin({reason_for_rejection:reason_for_rejection},popdata.id));
                            SetrejectDisabled(false);
                            setButtonPopup(false);
                      }}>Send</RejectService></> : ''}
                    {rejectdisabled ?   <CancelService onClick={()=>{
                          SetrejectDisabled(false);
                       
                      }}>Cancel</CancelService> : ''}

                    </div>
               
       
            </div>
            
        </div>   
               
    </div>
   
   </Popup>}
      </>         
          ))} 
  </Table.Body> 
  
        </Table>
}

      

</>
    )
}
