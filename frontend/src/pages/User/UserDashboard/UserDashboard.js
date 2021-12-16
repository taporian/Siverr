import React,{useState} from 'react'
import './userDashboard.css';
import { FaHome } from 'react-icons/fa';
import { AiFillShopping } from 'react-icons/ai';
import { BsBasket3Fill } from 'react-icons/bs';
import {MdAccountCircle} from "react-icons/md";
import pendingOrder from '../../../assets/svg/pending-order.svg'
export default function UserDashboard() {
   const [openPorfile,SetopenProfile]=useState(false);
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
           <div className="s-sidebar__nav-link a-user-dashboard" >
           <FaHome className="icons-dashboard"/><em className='em-user-dashboard' >Home</em>
           </div>
        </li>
        <li>
           <div onClick={()=>SetopenProfile(true)} className="s-sidebar__nav-link a-user-dashboard" >
             <MdAccountCircle className="icons-dashboard"/><em className='em-user-dashboard' >My Profile</em>
           </div>
        </li>
        <li>
           <div className="s-sidebar__nav-link a-user-dashboard">
           <AiFillShopping className="icons-dashboard"/><em className='em-user-dashboard'>My Orders</em>
           {/* <img src={pendingOrder} alt='pending-order' className="icons-dashboard"/><em className='em-user-dashboard'>My Orders</em> */}
           </div>
        </li>
        <li>
           <div className="s-sidebar__nav-link a-user-dashboard" >
           <BsBasket3Fill className="icons-dashboard"/><em className='em-user-dashboard'>Orders Recieved</em>
           </div>
        </li>
     </ul>
  </nav>
</div>


<main className="s-layout__content">
   {console.log(openPorfile)}
   {openPorfile && <div>My profile </div>}
 {!openPorfile&& <h1 className='h1-user-dashboard'>Full View, Please!</h1>}
</main>
</div>
        </>
    )
}
