import React,{useState,useEffect} from 'react'
import './userDashboard.css';
import { FaHome } from 'react-icons/fa';
import { AiFillShopping } from 'react-icons/ai';
import { BsBasket3Fill,BsCheckLg } from 'react-icons/bs';
import {MdAccountCircle} from "react-icons/md";
import { IoMdArrowDropdown,IoMdArrowDropup } from 'react-icons/io';
import SubMenuDashboard from '../../../components/SubMenuDashboard/SubMenuDashboard';
import { useDispatch } from 'react-redux';
import { fetchAllMyPendingOrderUser } from '../../../redux/action-creators';
import MyOrderPendingList from '../../../components/TableListUser/MyOrderPendingList';
export default function UserDashboard() {
   
   const dispatch = useDispatch()
   const [openPorfile,SetopenProfile]=useState(false);
   const [myOrders,SetmyOrders]=useState(false);
   const [ordersRecivered,SetordersRecivered]=useState(false);
   const [myOrderPendingData,SetmyOrderPendingData]=useState([])

   

   useEffect(()=>{
      dispatch(fetchAllMyPendingOrderUser());
   },[])
   const handlePendingData = (value)=>{
      SetmyOrderPendingData(value)
    }
    return (
        <>
      
            <div className="s-layout">
      
<div className="s-layout__sidebar">
  <div className="s-sidebar__trigger a-user-dashboard" >
     <i className="fa fa-bars"></i>
  </div>

  <nav className="s-sidebar__nav">
     <ul>
        <li>
           <div className="s-sidebar__nav-link a-user-dashboard" 
           onClick={()=>{SetmyOrderPendingData('');SetopenProfile(false)}}
           >
           <FaHome className="icons-dashboard"/><em className='em-user-dashboard' >Home</em>
           </div>
        </li>
        <li>
           <div onClick={()=>{SetopenProfile(true);SetmyOrderPendingData('')}} className="s-sidebar__nav-link a-user-dashboard" >
             <MdAccountCircle  className="icons-dashboard"/><em className='em-user-dashboard' >My Profile</em>
           </div>
        </li>
      
        <li>
           <div onClick={()=>SetmyOrders( prevState =>!prevState
                  )} className="s-sidebar__nav-link a-user-dashboard">
           
           <AiFillShopping className="icons-dashboard"/><em className='em-user-dashboard'>My Orders 
           {myOrders ? <IoMdArrowDropdown className="icons-arrow"/> :<IoMdArrowDropup className="icons-arrow"/>} </em>
           
           </div>
        </li>
         {myOrders &&
         <SubMenuDashboard handlePendingData={handlePendingData}/> }
        <li>
           <div className="s-sidebar__nav-link a-user-dashboard"onClick={()=>SetordersRecivered( prevState =>!prevState
                  )}  >
           <BsBasket3Fill  className="icons-dashboard"/><em className='em-user-dashboard'>Orders Recieved
                   {ordersRecivered ? <IoMdArrowDropdown className="icons-arrow"/> :<IoMdArrowDropup className="icons-arrow"/>}
                  </em>
           </div>
        </li>
        {ordersRecivered &&
     <SubMenuDashboard/> 
               }
     </ul>
  </nav>
</div>


<main className="s-layout__content">
  
   {openPorfile && !myOrderPendingData && <div>My profile </div>}
   {myOrderPendingData && myOrderPendingData?.myPendingOrderData?.data.length>0 && <MyOrderPendingList myOrderPendingData={myOrderPendingData?.myPendingOrderData?.data}/>}
 {!openPorfile&& !myOrderPendingData &&  <h1 className='h1-user-dashboard'>Full View, Please!</h1>}
</main>
</div>
        </>
    )
}
