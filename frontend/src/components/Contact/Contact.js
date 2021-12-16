import React,{useEffect, useState} from 'react'
import '../Block/Block.css';
import { useDispatch,useSelector } from "react-redux";
import { contactSeller } from '../../redux/action-creators';
export default function Contact({service}) {

    // const  {  contactError } = useSelector((state) =>  state.contactSellerReducer);
    const [contactSellerMessage,SetContactSellerMessage]=useState('');
    const [contactSellerID,SetcontactSellerID]=useState(0);
    
    useEffect(() => {
        SetcontactSellerID(service.user_id);
      
      }, []);
    
    
    const dispatch = useDispatch();
    const onSubmit=  ()=>{
       
        const body={
            "user_id":Number(localStorage.getItem('USER-ID')),
            "contact_seller":contactSellerMessage,
            "user_id_service":contactSellerID
        }
            console.log(body)
        dispatch(contactSeller(body));
    }
    return (
        <div>
            {console.log('contact',service)}
            <div className="container">           
        <div className="blog-inner">
            <div className="blog-slider pt-200">
                <div className="blog-slider__item ">
                    <div className="blog-slider__img">
                    <img alt="Maintenance" className="finbyz-zoomin" src="https://finbyz.tech/files/content.svg" title="Maintenance"/>
                    </div>
                    <div className="blog-slider__content">
                    <div className="blog-slider__title finbyz-fadeinup">{'Contact seller: '+service.user.name}</div>
                    <div className="blog-slider__text finbyz-fadeinup"><textarea className='contact-seller-textarea'  onChange={(event)=>SetContactSellerMessage(event.target.value)}/>
                  
                    </div>
                    <button className='contact-seller-button' onClick={()=>onSubmit()} >Submit</button>
                    {/* {console.log('contactError',contactError)}
                    {contactError && contactError} */}
                    </div>
                    
                </div>
            </div>
        </div>                     
    </div>
        </div>
    )
}
