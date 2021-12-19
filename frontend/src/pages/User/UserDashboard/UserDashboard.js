import React,{useState,useEffect} from 'react'
import './userDashboard.css';
import { FaHome } from 'react-icons/fa';
import { AiFillShopping } from 'react-icons/ai';
import { BsBasket3Fill,BsCheckLg } from 'react-icons/bs';
import {MdAccountCircle} from "react-icons/md";
import { IoMdArrowDropdown,IoMdArrowDropup } from 'react-icons/io';
import SubMenuDashboard from '../../../components/SubMenuDashboard/SubMenuDashboard';
import { useDispatch } from 'react-redux';
import { fetchAllMyPendingOrderUser,fetchAllMyAcceptedOrderUser, fetchAllMyRejectedOrderUser, fetchAllRecievedPendingOrderUser, fetchAllRecievedAcceptedOrderUser,fetchAllRecievedRejectedOrderUser } from '../../../redux/action-creators';
import MyOrderPendingList from '../../../components/TableListUser/MyOrderPendingList';
import MyOrderAcceptedList from '../../../components/TableListUser/MyOrderAcceptedList';
import MyOrderRejectedList from '../../../components/TableListUser/MyOrderRejectedList';
import SubMenuDashboardRecieved from '../../../components/SubMenuDashboard/SubMenuDashboardRecieved';
import RecivedOrderPendingList from '../../../components/TableListUser/RecivedOrderPendingList';
import RecivedOrderAcceptedList from '../../../components/TableListUser/RecivedOrderAcceptedList';
import RecivedOrderRejectedList from '../../../components/TableListUser/RecivedOrderRejectedList';
export default function UserDashboard() {
   
   const dispatch = useDispatch()
   const [openPorfile,SetopenProfile]=useState(false);
   const [myOrders,SetmyOrders]=useState(false);
   const [ordersRecivered,SetordersRecivered]=useState(false);

   const [myOrderPendingData,SetmyOrderPendingData]=useState([]);
   const [myOrderAcceptedData,SetmyOrderAcceptedData]=useState([]);
   const [myOrderRejectedData,SetmyOrderRejectedData]=useState([]);

   const [ErrormyOrderPending,SetErrormyOrderPending]=useState([]);
   const [ErrormyOrderAccepted,SetErrormyOrderAccepted]=useState([]);
   const [ErrormyOrderRejected,SetErrormyOrderRejected]=useState([]);


   const [recievedOrderPendingData,SetrecievedOrderPendingData]=useState([]);
   const [recievedOrderAcceptedData,SetrecievedOrderAcceptedData]=useState([]);
   const [recievedOrderRejectedData,SetrecievedOrderRejectedData]=useState([]);

   const [errorRecievedOrderPending,SeterrorRecievedOrderPending]=useState([]);
   const [errorRecievedOrderAccepted,SeterrorRecievedOrderAccepted]=useState([]);
   const [errorRecievedOrderRejected,SeterrorRecievedOrderRejected]=useState([]);

   

   useEffect(()=>{
      dispatch(fetchAllMyPendingOrderUser());
      dispatch(fetchAllMyAcceptedOrderUser());
      dispatch(fetchAllMyRejectedOrderUser());

      dispatch(fetchAllRecievedPendingOrderUser());
      dispatch(fetchAllRecievedAcceptedOrderUser());
      dispatch(fetchAllRecievedRejectedOrderUser());

   },[])
   const handlePendingData = (value,error)=>{
      SetmyOrderPendingData(value)
      SetErrormyOrderPending(error)
    }
    const handleAcceptedData = (value,error)=>{
      SetmyOrderAcceptedData(value)
      SetErrormyOrderAccepted(error)
    }
    const handleRejecteddData = (value,error)=>{
      SetmyOrderRejectedData(value)
      SetErrormyOrderRejected(error)
    }

    const handleRecievedPendingData = (value,error)=>{
      SetrecievedOrderPendingData(value);
      SeterrorRecievedOrderPending(error);
     
    }
    const handleRecievedAcceptedData = (value,error)=>{
      SetrecievedOrderAcceptedData(value)
      SeterrorRecievedOrderAccepted(error);
    }

    const handleRecievedRejectedData = (value,error)=>{
      SetrecievedOrderRejectedData(value);
      SeterrorRecievedOrderRejected(error);
    }

//     useEffect(()=>{
//       handleRecievedPendingData()
      

//    },[])
//    useEffect(()=>{
  


//  },[SetrecievedOrderPendingData])
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
           onClick={()=>{SetmyOrderPendingData('');SetopenProfile(false);SetmyOrderAcceptedData('');SetmyOrderRejectedData('');SetrecievedOrderPendingData('');SetrecievedOrderAcceptedData('');SetrecievedOrderRejectedData('');SeterrorRecievedOrderRejected('');SetErrormyOrderPending('');SetErrormyOrderAccepted('');SetErrormyOrderRejected('');SeterrorRecievedOrderAccepted('');SeterrorRecievedOrderPending('')}}
           >
           <FaHome className="icons-dashboard"/><em className='em-user-dashboard' >Home</em>
           </div>
        </li>
        <li>
           <div onClick={()=>{SetopenProfile(true);SetmyOrderPendingData('');SetmyOrderAcceptedData('');SetmyOrderRejectedData('');SetrecievedOrderPendingData('');SetrecievedOrderAcceptedData('');SetrecievedOrderRejectedData('');SeterrorRecievedOrderRejected('');SetErrormyOrderPending('');SetErrormyOrderAccepted('');SetErrormyOrderRejected('');SeterrorRecievedOrderAccepted('');SeterrorRecievedOrderPending('')}} className="s-sidebar__nav-link a-user-dashboard" >
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
         <SubMenuDashboard handlePendingData={handlePendingData} handleAcceptedData={handleAcceptedData} handleRejecteddData={handleRejecteddData}
         handleRecievedAcceptedData={handleRecievedAcceptedData} handleRecievedPendingData={handleRecievedPendingData} handleRecievedRejectedData={handleRecievedRejectedData}
         /> }
        <li>
           <div className="s-sidebar__nav-link a-user-dashboard"onClick={()=>SetordersRecivered( prevState =>!prevState
                  )}  >
           <BsBasket3Fill  className="icons-dashboard"/><em className='em-user-dashboard'>Orders Recieved
                   {ordersRecivered ? <IoMdArrowDropdown className="icons-arrow"/> :<IoMdArrowDropup className="icons-arrow"/>}
                  </em>
           </div>
        </li>
        {ordersRecivered &&
      <SubMenuDashboardRecieved handleRecievedRejectedData={handleRecievedRejectedData} handleRecievedPendingData={handleRecievedPendingData} handleRecievedAcceptedData={handleRecievedAcceptedData}
         handlePendingData={handlePendingData} handleAcceptedData={handleAcceptedData} handleRejecteddData={handleRejecteddData}
      
      
      /> 
               }
     </ul>
  </nav>
</div>


<main className="s-layout__content">
  {/* ////////////MY PROFILE//////////// */}
   {openPorfile && !errorRecievedOrderPending && !errorRecievedOrderAccepted && !ErrormyOrderRejected && !ErrormyOrderAccepted && !ErrormyOrderPending && !errorRecievedOrderRejected && !recievedOrderRejectedData && !recievedOrderAcceptedData && !recievedOrderPendingData && !myOrderPendingData && !myOrderAcceptedData&& !myOrderRejectedData&& <div>My profile </div>}

   {console.log('outside',recievedOrderPendingData)}
  {/* /////////////////MY ORDERS //////////// */}

   { myOrderPendingData && myOrderPendingData?.myPendingOrderData?.data.length>0 && <MyOrderPendingList myOrderPendingData={myOrderPendingData?.myPendingOrderData?.data}/>}
   {myOrderAcceptedData && myOrderAcceptedData?.myAcceptedOrderData?.data.length>0 && <MyOrderAcceptedList myAcceptedOrderData={myOrderAcceptedData?.myAcceptedOrderData?.data}/>}
   {myOrderRejectedData && myOrderRejectedData?.myRejectedOrderData?.data.length>0 && <MyOrderRejectedList myRejectedOrderData={myOrderRejectedData?.myRejectedOrderData?.data}/>}
   
   { ErrormyOrderPending && <MyOrderPendingList ErrormyOrderPending={ErrormyOrderPending}/>}
   { ErrormyOrderAccepted && <MyOrderAcceptedList ErrormyOrderAccepted={ErrormyOrderAccepted}/>}
   { ErrormyOrderRejected && <MyOrderRejectedList ErrormyOrderRejected={ErrormyOrderRejected}/>}
  
{/* ///////////////////////RECIEVED ///////// */}

  {recievedOrderPendingData && recievedOrderPendingData?.receivedPendingOrderData?.length >0 && 
  <RecivedOrderPendingList recievedOrderPendingData={recievedOrderPendingData?.receivedPendingOrderData} /> }
{recievedOrderAcceptedData && recievedOrderAcceptedData?.receivedAcceptedOrderData?.length >0 &&
  <RecivedOrderAcceptedList recievedOrderAcceptedData={recievedOrderAcceptedData?.receivedAcceptedOrderData} /> }
{ recievedOrderRejectedData && recievedOrderRejectedData?.receivedRejectedOrderData?.length >0 &&
  <RecivedOrderRejectedList recievedOrderRejectedData={recievedOrderRejectedData?.receivedRejectedOrderData}  /> }

{errorRecievedOrderPending && <RecivedOrderPendingList errorRecievedOrderPending={errorRecievedOrderPending}/>}
{errorRecievedOrderAccepted && <RecivedOrderAcceptedList errorRecievedOrderAccepted={errorRecievedOrderAccepted}/>}
{errorRecievedOrderRejected && <RecivedOrderRejectedList errorRecievedOrderRejected={errorRecievedOrderRejected}/>}



{/* ////////////////HOME //////////// */}
 {!errorRecievedOrderPending && !errorRecievedOrderAccepted && !ErrormyOrderRejected && !ErrormyOrderAccepted && !ErrormyOrderPending && !errorRecievedOrderRejected && !recievedOrderAcceptedData && !recievedOrderRejectedData && !recievedOrderPendingData && !openPorfile&& !myOrderPendingData && !myOrderAcceptedData && !myOrderRejectedData && <h1 className='h1-user-dashboard'>Full View, Please!</h1>}


 {/* //TODO ACCEPT ORDER NEEDS TO CHANGE PRICE ALSO */}
</main>
</div>
        </>
    )
}
