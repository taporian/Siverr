import React,{useState} from 'react'
import {MdOutlinePendingActions} from "react-icons/md";
import { BsCheckLg } from 'react-icons/bs';
import { ImCross } from 'react-icons/im';
import { useSelector } from 'react-redux';
export default function SubMenuDashboard({handlePendingData}) {
  

    const  {  errorMyPendingOrder,myPendingOrderData } = useSelector((state) =>  state.fetchAllMyPendingOrderUserReducer);
    return (
        <>
       
        <li>
            {console.log('myPendingOrderData',myPendingOrderData)}
           <div style={{'backgroundColor':'#7DCEA4'}} className="s-sidebar__nav-link a-user-dashboard"
           onClick={()=>handlePendingData(myPendingOrderData)}
           >
           <MdOutlinePendingActions className="icons-dashboard"/><em className='em-user-dashboard'>Pending</em>
           </div>
        </li>
        <li>
        <div style={{'backgroundColor':'#7DCEA4'}} className="s-sidebar__nav-link a-user-dashboard" 
        onClick={()=>handlePendingData('')}
        >
        <BsCheckLg className="icons-dashboard"/><em className='em-user-dashboard'>Accepted</em>
      
        </div>
     </li>
     <li>
        <div style={{'backgroundColor':'#7DCEA4'}} className="s-sidebar__nav-link a-user-dashboard">
        <ImCross className="icons-dashboard"/><em className='em-user-dashboard'>Rejected</em>
      
        </div>
     </li>
    
          </>
    )
}
