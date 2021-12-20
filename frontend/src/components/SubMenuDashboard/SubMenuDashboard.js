import React from 'react'
import {MdOutlinePendingActions} from "react-icons/md";
import { BsCheckLg } from 'react-icons/bs';
import { ImCross } from 'react-icons/im';
import { useSelector } from 'react-redux';
export default function SubMenuDashboard({handlePendingData,handleAcceptedData,handleRejecteddData,handleRecievedPendingData,handleRecievedAcceptedData,handleRecievedRejectedData,handleServicePendingData,handleServiceAcceptedData,handleServiceRejectedData}) {
  

    const  {  errorMyPendingOrder,myPendingOrderData } = useSelector((state) =>  state.fetchAllMyPendingOrderUserReducer);
    const  {  errorMyAcceptedOrder,myAcceptedOrderData } = useSelector((state) =>  state.fetchAllMyAcceptedOrderUserReducer);
    const  {  errorMyRejectedOrder,myRejectedOrderData } = useSelector((state) =>  state.fetchAllMyRejectedOrderUserReducer);

    
    return (
        <>
       
        <li>
    
           <div style={{'backgroundColor':'#7DCEA4'}} className="s-sidebar__nav-link a-user-dashboard"
           onClick={()=>{
               handlePendingData(myPendingOrderData,errorMyPendingOrder);
               handleAcceptedData('');
               handleRejecteddData('');

               handleRecievedPendingData('');
               handleRecievedAcceptedData('');
               handleRecievedRejectedData('');

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
            handlePendingData('');
            handleAcceptedData(myAcceptedOrderData,errorMyAcceptedOrder);
            handleRejecteddData('');

            handleRecievedPendingData('');
            handleRecievedAcceptedData('');
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
            handlePendingData('');
            handleAcceptedData('');
            handleRejecteddData(myRejectedOrderData,errorMyRejectedOrder);

            handleRecievedPendingData('');
            handleRecievedAcceptedData('');
            handleRecievedRejectedData('');

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
