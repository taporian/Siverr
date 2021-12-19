import React,{useState,useEffect} from 'react'
import { Table } from '../TableUser'
import { StyledButton } from '../styled/Button';
import { Box, BoxText, BoxTitle, Container } from '../styled/Home.styled';
import { RejectService,AcceptService } from '../styled/Button';
import Popup from '../Popup/Popup';
import { InputFormTxt } from '../styled/Form.style';
import { useDispatch } from 'react-redux';
import { acceptOrderUser,rejectOrderUser } from '../../redux/action-creators';

export default function RecivedOrderPendingList({recievedOrderPendingData,errorRecievedOrderPending}) {

  

  const [buttonPopuPAccept,setButtonPopupAccept]=useState(false);
  const [buttonPopuPReject,setButtonPopupReject]=useState(false);
  const [price,SetPrice]=useState(false);
  const [actionData,SetactionData]=useState([]);
  const dispatch=useDispatch();
  
    return (
       <>
       {console.log('inside',errorRecievedOrderPending)}
       {!errorRecievedOrderPending ?
       <Table key={0} >
   <Table.Head>
     <Table.TR >
       <Table.TH  >Service</Table.TH>
       <Table.TH  >Price</Table.TH>
       <Table.TH  >Buyer</Table.TH>
       <Table.TH  >Buyer's Email</Table.TH>
       <Table.TH  >Buyer's Phone</Table.TH>
       <Table.TH  >Accept</Table.TH>
       <Table.TH  >Reject</Table.TH>
       </Table.TR>
  </Table.Head>
  
   <Table.Body>
   {recievedOrderPendingData.length>0 && recievedOrderPendingData.map((pending)=>(
     <>
   <Table.TR >
   <Table.TH  >{pending.service.title}</Table.TH>
   <Table.TH  >{'$'+pending.price}</Table.TH>
   <Table.TH  >{pending.users.name}</Table.TH>
   <Table.TH >{pending.users.email}</Table.TH>
   <Table.TH  >{pending.users.phone}</Table.TH>
   <Table.TH  ><StyledButton buttonLabel="✓" backgroundColor="#01bf41"  backgroundColorOnHover="green"
                        onClick={()=>{SetactionData(pending);SetPrice(pending.price);setButtonPopupAccept(true);}}>✓
                        </StyledButton></Table.TH>
   <Table.TH><StyledButton  buttonLabel="X"  backgroundColor="#e50d0d" 
                        onClick={()=>{SetactionData(pending);setButtonPopupReject(true);
                                   
                        }
                  } >X</StyledButton>

   </Table.TH>
   </Table.TR> 
  
   
   </>
   ))}
    <Popup  trigger={buttonPopuPAccept} setTrigger={setButtonPopupAccept}  >
                      <Container>
                    <Box style={{'margin':'auto'}}>
                      {console.log('action',actionData)}
                      {actionData &&
                      <>
                      <BoxTitle style={{'margin':'auto'}}> {actionData?.service?.title}</BoxTitle>
                      <BoxText style={{'fontSize':'1rem','fontWeight':'bold'}}>Update price:<InputFormTxt defaultValue={actionData.price} value={price} onChange={(event)=>{event.preventDefault() ;SetPrice(event.target.value)}}/></BoxText>
                      {console.log('price',price)}
                      <AcceptService onClick={()=>{
                        dispatch(acceptOrderUser({id:actionData.id,price:price}));
                        setButtonPopupAccept(false);
                      }}>Accept</AcceptService>
                      </>
                      }
                     
                    </Box>
                    </Container>
                     
                           </Popup>   
<Popup  trigger={buttonPopuPReject} setTrigger={setButtonPopupReject}  >
<Container>
                    <Box style={{'margin':'auto'}}>
                      {console.log('action',actionData)}
                      {actionData &&
                      <>
                      <BoxTitle style={{'margin':'auto','textAlign':'center'}}> Are you sure you want to reject the order ?</BoxTitle>
                      
  
                      <AcceptService style={{'margin-left':'auto','width':'100%','margin-right':'-1.2rem'}}
                      onClick={()=>{dispatch(rejectOrderUser(actionData.id))}}
                      
                      >Yes</AcceptService>
                      <RejectService onClick={()=>setButtonPopupReject(false)}>No</RejectService>
                      </>
                      }
                     
                    </Box>
                    </Container>     
                            </Popup> 
   </Table.Body> 
  
 
  </Table>

  :
<>
  <Table key={0}>
 <Table.Head>
 <Table.TR >
   <Table.TH  >Message</Table.TH>
   </Table.TR>
</Table.Head>
<Table.TR> 
 <Table.TH  >{errorRecievedOrderPending.message}</Table.TH>
 </Table.TR> 
 </Table>

 </>
   }
       </>
    )
}
