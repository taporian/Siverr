import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { URL_Image } from '../../components/URL';
import Popup from '../../components/Popup/Popup';
import './service.css';
import Contact from '../../components/Contact/Contact';
import {  BoxTitle, Container } from '../../components/styled/Home.styled';
import HomecardService from '../../components/Card/HomecardService';
import { getCommentsGuest,postCommentUser } from '../../redux/action-creators';
import ReactStars from "react-rating-stars-component";
import Order from '../../components/Order/Order';
import { ErrorPForm } from '../../components/styled/Form.style';


export default function Service() {
    const {id} = useParams();
    const disptach = useDispatch()
    const  {  errorDataGuest,services } = useSelector((state) =>  state.fetchAllDataGuestReducer);
    const [service,Setservice]=useState('');
    const [buttonPopupContact,setButtonPopupContact] = useState(false);
    const [buttonPopupOrder,setButtonPopupOrder] = useState(false);
    const [rating, setRating] = useState("");
    const [comment,Setcomment]=useState('');
    const ratingChanged = (newRating) => {
        setRating(newRating);
      };
    
    useEffect(()=>{
        disptach(getCommentsGuest(id))
    },[disptach])

   

   useEffect(()=>{
  
    services && services.map((ser)=>{
 
        if(id===ser.id.toString()){
          
           return Setservice(ser);
            
        }

       })
        
   });
 
  

   const  {  ErrorGetComments,commentsData } = useSelector((state) =>  state.getCommentsGuestReducer);
   const  {  ErrorComment } = useSelector((state) =>  state.postCommentUserReducer);
   
    return (
        <>
     {console.log('ErrorGetComments',ErrorGetComments)}
        <div className='service-container' >
               
            <div className='service-left-inner'>
           <div className='service-left-title'> {service.title}</div>
           <div className='service-left-average'>
           <h6 className='service-left-h6'>{service && service.user.name }</h6>
           {commentsData && commentsData.data ?
             <div className='service-left-average'>
           <h6 className='service-left-h6'>
               {<ReactStars  value={commentsData?.average} isHalf={true} activeColor="#FFB33D" edit={false}/> } <span style={{'color':'#FFB33D'}}>{commentsData?.average}</span> {'('+commentsData?.count+')'} </h6> 
        
           </div>
           : 
           <div className='service-left-average'>
           <h6 className='service-left-h6'>
               {<ReactStars  value={ErrorGetComments.average} isHalf={true} activeColor="#FFB33D" edit={false}/> }<span style={{'color':'#FFB33D'}}>{ErrorGetComments.average}</span>  {'('+ErrorGetComments?.count+')'}
               </h6> 
               </div>
           }
           </div>
           
           <div className='service-left-image-container'>
           <img className='service-left-image' src={URL_Image+service.image} alt={service.title} />
           </div>
           <div className='service-left-title'> About This Gig</div>
           <div className='service-left-description-container'>
           <span  className='service-left-description'>{service.description}</span>
           </div>
           <BoxTitle >Recommended for you</BoxTitle>
           <Container style={{'margin-right':'auto','margin-left':'1rem','backgroundColor':'#E4E5E7','display':'flex','border':'1px solid #FAFAFA'}}>
        
          
           {/* {services && services.length>0 && services.sort(() => 0.5 - Math.random()).slice(0,2).map(guest => (   */}
            {services && services.length>0 && services.slice(0,2).map(guest => (      
         <>
        
        <HomecardService services={guest}/>
         </>   
    ))}
   
    </Container>
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
           
           <div className='service-comment-container'>
           
               <div className='inner-post-comment'>
                   <div className='service-star-container'>
               
               <ReactStars
                    value={rating}
                    count={5}
                    onChange={ratingChanged}
                    size={20}
                    isHalf={true}
                  
                         activeColor="#FFB33D"
                 />  
                 </div>
                   <div className='inner-service-textarea'>
                
                  
                           
                <textarea placeholder='leave a comment' value={comment} className='service-textarea' onChange={(event)=>Setcomment(event.target.value)}/>
              
                <button className='service-comment-button' onClick={()=>{
                         Setcomment("");
                         setRating("");
                    disptach(postCommentUser({service_id:id,rating:rating,post:comment}))
               
                    }}>Post</button>
                 {console.log('rating',rating,'comment',comment)}
                </div>
          
                </div>
              
                {commentsData && commentsData.data && commentsData?.data.map(comment=>(
                    <>
                    <hr style={{'width':'100%'}}/>
                   
                    <div className='service-comment-username' > <ReactStars  value={comment.rating} isHalf={true} activeColor="#FFB33D" edit={false}/> {comment.users.name}</div>
                <div className='service-comment-section'>{comment.post}</div>
                </>
               ))}
                <hr style={{'width':'100%'}}/>
           </div>
         
        </>
    ) 
}
