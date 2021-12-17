import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { URL_Image } from '../../components/URL';
import Popup from '../../components/Popup/Popup';
import './service.css';
import Contact from '../../components/Contact/Contact';
import HomecardGraphics from '../../components/Card/HomecardGraphics';
import Homecard from '../../components/Card/Homecard';
import { Container } from '../../components/styled/Home.styled';
import HomecardService from '../../components/Card/HomecardService';
import Order from '../../components/Order/Order';
export default function Service() {
    const {id} = useParams();
    const  {  errorDataGuest,services } = useSelector((state) =>  state.fetchAllDataGuestReducer);
    const [service,Setservice]=useState('');
    const [buttonPopupContact,setButtonPopupContact] = useState(false);
    const [buttonPopupOrder,setButtonPopupOrder] = useState(false);
    


   useEffect(()=>{
    services && services.map((ser)=>{
 
        if(id===ser.id.toString()){
          
           return Setservice(ser);
            
        }

       })
        
   })
  
   
    return (
        <>
      
        <div className='service-container' >
               
            <div className='service-left-inner'>
           <div className='service-left-title'> {service.title}</div>
           <h6 className='service-left-h6'>{service && service.user.name}</h6>
           <div className='service-left-image-container'>
           <img className='service-left-image' src={URL_Image+service.image} alt={service.title} />
           </div>
           <div className='service-left-title'> About This Gig</div>
           <div className='service-left-description-container'>
           <span  className='service-left-description'>{service.description}</span>
           </div>
                 
            </div>
            <div className='service-right-inner'  >
                <div className='checkout-container-right'>
                <div className='checkout-title-right'>
                Starting
                </div>
                <div className='checkout-price-right'>
                {'$'+service.price}
                </div>
                <button className='checkout-button-right' onClick={()=>setButtonPopupOrder(true)} >Continue {'($'+service.price+')'}</button>
                </div>
                <div className='contact-seller-container-right'>
                <button onClick={()=>setButtonPopupContact(true)} className='contact-seller-button-right'>Contact Seller</button>
                
                </div>
            </div>      
        </div>
        <Popup  trigger={buttonPopupContact} setTrigger={setButtonPopupContact}  >
           <Contact service={service}/>  
            </Popup> 

            <Popup  trigger={buttonPopupOrder} setTrigger={setButtonPopupOrder}  >
           <Order service={service}/>  
            </Popup> 
            <Container style={{'margin-right':'auto'}}>
                
            {services && services.length>0 && services.sort(() => 0.5 - Math.random()).slice(0,2).map(guest => (      
         <>
        
        <HomecardService services={guest}/>
         </>   
    ))}
    </Container>
        </>
    ) 
}
