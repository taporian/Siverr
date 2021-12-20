import React, { useEffect } from 'react'
import {MdOutlinePendingActions} from "react-icons/md";
import { BsCheckLg } from 'react-icons/bs';
import { ImCross } from 'react-icons/im';
import { useSelector } from 'react-redux';
export default function SubMenuDashboardRecieved({handleRecievedPendingData,handleRecievedAcceptedData,handleRecievedRejectedData,
    handlePendingData,handleAcceptedData,handleRejecteddData,handleServicePendingData,handleServiceAcceptedData,handleServiceRejectedData}) {
  
      

    const  {  errorRecievedPendingOrder,receivedPendingOrderData } = useSelector((state) =>  state.fetchAllRecievedPendingOrderUserReducer);
    const  {  errorRecievedAcceptedOrder,receivedAcceptedOrderData } = useSelector((state) =>  state.fetchAllRecievedAcceptedOrderUserReducer);
    const  {  errorRecievedRejectedOrder,receivedRejectedOrderData } = useSelector((state) =>  state.fetchAllRecievedRejectedOrderUserReducer);
   
   //  useEffect(()=>{
   //    handleRecievedPendingData();
   //    handleRecievedAcceptedData();
   //    handleRecievedRejectedData();
   //  },[])

   //  useEffect(()=>{
   
   //  },[receivedPendingOrderData])


    return (
        <>
       
        <li>
         
           <div style={{'backgroundColor':'#7DCEA4'}} className="s-sidebar__nav-link a-user-dashboard"
           onClick={()=>{

            handleRecievedPendingData(receivedPendingOrderData,errorRecievedPendingOrder);
            handleRecievedAcceptedData('');
            handleRecievedRejectedData('');

               handleAcceptedData('');
               handleRejecteddData('');
               handlePendingData('');

               handleServicePendingData('');
               handleServiceAcceptedData('');
               handleServiceRejectedData('');
            }}
           >
           <MdOutlinePendingActions className="icons-dashboard"/><em className='em-user-dashboard'>Pending</em>
           </div>
        </li>
        <li>
           
        <div style={{'backgroundColor':'#7DCEA4'}} className="s-sidebar__nav-link a-user-dashboard" 
        onClick={()=>{
            handleAcceptedData('');
               handleRejecteddData('');
               handlePendingData('');

               handleRecievedPendingData('');
               handleRecievedAcceptedData(receivedAcceptedOrderData,errorRecievedAcceptedOrder);
               handleRecievedRejectedData('');

               handleServicePendingData('');
               handleServiceAcceptedData('');
               handleServiceRejectedData('');
        
        }}
        >
        <BsCheckLg className="icons-dashboard"/><em className='em-user-dashboard'>Accepted</em>
      
        </div>
     </li>
     <li>
        <div style={{'backgroundColor':'#7DCEA4'}} className="s-sidebar__nav-link a-user-dashboard"
         onClick={()=>{
            handleAcceptedData('');
            handleRejecteddData('');
            handlePendingData('');

            handleRecievedPendingData('');
            handleRecievedAcceptedData('');
            handleRecievedRejectedData(receivedRejectedOrderData,errorRecievedRejectedOrder);

            handleServicePendingData('');
            handleServiceAcceptedData('');
            handleServiceRejectedData('');
        }}
        
        >
        <ImCross className="icons-dashboard"/><em className='em-user-dashboard'>Rejected</em>
      
        </div>
     </li>
    
          </>
    )
}
