import React, { useEffect } from 'react'
import {MdOutlinePendingActions} from "react-icons/md";
import { BsCheckLg } from 'react-icons/bs';
import { ImCross } from 'react-icons/im';
import { useSelector } from 'react-redux';
export default function SubMenuDashboardService({handleRecievedPendingData,handleRecievedAcceptedData,handleRecievedRejectedData,
    handlePendingData,handleAcceptedData,handleRejecteddData,handleServicePendingData,handleServiceAcceptedData,handleServiceRejectedData}) {
  
      
      

    const  {  errorMyServicePending,myServicePendingData } = useSelector((state) =>  state.fetchAllMyPendingServiceUserReducer);
    const  {  errorMyServiceAccepted,myServiceAcceptedData } = useSelector((state) =>  state.fetchAllMyAcceptedServiceUserReducer);
    const  {  errorMyServiceRejected,myServiceRejectedData } = useSelector((state) =>  state.fetchAllMyRejectedServiceUserReducer);
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
           {console.log('jejej',myServiceRejectedData)}
      
           <div style={{'backgroundColor':'#7DCEA4'}} className="s-sidebar__nav-link a-user-dashboard"
           onClick={()=>{

            handleRecievedPendingData('');
            handleRecievedAcceptedData('');
            handleRecievedRejectedData('');

               handleAcceptedData('');
               handleRejecteddData('');
               handlePendingData('');

               handleServicePendingData(myServicePendingData,errorMyServicePending);
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
               handleRecievedAcceptedData('');
               handleRecievedRejectedData('');

               handleServicePendingData('');
               handleServiceAcceptedData(myServiceAcceptedData,errorMyServiceAccepted);
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
            handleRecievedRejectedData('');

            handleServicePendingData('');
            handleServiceAcceptedData('');
            handleServiceRejectedData(myServiceRejectedData,errorMyServiceRejected)
        }}
        
        >
        <ImCross className="icons-dashboard"/><em className='em-user-dashboard'>Rejected</em>
      
        </div>
     </li>
    
          </>
    )
}
