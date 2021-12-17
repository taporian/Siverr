import React,{useEffect, useState} from 'react'
import '../Block/Block.css';
import { ErrorPForm } from '../styled/Login.styled';
import {useForm} from 'react-hook-form';
import { useDispatch,useSelector } from "react-redux";
import { postOrder } from '../../redux/action-creators';
import orderPicture from '../../assets/Thank-you-for-your-order.jpeg';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
export default function Order({service}) {
    const dispatch = useDispatch();
    const schema = yup.object().shape({
        description_order: yup.string().required("You must fill a description order"),
       
      })
      const {
        register,
        handleSubmit,
        formState: { errors },
       
      } = useForm({ resolver: yupResolver(schema) });

    const  {  postOrderError,postOrderData } = useSelector((state) =>  state.postOrderReducer);
    
    const [contactSellerID,SetcontactSellerID]=useState(0);
    const [price,Setprice]=useState(0);
    const [service_id,SetserviceId]=useState(0);

    
    useEffect(() => {
        SetcontactSellerID(service.user_id);
        Setprice(service.price);
        SetserviceId(service.id);
      
      }, []);
    
    
console.log('order service',service);
    const onSubmit=  (d)=>{
       
        const body={
            user_id:Number(localStorage.getItem('USER-ID')),
            description_order:d.description_order,
            user_id_service:contactSellerID,
            price:price,
            service_id:service_id,
        }
          console.log('body order',body)
        dispatch(postOrder(body));
    }
    return (
        <div>

         
            <div className="container">           
        <div className="blog-inner">
            <div className="blog-slider pt-200">
                <div className="blog-slider__item ">
                    <div className="blog-slider__img">
                    <img alt="Maintenance" className="finbyz-zoomin" src={orderPicture} title="Maintenance"/>
                    </div>
                    <div className="blog-slider__content">
                    <div className="blog-slider__title finbyz-fadeinup">{'Order Title: '+service.title}</div>
                    <h6 className="blog-slider__title finbyz-fadeinup h6-order">Send a small description of your order</h6>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="blog-slider__text finbyz-fadeinup"><textarea className='contact-seller-textarea'  {...register("description_order")}/>
                   <ErrorPForm>{errors.description_order?.message}</ErrorPForm> 
                   <ErrorPForm>{postOrderError && postOrderError.message_sent}</ErrorPForm> 
                    </div>
                    <input type='submit' value='Order' />
                    </form>
                    </div>
                    
                </div>
            </div>
        </div>                     
    </div>
        </div>
    )
}
