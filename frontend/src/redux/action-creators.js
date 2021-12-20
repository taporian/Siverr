import axios from 'axios';

import {
    SIGN_IN_ADMIN_FAILURE,
    SIGN_IN_ADMIN_REQUEST,
    SIGN_IN_ADMIN_SUCCESS,
    SIGN_UP_ADMIN_FAILURE,
    SIGN_UP_ADMIN_REQUEST,
    SIGN_UP_ADMIN_SUCCESS,
    SIGN_OUT_ADMIN_FAILURE,
    SIGN_OUT_ADMIN_REQUEST,
    SIGN_OUT_ADMIN_SUCCESS,

    GET_ALL_SERVICES_PENDING_REQUEST_ADMIN,
    GET_ALL_SERVICES_PENDING_SUCCESS_ADMIN,
    GET_ALL_SERVICES_PENDING_FAILURE_ADMIN,
    GET_ALL_SERVICES_ACCEPTED_REQUEST_ADMIN,
    GET_ALL_SERVICES_ACCEPTED_SUCCESS_ADMIN,
    GET_ALL_SERVICES_ACCEPTED_FAILURE_ADMIN,
    GET_ALL_SERVICES_REJECTED_REQUEST_ADMIN,
    GET_ALL_SERVICES_REJECTED_SUCCESS_ADMIN,
    GET_ALL_SERVICES_REJECTED_FAILURE_ADMIN,

    REJECT_SERVICE_PENDING_REQUEST_ADMIN,
    REJECT_SERVICE_PENDING_SUCCESS_ADMIN,
    REJECT_SERVICE_PENDING_FAILED_ADMIN,

    ACCCEPT_SERVICE_REQUEST_ADMIN,
    ACCCEPT_SERVICE_SUCCESS_ADMIN,
    ACCCEPT_SERVICE_FAILED_ADMIN,

    SIGN_IN_USER_FAILURE,
    SIGN_IN_USER_REQUEST,
    SIGN_IN_USER_SUCCESS,
    SIGN_UP_USER_FAILURE,
    SIGN_UP_USER_REQUEST,
    SIGN_UP_USER_SUCCESS,
    SIGN_OUT_USER_FAILURE,
    SIGN_OUT_USER_REQUEST,
    SIGN_OUT_USER_SUCCESS,

    ACCEPTED,
    REJECTED,
    PENDING,

    GET_ALL_CATEGORY_ACCEPTED_REQUEST_USER,
    GET_ALL_CATEGORY_ACCEPTED_SUCCESS_USER,
    GET_ALL_CATEGORY_ACCEPTED_FAILED_USER,

    GET_SUBCATEGORY_BY_CATEGORY_ID_REQUEST_USER,
    GET_SUBCATEGORY_BY_CATEGORY_ID_SUCCESS_USER,
    GET_SUBCATEGORY_BY_CATEGORY_ID_FAILED_USER,
    EMPTY_SUBCATEGORY,

    POST_CREATE_SERVICE_REQUEST_USER,
    POST_CREATE_SERVICE_SUCCESS_USER,
    POST_CREATE_SERVICE_FAILED_USER,

    GET_ALL_CATEGORY_REQUEST_USER,
    GET_ALL_CATEGORY_SUCCESS_USER,
    GET_ALL_CATEGORY_FAILED_USER,

    GET_ROOMS_REQUEST_USER,
    GET_ROOMS_SUCCESS_USER,
    GET_ROOMS_FAILED_USER,

    CONTACT_SELLER_REQUEST_USER,
    CONTACT_SELLER_SUCCESS_USER,
    CONTACT_SELLER_FAILED_USER,

    POST_ORDER_REQUEST_USER,
    POST_ORDER_SUCCESS_USER,
    POST_ORDER_FAILED_USER,

    GET_MY_ORDER_PENDING_REQUEST_USER,
    GET_MY_ORDER_PENDING_SUCCESS_USER,
    GET_MY_ORDER_PENDING_FAILED_USER,

    GET_MY_ORDER_ACCEPTED_REQUEST_USER,
    GET_MY_ORDER_ACCEPTED_SUCCESS_USER,
    GET_MY_ORDER_ACCEPTED_FAILED_USER,

    GET_MY_ORDER_REJECTED_REQUEST_USER,
    GET_MY_ORDER_REJECTED_SUCCESS_USER,
    GET_MY_ORDER_REJECTED_FAILED_USER,

    GET_RECEIVED_ORDER_PENDING_REQUEST_USER,
    GET_RECEIVED_ORDER_PENDING_SUCCESS_USER,
    GET_RECEIVED_ORDER_PENDING_FAILED_USER,

    GET_RECEIVED_ORDER_ACCEPTED_REQUEST_USER,
    GET_RECEIVED_ORDER_ACCEPTED_SUCCESS_USER,
    GET_RECEIVED_ORDER_ACCEPTED_FAILED_USER,

    GET_RECEIVED_ORDER_REJECTED_REQUEST_USER,
    GET_RECEIVED_ORDER_REJECTED_SUCCESS_USER,
    GET_RECEIVED_ORDER_REJECTED_FAILED_USER,

    POST_ACCEPT_ORDER_REQUEST_USER,
    POST_ACCEPT_ORDER_SUCCESS_USER,
    POST_ACCEPT_ORDER_FAILED_USER,

    POST_REJECT_ORDER_REQUEST_USER,
    POST_REJECT_ORDER_SUCCESS_USER,
    POST_REJECT_ORDER_FAILED_USER,

    POST_COMMENT_REQUEST_USER,
    POST_COMMENT_SUCCESS_USER,
    POST_COMMENT_FAILED_USER,

    GET_MY_SERVICE_PENDING_REQUEST_USER,
    GET_MY_SERVICE_PENDING_SUCCESS_USER,
    GET_MY_SERVICE_PENDING_FAILED_USER,

    GET_MY_SERVICE_ACCEPTED_REQUEST_USER,
    GET_MY_SERVICE_ACCEPTED_SUCCESS_USER,
    GET_MY_SERVICE_ACCEPTED_FAILED_USER,

    GET_MY_SERVICE_REJECTED_REQUEST_USER,
    GET_MY_SERVICE_REJECTED_SUCCESS_USER,
    GET_MY_SERVICE_REJECTED_FAILED_USER,


    GET_ALL_SUCATEGORY_CATEGORY_SERVICE_REQUEST_GUEST,
    GET_ALL_SUCATEGORY_CATEGORY_SERVICE_SUCCESS_GUEST,
    GET_ALL_SUCATEGORY_CATEGORY_SERVICE_FAILED_GUEST,
    ACCEPTED_SERVICES,

    GET_ALL_SUB_ILLUSTRATOR_SERVICE_REQUEST_GUEST,
    GET_ALL_SUB_ILLUSTRATOR_SERVICE_SUCCESS_GUEST,
    GET_ALL_SUB_ILLUSTRATOR_SERVICE_FAILED_GUEST, 

    GET_COMMENT_REQUEST_GUEST,
    GET_COMMENT_SUCCESS_GUEST,
    GET_COMMENT_FAILED_GUEST,

} from './action-types';

import {toast} from "react-toastify";

import { URL_Admin,URL_Guest,URL_User } from "../components/URL";

//////////////////////////////ADMIN/////////////////////////////////////////////////////////

/////////////////////REJECT PENDING REQUEST /////////////////////////////////
const rejectServiceRequestAdmin = () =>{
    
    return{
        type: REJECT_SERVICE_PENDING_REQUEST_ADMIN,
    };
};

const rejectServiceSuccessAdmin = (rejectServiceAdminData) =>{
    return{
        type: REJECT_SERVICE_PENDING_SUCCESS_ADMIN,
        payload: {
            rejectServiceAdminData
        }
    };
};

const rejectServiceFailureAdmin = (rejectServiceDataError) =>{
   
    return {
        type: REJECT_SERVICE_PENDING_FAILED_ADMIN,
        payload:rejectServiceDataError
    };
};

export const rejectServiceAdmin =  (reason_for_rejection,service_id) =>{
   
    return async function (dispatch) {

        dispatch(rejectServiceRequestAdmin());
    try{
       const response = await axios({
            method:"post",
            url: URL_Admin+`/rejectPendingServices/${service_id}`,
            headers:{
                "Content-type":"application/json",
                "Accept":"application/json",
                Authorization:`Bearer ${localStorage.getItem("ADMIN-TOKEN")}`
            },
            data:reason_for_rejection
        });

        const data = response.data;
        if(response.data.message==="You must be logged in as Admin"){  
            dispatch(signOutAdmin())
        }
        else{
            // toast.success(data.message);
        dispatch(rejectServiceSuccessAdmin(data));

        }
                        
    }catch(rejectServiceDataError){
     
        dispatch(rejectServiceFailureAdmin(rejectServiceDataError));
    }
     
    };
};



////////////ACCEPT PENDING REQUEST ////////////////////////
const accepteServiceRequestAdmin = () =>{
    
    return{
        type: ACCCEPT_SERVICE_REQUEST_ADMIN,
    };
};

const accepteServiceSuccessAdmin = (acceptedServiceAdminData) =>{
    return{
        type: ACCCEPT_SERVICE_SUCCESS_ADMIN,
        payload: {
            acceptedServiceAdminData
        }
    };
};

const accepteServiceFailureAdmin = (acceptedServiceDataError) =>{
   
    return {
        type: ACCCEPT_SERVICE_FAILED_ADMIN,
        payload:acceptedServiceDataError
    };
};

export const acceptServiceAdmin =  (service_id) =>{
  
    return async function (dispatch) {

        dispatch(accepteServiceRequestAdmin());
    try{
       const response = await axios({
            method:"put",
            url: URL_Admin+`/acceptService/${service_id}`,
            headers:{
                "Content-type":"application/json",
                "Accept":"application/json",
                Authorization:`Bearer ${localStorage.getItem("ADMIN-TOKEN")}`
            }
        });

        const data = response.data;
        if(response.data.message==="You must be logged in as Admin"){  
            dispatch(signOutAdmin())
        }
        else{
            toast.success(data.message);
        dispatch(accepteServiceSuccessAdmin(data));

        }
                        
    }catch(acceptedServiceDataError){
     
        dispatch(accepteServiceFailureAdmin(acceptedServiceDataError));
    }
     
    };
};

////////TOGGLE SCREENS/////////

export const pendingScreen = () =>
{
    return  {
        type:PENDING
    }
}
export const rejectedScreen = () =>
{
    return  {
        type:REJECTED
    }
}

export const acceptedScreen = () =>
{
    return  {
        type:ACCEPTED
    }
}

// GET ALL REJECTED SERVICES///

const fetchAllRejectedServicesRequest = () =>{
    return{
        type: GET_ALL_SERVICES_REJECTED_REQUEST_ADMIN,
        payload: {
            loading: true
          }
    };
};

const fetchAllRejectedServicesSuccess = (rejectedServiceData) =>{
    
    return{
        type: GET_ALL_SERVICES_REJECTED_SUCCESS_ADMIN,
        payload: {
            rejectedServiceData
        }
    };
};

const fetchAllRejectedServicesFailure = (errorRejected) =>{
    return {
        type: GET_ALL_SERVICES_REJECTED_FAILURE_ADMIN,
        payload:errorRejected
    };
};

export const fetchRejectedServices = (payload) =>{
    
    return async function (dispatch) {
        dispatch(fetchAllRejectedServicesRequest());
        try{
            const res = await axios({
                    method:"get",
                    url: URL_Admin+'/getAllServiceRejected',
                    data: payload,
                    headers:{
                     Authorization:`Bearer ${localStorage.getItem("ADMIN-TOKEN")}`
                     }
                });
               if(res.data.message==="You must be logged in as Admin"){
                   dispatch(signOutAdmin())
               }
               else{
                const result = res.data.data; 
                dispatch(fetchAllRejectedServicesSuccess(result));
               }
                
        }catch(errorRejected){
           
                dispatch(fetchAllRejectedServicesFailure(errorRejected.response.data));

        }
    };
};


// GET ALL ACCEPTED SERVICES///
const fetchAllAcceptedServicesRequest = () =>{
    return{
        type: GET_ALL_SERVICES_ACCEPTED_REQUEST_ADMIN,
        payload: {
            loading: true
          }
    };
};

const fetchAllAcceptedServicesSuccess = (acceptedServiceData) =>{
    
    return{
        type: GET_ALL_SERVICES_ACCEPTED_SUCCESS_ADMIN,
        payload: {
            acceptedServiceData
        }
    };
};

const fetchAllAcceptedServicesFailure = (errorAccepted) =>{
   
    return {
        type: GET_ALL_SERVICES_ACCEPTED_FAILURE_ADMIN,
        payload:errorAccepted
    };
};

export const fetchAcceptedServices = (payload) =>{
    
    return async function (dispatch) {
        dispatch(fetchAllAcceptedServicesRequest());
        try{
            const res = await axios({
                    method:"get",
                    url: URL_Admin+'/getAllServiceAccepted',
                    data: payload,
                    headers:{
                     Authorization:`Bearer ${localStorage.getItem("ADMIN-TOKEN")}`
                     }
                });
               if(res.data.message==="You must be logged in as Admin"){
                   dispatch(signOutAdmin())
               }
               else{
                const result = res.data.data; 
                dispatch(fetchAllAcceptedServicesSuccess(result));
               }
                
        }catch(errorAccepted){
          
                dispatch(fetchAllAcceptedServicesFailure(errorAccepted.response.data));
              
        }
    };
};


//// GET ALL PENDING SERVICES/////

const fetchAllPendingServicesRequest = () =>{
    return{
        type: GET_ALL_SERVICES_PENDING_REQUEST_ADMIN,
        payload: {
            loading: true
          }
    };
};

const fetchAllPendingServicesSuccess = (pendingServiceData) =>{
    
    return{
        type: GET_ALL_SERVICES_PENDING_SUCCESS_ADMIN,
        payload: {
            pendingServiceData
        }
    };
};

const fetchAllPendingServicesFailure = (errorPending) =>{
    return {
        type: GET_ALL_SERVICES_PENDING_FAILURE_ADMIN,
        payload:errorPending
    };
};

export const fetchPendingServices = (payload) =>{
       
    return async function (dispatch) {
        dispatch(fetchAllPendingServicesRequest());
        try{
            const res = await axios({
                    method:"get",
                    url: URL_Admin+'/getAllServicePending',
                    data: payload,
                    headers:{
                     Authorization:`Bearer ${localStorage.getItem("ADMIN-TOKEN")}`
                     }
                });
               if(res.data.message==="You must be logged in as Admin"){
                   dispatch(signOutAdmin())
               }
               else{
                   
                const result = res.data.data; 
                dispatch(fetchAllPendingServicesSuccess(result));
                // dispatch(fetchAllAcceptedServicesFailure("")); 
               }
                
        }catch(errorPending){
           
                dispatch(fetchAllPendingServicesFailure(errorPending.response.data));
                
        }
    };
};

// SIGN UP ADMIN

const signUpRequestAdmin = () =>{
    return{
        type: SIGN_UP_ADMIN_REQUEST,
    };
};

const signUpSuccessAdmin = (user) =>{
    return{
        type: SIGN_UP_ADMIN_SUCCESS,
        payload: {
            user
        }
    };
};

const signUpFailureAdmin = (error) =>{
    return {
        type: SIGN_UP_ADMIN_FAILURE,
        payload:error
    };
};

export const signUpAdmin = (user,history) =>{
    
    return async function (dispatch)  {
        dispatch(signUpRequestAdmin());
        try{
            const res = await axios({
                method:"post",
                url: URL_Admin+'/register',
                data: user,
                });
                const {data} = res.data;
               
                dispatch(signUpSuccessAdmin(data));
                history.push('/adminhome');
        }catch(error){
          
               dispatch(signUpFailureAdmin(error));
           
        }
    };
};

//Sign in  ADMIN

const signInRequestAdmin = () =>{
    return {
        type: SIGN_IN_ADMIN_REQUEST
    };
};

const signInSuccessAdmin = (payload) =>{
    return {
        type: SIGN_IN_ADMIN_SUCCESS,
        payload
    };
};

const signInFailureAdmin = (error) =>{
 
    return {
        type: SIGN_IN_ADMIN_FAILURE,
        payload: error,
    };
};

export const signinAdmin = (payload,history) =>{

    return async function (dispatch) {
    
        dispatch(signInRequestAdmin);
        try{
    
           const res= await axios({
                method:"POST",
                url: URL_Admin+"/login",
                data:payload,
                headers:{
                    "Content-type":"application/json",
                    "Accept":"application/json",
                }
            })           
              
            const {access_token,name} = res.data;

            localStorage.setItem("ADMIN-NAME",name);
                localStorage.setItem("ADMIN-TOKEN",access_token);
                dispatch(signInSuccessAdmin({access_token,name}));
        }catch(error){
            if(error.response && error.response.status === 404){
                dispatch(signInFailureAdmin(error.response.data));
            
           }
           else{
               dispatch(signUpFailureAdmin(error));
           }
           
           
        }
        
    };
};

// sign out ADMIN

export const signOutRequestAdmin = () =>{
    return {
        type: SIGN_OUT_ADMIN_REQUEST,
    };
};

export const signOutSuccessAdmin = () =>{
    return {
      type: SIGN_OUT_ADMIN_SUCCESS,
    };
  };

export const signOutFailureAdmin = () =>{
    return {
        type: SIGN_OUT_ADMIN_FAILURE
    };
};

export const signOutAdmin = (history) =>{

    return async function(dispatch){
        dispatch(signOutRequestAdmin());
        try{
        

            const res= await axios({
                 method:"POST",
                 url: URL_Admin+"/logout",
                 headers:{
                     "Content-type":"application/json",
                     "Accept":"application/json",
                     "Authorization":`Bearer ${localStorage.getItem("ADMIN-TOKEN")}`
                 }
             }) 
        localStorage.removeItem("ADMIN-TOKEN");
        localStorage.removeItem("ADMIN-NAME");
      history.push('/admin/signin');
        toast.success("Logged out");
            }
            catch(error){
               

                if(localStorage.getItem("ADMIN-TOKEN")!== null){
                    dispatch(signOutFailureAdmin());
                }
                else{
                    dispatch(signOutSuccessAdmin());
                }
            }
       
    };
}
/////////////////////////USER///////////////////////////////////////////////////////////////////////////////////

//////////////GET ALL MY SERVICE REJECTED///////////

const fetchAllMyRejectedServiceUserRequest = () =>{
    return{
        type: GET_MY_SERVICE_REJECTED_REQUEST_USER,
        payload: {
            loading: true
          }
    };
};

const fetchAllMyRejectedServiceUserSuccess = (myServiceRejectedData) =>{
    
    return{
        type: GET_MY_SERVICE_REJECTED_SUCCESS_USER,
        payload: {
            myServiceRejectedData
        }
    };
};

const fetchAllMyRejectedServiceUserFailure = (errorMyServiceRejected) =>{
  
    return {
        type: GET_MY_SERVICE_REJECTED_FAILED_USER,
        payload:errorMyServiceRejected
    };
};

export const fetchAllMyRejectedServiceUser = () =>{
   
    return async function (dispatch) {
    
        dispatch(fetchAllMyRejectedServiceUserRequest());
        try{
            const res = await axios({
                    method:"get",
                    url: URL_User+'/getServiceRejected',
                    headers:{
                        "Accept":"application/json",
                        Authorization:`Bearer ${localStorage.getItem("USER-TOKEN")}`
                    }
                                   
                });                
                const result = res.data;   
                 
                if(res.data.message==="You must be logged in"){  
                    dispatch(signOutUser())
                }
                else{
                       
                    dispatch(fetchAllMyRejectedServiceUserSuccess(result));
              
                }
              
               
                       
               
        }catch(errorMyServiceAccepted){
     
          
                dispatch(fetchAllMyRejectedServiceUserFailure(errorMyServiceAccepted.response.data));
                
        }
    };
};

//////////////GET ALL MY SERVICE ACCEPTED///////////

const fetchAllMyAcceptedServiceUserRequest = () =>{
    return{
        type: GET_MY_SERVICE_ACCEPTED_REQUEST_USER,
        payload: {
            loading: true
          }
    };
};

const fetchAllMyAcceptedServiceUserSuccess = (myServiceAcceptedData) =>{
    
    return{
        type: GET_MY_SERVICE_ACCEPTED_SUCCESS_USER,
        payload: {
            myServiceAcceptedData
        }
    };
};

const fetchAllMyAcceptedServiceUserFailure = (errorMyServiceAccepted) =>{
  
    return {
        type: GET_MY_SERVICE_ACCEPTED_FAILED_USER,
        payload:errorMyServiceAccepted
    };
};

export const fetchAllMyAcceptedServiceUser = () =>{
   
    return async function (dispatch) {
        console.log('ehehehhe')   
        dispatch(fetchAllMyAcceptedServiceUserRequest());
        try{
            const res = await axios({
                    method:"get",
                    url: URL_User+'/getServiceAccepted',
                    headers:{
                        "Accept":"application/json",
                        Authorization:`Bearer ${localStorage.getItem("USER-TOKEN")}`
                    }
                                   
                });                
                const result = res.data;   
                 
                if(res.data.message==="You must be logged in"){  
                    dispatch(signOutUser())
                }
                else{
                       
                    dispatch(fetchAllMyAcceptedServiceUserSuccess(result));
              
                }
              
               
                       
               
        }catch(errorMyServiceAccepted){
     
          
                dispatch(fetchAllMyAcceptedServiceUserFailure(errorMyServiceAccepted.response.data));
                
        }
    };
};

///////////////GET ALL MY SERVICE PENDING///////////

const fetchAllMyPendingServiceUserRequest = () =>{
    return{
        type: GET_MY_SERVICE_PENDING_REQUEST_USER,
        payload: {
            loading: true
          }
    };
};

const fetchAllMyPendingServiceUserSuccess = (myServicePendingData) =>{
    
    return{
        type: GET_MY_SERVICE_PENDING_SUCCESS_USER,
        payload: {
            myServicePendingData
        }
    };
};

const fetchAllMyPendingServiceUserFailure = (errorMyServicePending) =>{
  
    return {
        type: GET_MY_SERVICE_PENDING_FAILED_USER,
        payload:errorMyServicePending
    };
};

export const fetchAllMyPendingServiceUser = () =>{
   
    return async function (dispatch) {
        console.log('ehehehhe')   
        dispatch(fetchAllMyPendingServiceUserRequest());
        try{
            const res = await axios({
                    method:"get",
                    url: URL_User+'/getServicePending',
                    headers:{
                        "Accept":"application/json",
                        Authorization:`Bearer ${localStorage.getItem("USER-TOKEN")}`
                    }
                                   
                });                
                const result = res.data;   
                 
                if(res.data.message==="You must be logged in"){  
                    dispatch(signOutUser())
                }
                else{
                       
                    dispatch(fetchAllMyPendingServiceUserSuccess(result));
              
                }
              
               
                       
               
        }catch(errorMyServicePending){
     
          
                dispatch(fetchAllMyPendingServiceUserFailure(errorMyServicePending.response.data));
                
        }
    };
};


////////////POST COMMENT ////////////////////////
const postCommentRequestUser = () =>{
    
    return{
        type: POST_COMMENT_REQUEST_USER,
    };
};

const postCommentSuccessUser = (commentData) =>{
    return{
        type: POST_COMMENT_SUCCESS_USER,
        payload: {
            commentData
        }
    };
};

const postCommentFailureUser = (ErrorComment) =>{
   
    return {
        type: POST_COMMENT_FAILED_USER,
        payload:ErrorComment
    };
};

export const postCommentUser =  (comment_data) =>{
  
    return async function (dispatch) {

        dispatch(postCommentRequestUser());
    try{
       const response = await axios({
            method:"post",
            url: URL_User+`/createComment`,
            data:comment_data,
            headers:{
                "Content-type":"application/json",
                "Accept":"application/json",
                Authorization:`Bearer ${localStorage.getItem("USER-TOKEN")}`
            }
        });

        const data = response.data;
        if(response.data.message==="You must be logged"){  
            dispatch(signOutUser())
        }
        else{
            
        dispatch(postCommentSuccessUser(data));

        }
                        
    }catch(ErrorComment){
     
        dispatch(postCommentFailureUser(ErrorComment.response.data));
    }
     
    };
};


////////////POST REJECT ORDER ////////////////////////
const rejectOrderRequestUser = () =>{
    
    return{
        type: POST_REJECT_ORDER_REQUEST_USER,
    };
};

const rejectOrderSuccessUser = (rejectOrderData) =>{
    return{
        type: POST_REJECT_ORDER_SUCCESS_USER,
        payload: {
            rejectOrderData
        }
    };
};

const rejectOrderFailureUser = (ErrorRejectOrder) =>{
   
    return {
        type: POST_REJECT_ORDER_FAILED_USER,
        payload:ErrorRejectOrder
    };
};

export const rejectOrderUser =  (rejectOrder_id) =>{
  
    return async function (dispatch) {

        dispatch(rejectOrderRequestUser());
    try{
       const response = await axios({
            method:"put",
            url: URL_User+`/rejectOrder/${rejectOrder_id}`,
            headers:{
                "Content-type":"application/json",
                "Accept":"application/json",
                Authorization:`Bearer ${localStorage.getItem("USER-TOKEN")}`
            }
        });

        const data = response.data;
        if(response.data.message==="You must be logged"){  
            dispatch(signOutUser())
        }
        else{
            toast.success('Order Rejected');
        dispatch(rejectOrderSuccessUser(data));

        }
                        
    }catch(ErrorRejectOrder){
     
        dispatch(rejectOrderFailureUser(ErrorRejectOrder));
    }
     
    };
};

////////////POST ACCEPT ORDER ////////////////////////
const acceptOrderRequestUser = () =>{
    
    return{
        type: POST_ACCEPT_ORDER_REQUEST_USER,
    };
};

const acceptOrderSuccessUser = (acceptOrderData) =>{
    return{
        type: POST_ACCEPT_ORDER_SUCCESS_USER,
        payload: {
            acceptOrderData
        }
    };
};

const acceptOrderFailureUser = (ErroracceptOrder) =>{
   
    return {
        type: POST_ACCEPT_ORDER_FAILED_USER,
        payload:ErroracceptOrder
    };
};

export const acceptOrderUser =  (acceptOrderData) =>{
  
    return async function (dispatch) {

        dispatch(acceptOrderRequestUser());
    try{
       const response = await axios({
            method:"put",
            url: URL_User+`/acceptOrder`,
            data:acceptOrderData,
            headers:{
                "Content-type":"application/json",
                "Accept":"application/json",
                Authorization:`Bearer ${localStorage.getItem("USER-TOKEN")}`
            }
        });

        const data = response.data;
        if(response.data.message==="You must be logged"){  
            dispatch(signOutUser())
        }
        else{
            toast.success('Order Accepted');
        dispatch(acceptOrderSuccessUser(data));
        // dispatch(fetchAllRecievedPendingOrderUser())

        }
                        
    }catch(ErroracceptOrder){
     
        dispatch(acceptOrderFailureUser(ErroracceptOrder));
    }
     
    };
};


//////////////GET ALL RECEIVED REJECTED ORDER /////////////

const fetchAllRecievedRejectedOrderUserRequest = () =>{
    return{
        type: GET_RECEIVED_ORDER_REJECTED_REQUEST_USER,
        payload: {
            loading: true
          }
    };
};

const fetchAllRecievedRejectedOrderUserSuccess = (receivedRejectedOrderData) =>{
    
    return{
        type: GET_RECEIVED_ORDER_REJECTED_SUCCESS_USER,
        payload: {
            receivedRejectedOrderData
        }
    };
};

const fetchAllRecievedRejectedOrderUserFailure = (errorRecievedRejectedOrder) =>{

 
    return {
        type: GET_RECEIVED_ORDER_REJECTED_FAILED_USER,
        payload:errorRecievedRejectedOrder
    };
};

export const fetchAllRecievedRejectedOrderUser = () =>{
       
    return async function (dispatch) {
        dispatch(fetchAllRecievedRejectedOrderUserRequest());
        try{
            const res = await axios({
                    method:"get",
                    url: URL_User+'/getAllRejectedOrder',
                    headers:{
                        "Accept":"application/json",
                        Authorization:`Bearer ${localStorage.getItem("USER-TOKEN")}`
                    }
                                   
                });                
                const result = res.data;    
                let payload=[]
              
            
                result.data.map((res)=>{
                   
                    if(res.orders_rejected.length>0){
                      
                        res.orders_rejected.map((result2)=>  {
                            payload=[...payload,{...result2,
                                service:res,
                            }]
                     
                    });
                }});
               
               
              

                if(res.data.message==="You must be logged in"){  
                    dispatch(signOutUser())
                }
                else{
                       
                    dispatch(fetchAllRecievedRejectedOrderUserSuccess(payload));
              
                }
              
               
                       
                
        }catch(errorRecievedRejectedOrder){
                  
                dispatch(fetchAllRecievedRejectedOrderUserFailure(errorRecievedRejectedOrder.response.data));
                
        }
    };
};

//////////////GET ALL RECEIVED ACCEPTED ORDER /////////////

const fetchAllRecievedAcceptedOrderUserRequest = () =>{
    return{
        type: GET_RECEIVED_ORDER_ACCEPTED_REQUEST_USER,
        payload: {
            loading: true
          }
    };
};

const fetchAllRecievedAcceptedOrderUserSuccess = (receivedAcceptedOrderData) =>{
    
    return{
        type: GET_RECEIVED_ORDER_ACCEPTED_SUCCESS_USER,
        payload: {
            receivedAcceptedOrderData
        }
    };
};

const fetchAllRecievedAcceptedOrderUserFailure = (errorRecievedAcceptedOrder) =>{
    return {
        type: GET_RECEIVED_ORDER_ACCEPTED_FAILED_USER,
        payload:errorRecievedAcceptedOrder
    };
};

export const fetchAllRecievedAcceptedOrderUser = () =>{
       
    return async function (dispatch) {
        dispatch(fetchAllRecievedAcceptedOrderUserRequest());
        try{
            const res = await axios({
                    method:"get",
                    url: URL_User+'/getAllAcceptedOrder',
                    headers:{
                        "Accept":"application/json",
                        Authorization:`Bearer ${localStorage.getItem("USER-TOKEN")}`
                    }
                                   
                });                
                const result = res.data;    
                let payload=[]

            
                result.data.map((res)=>{
                   
                    if(res.orders_accepted.length>0){
                      
                        res.orders_accepted.map((result2)=>  {
                            payload=[...payload,{...result2,
                                service:res,
                            }]
                     
                    });
                }});
            
               
              

                if(res.data.message==="You must be logged in"){  
                    dispatch(signOutUser())
                }
                else{
                       
                    dispatch(fetchAllRecievedAcceptedOrderUserSuccess(payload));
              
                }
              
               
                       
                
        }catch(errorRecievedAcceptedOrder){
           
                dispatch(fetchAllRecievedAcceptedOrderUserFailure(errorRecievedAcceptedOrder.response.data));
                
        }
    };
};

//////////////GET ALL RECEIVED  PENDING ORDER /////////////

const fetchAllRecievedPendingOrderUserRequest = () =>{
    return{
        type: GET_RECEIVED_ORDER_PENDING_REQUEST_USER,
        payload: {
            loading: true
          }
    };
};

const fetchAllRecievedPendingOrderUserSuccess = (receivedPendingOrderData) =>{
    
    return{
        type: GET_RECEIVED_ORDER_PENDING_SUCCESS_USER,
        payload: {
            receivedPendingOrderData
        }
    };
};

const fetchAllRecievedPendingOrderUserFailure = (errorRecievedPendingOrder) =>{
    return {
        type: GET_RECEIVED_ORDER_PENDING_FAILED_USER,
        payload:errorRecievedPendingOrder
    };
};

export const fetchAllRecievedPendingOrderUser = () =>{
       
    return async function (dispatch) {
        dispatch(fetchAllRecievedPendingOrderUserRequest());
        try{
            const res = await axios({
                    method:"get",
                    url: URL_User+'/getAllPendingOrder',
                    headers:{
                        "Accept":"application/json",
                        Authorization:`Bearer ${localStorage.getItem("USER-TOKEN")}`
                    }
                                   
                });                
                const result = res.data;    
                let payload=[]

            
                result.data.map((res)=>{
                   
                    if(res.orders_pending.length>0){
                      
                        res.orders_pending.map((result2)=>  {
                            payload=[...payload,{...result2,
                                service:res,
                            }]
                     
                    });
                }});

               
              

                if(res.data.message==="You must be logged in"){  
                    dispatch(signOutUser())
                }
                else{
                       
                    dispatch(fetchAllRecievedPendingOrderUserSuccess(payload));
              
                }
              
               
                       
                
        }catch(errorRecievedPendingOrder){
           
                dispatch(fetchAllRecievedPendingOrderUserFailure(errorRecievedPendingOrder.response.data));
                
        }
    };
};

///////////////GET ALL MY REJECTED ORDER /////////

const fetchAllMyRejectedOrderUserRequest = () =>{
    return{
        type: GET_MY_ORDER_REJECTED_REQUEST_USER,
        payload: {
            loading: true
          }
    };
};

const fetchAllMyRejectedOrderUserSucces = (myRejectedOrderData) =>{
    
    return{
        type: GET_MY_ORDER_REJECTED_SUCCESS_USER,
        payload: {
            myRejectedOrderData
        }
    };
};

const fetchAllMyRejectedOrderUserFailure = (errorMyRejectedOrder) =>{
    return {
        type: GET_MY_ORDER_REJECTED_FAILED_USER,
        payload:errorMyRejectedOrder
    };
};

export const fetchAllMyRejectedOrderUser = () =>{
       
    return async function (dispatch) {
        dispatch(fetchAllMyRejectedOrderUserRequest());
        try{
            const res = await axios({
                    method:"get",
                    url: URL_User+'/myOrdersRejected',
                    headers:{
                        "Accept":"application/json",
                        Authorization:`Bearer ${localStorage.getItem("USER-TOKEN")}`
                    }
                                   
                });                
                const result = res.data;         
                if(res.data.message==="You must be logged in"){  
                    dispatch(signOutUser())
                }
                else{
                       
                    dispatch(fetchAllMyRejectedOrderUserSucces(result));
              
                }
              
               
                       
                
        }catch(errorMyRejectedOrder){
           
                dispatch(fetchAllMyRejectedOrderUserFailure(errorMyRejectedOrder.response.data));
                
        }
    };
};


///////////////GET ALL MY ACCEPTED ORDER ////////////////////

const fetchAllMyAcceptedOrderUserRequest = () =>{
    return{
        type: GET_MY_ORDER_ACCEPTED_REQUEST_USER,
        payload: {
            loading: true
          }
    };
};

const fetchAllMyAcceptedOrderUserSucces = (myAcceptedOrderData) =>{
    
    return{
        type: GET_MY_ORDER_ACCEPTED_SUCCESS_USER,
        payload: {
            myAcceptedOrderData
        }
    };
};

const fetchAllMyAcceptedOrderUserFailure = (errorMyAcceptedOrder) =>{
    return {
        type: GET_MY_ORDER_ACCEPTED_FAILED_USER,
        payload:errorMyAcceptedOrder
    };
};

export const fetchAllMyAcceptedOrderUser = () =>{
       
    return async function (dispatch) {
        dispatch(fetchAllMyAcceptedOrderUserRequest());
        try{
            const res = await axios({
                    method:"get",
                    url: URL_User+'/myOrdersAccepted',
                    headers:{
                        "Accept":"application/json",
                        Authorization:`Bearer ${localStorage.getItem("USER-TOKEN")}`
                    }
                                   
                });                
                const result = res.data;         
                if(res.data.message==="You must be logged in"){  
                    dispatch(signOutUser())
                }
                else{
                       
                    dispatch(fetchAllMyAcceptedOrderUserSucces(result));
              
                }
              
               
                       
                
        }catch(errorMyAcceptedOrder){
           
                dispatch(fetchAllMyAcceptedOrderUserFailure(errorMyAcceptedOrder.response.data));
                
        }
    };
};

///////////////GET ALL MY PENDING ORDER /////////

const fetchAllMyPendingOrderUserRequest = () =>{
    return{
        type: GET_MY_ORDER_PENDING_REQUEST_USER,
        payload: {
            loading: true
          }
    };
};

const fetchAllMyPendingOrderUserSucces = (myPendingOrderData) =>{
    
    return{
        type: GET_MY_ORDER_PENDING_SUCCESS_USER,
        payload: {
            myPendingOrderData
        }
    };
};

const fetchAllMyPendingOrderUserFailure = (errorMyPendingOrder) =>{
    return {
        type: GET_MY_ORDER_PENDING_FAILED_USER,
        payload:errorMyPendingOrder
    };
};

export const fetchAllMyPendingOrderUser = () =>{
       
    return async function (dispatch) {
        dispatch(fetchAllMyPendingOrderUserRequest());
        try{
            const res = await axios({
                    method:"get",
                    url: URL_User+'/myOrdersPending',
                    headers:{
                        "Accept":"application/json",
                        Authorization:`Bearer ${localStorage.getItem("USER-TOKEN")}`
                    }
                                   
                });                
                const result = res.data;         
                if(res.data.message==="You must be logged in"){  
                    dispatch(signOutUser())
                }
                else{
                       
                    dispatch(fetchAllMyPendingOrderUserSucces(result));
              
                }
              
               
                       
                
        }catch(errorMyPendingOrder){
           
                dispatch(fetchAllMyPendingOrderUserFailure(errorMyPendingOrder.response.data));
                
        }
    };
};

////////////POST ORDER /////////
const postOrderUserRequest = () =>{
   
    return{
        type: POST_ORDER_REQUEST_USER,
    };
};

const postOrderUserSuccess = (postOrderData) =>{
   
    return{
        type: POST_ORDER_SUCCESS_USER,
        payload: {
            postOrderData
        }
    };
};

const postOrderUserFailure = (postOrderError) =>{
   
    return {
        type: POST_ORDER_FAILED_USER,
        payload:postOrderError
    };
};

export const postOrder =  (OrderData) =>{
 
    return async function (dispatch) {

        dispatch(postOrderUserRequest());
    try{
       const response = await axios.post(URL_User+`/createOrder`,OrderData,
           {
            headers:{
                "Accept":"application/json",
                Authorization:`Bearer ${localStorage.getItem("USER-TOKEN")}`
            }
        }
           
        );
        const datas = response.data;
       
        if(response && response.data && response.data.message && response.data.message==="You must be logged in"){  
            dispatch(signOutUser())
        }
        else{
               
        dispatch(postOrderUserSuccess(datas));
        toast.success('Your Order Has Been Sent Check your messages with your provider');
        }
                        
    }catch(postOrderError){
  
        dispatch(postOrderUserFailure(postOrderError.response.data));
    }
     
    };
};


///////CREATE SERVICE

const createServiceRequest = () =>{
   
    return{
        type: POST_CREATE_SERVICE_REQUEST_USER,
    };
};

const createServiceSuccess = (postService) =>{
    return{
        type: POST_CREATE_SERVICE_SUCCESS_USER,
        payload: {
            postService
        }
    };
};

const createServiceFailure = (createServiceError) =>{
   
    return {
        type: POST_CREATE_SERVICE_FAILED_USER,
        payload:createServiceError
    };
};

export const createService =  (postService) =>{
 
    return async function (dispatch) {

        dispatch(createServiceRequest());
    try{
       const response = await axios.post(URL_User+`/services`,postService,
           {
            headers:{
                "Accept":"application/json",
                Authorization:`Bearer ${localStorage.getItem("USER-TOKEN")}`
            }
        }
           
        );
        const data = response.data;
    
        if(response.data.message==="You must be logged in"){  
            dispatch(signOutUser())
        }
        else{
               
        dispatch(createServiceSuccess(data));
        toast.success(data.message)
        }
                        
    }catch(createServiceError){
       
        dispatch(createServiceFailure(createServiceError.response.data));
    }
     
    };
};

//// FETCH SUBCATEGORY BY CATEGORY_ID //////////////

export const  emptySubcategory = ()=>{
    return {
        type:EMPTY_SUBCATEGORY,
    }
}

const fectchSubcategoryByCategoryIDRequest = () =>{

    return{
        type: GET_SUBCATEGORY_BY_CATEGORY_ID_REQUEST_USER,
    };
};

const fectchSubcategoryByCategoryIDSuccess = (fetchSubCategoryDataUser) =>{
    return{
        type: GET_SUBCATEGORY_BY_CATEGORY_ID_SUCCESS_USER,
        payload: {
            fetchSubCategoryDataUser
        }
    };
};

const fectchSubcategoryByCategoryIDFailure = (fetchSubCategoryDataUsererror) =>{
   
    return {
        type: GET_SUBCATEGORY_BY_CATEGORY_ID_FAILED_USER,
        payload:fetchSubCategoryDataUsererror
    };
};

export const fetchSubcategoryByCategoryID =  (category_id) =>{
  
    return async function (dispatch) {

        dispatch(fectchSubcategoryByCategoryIDRequest());
    try{
       const response = await axios({
            method:"get",
            url: URL_User+`/getSubcategoryByCategoryId/${category_id}`,
            headers:{
                "Content-type":"application/json",
                "Accept":"application/json",
                Authorization:`Bearer ${localStorage.getItem("USER-TOKEN")}`
            }
        });

        const data = response.data;
        if(response.data.message==="You must be logged in"){  
            dispatch(signOutUser())
        }
        else{
               
        dispatch(fectchSubcategoryByCategoryIDSuccess(data));
        }
                        
    }catch(fetchSubCategoryDataUsererror){
     
        dispatch(fectchSubcategoryByCategoryIDFailure(fetchSubCategoryDataUsererror));
    }
     
    };
};

////// FETCH ALL CATEGORY //////
const fetchAllCategoryRequestUser = () =>{
    return{
        type: GET_ALL_CATEGORY_REQUEST_USER,
        payload: {
            loading: true
          }
    };
};

const fetchAllCategorySuccessUser = (categoryUserDataUser) =>{
    
    return{
        type: GET_ALL_CATEGORY_SUCCESS_USER,
        payload: {
            categoryUserDataUser
        }
    };
};

const fetchAllCategoryFaillureUser = (errorCategoryUser) =>{
   
    return {
        type: GET_ALL_CATEGORY_FAILED_USER,
        payload:errorCategoryUser
    };
};

export const fetchAllCategoryUser = (payload) =>{
    
    return async function (dispatch) {
        dispatch(fetchAllCategoryRequestUser());
        try{
            const res = await axios({
                    method:"get",
                    url: URL_User+'/getAllCategory',
                    data: payload,
                    headers:{
                     Authorization:`Bearer ${localStorage.getItem("USER-TOKEN")}`
                     }
                });
              
               if(res.data.message==="You must be logged in"){  
                   dispatch(signOutUser())
               }
               else{
                  
                const result = res.data.category; 
            
                dispatch(fetchAllCategorySuccessUser(result));
               }
                
        }catch(errorCategoryUser){
          
                dispatch(fetchAllCategoryFaillureUser(errorCategoryUser.response.data));
              
        }
    };
};


////// FETCH ALL ACCEPTED CATEGORY //////
const fetchAllAcceptedCategoryRequest = () =>{
    return{
        type: GET_ALL_CATEGORY_ACCEPTED_REQUEST_USER,
        payload: {
            loading: true
          }
    };
};

const fetchAllAcceptedCategorySuccess = (acceptedCategoryUserDataUser) =>{
 
    return{
        type: GET_ALL_CATEGORY_ACCEPTED_SUCCESS_USER,
        payload: {
            acceptedCategoryUserDataUser
        }
    };
};

const fetchAllAcceptedCategoryFaillure = (errorAcceptedCategoryUser) =>{
   
    return {
        type: GET_ALL_CATEGORY_ACCEPTED_FAILED_USER,
        payload:errorAcceptedCategoryUser
    };
};

export const fetchAcceptedCategoryUser = (payload) =>{
    
    return async function (dispatch) {
        dispatch(fetchAllAcceptedCategoryRequest());
        try{
            const res = await axios({
                    method:"get",
                    url: URL_User+'/getAllAcceptedCategory',
                    data: payload,
                    headers:{
                     Authorization:`Bearer ${localStorage.getItem("USER-TOKEN")}`
                     }
                });
            
               if(res.data.message==="You must be logged in"){  
                   dispatch(signOutUser())
               }
               else{
                  
                const result = res.data.data; 
                
                dispatch(fetchAllAcceptedCategorySuccess(result));
               }
                
        }catch(errorAcceptedCategoryUser){
          
                dispatch(fetchAllAcceptedCategoryFaillure(errorAcceptedCategoryUser.response.data));
              
        }
    };
};
/////////////////FETCH ALL ROOMS////////////

const fetchAllRoomsRequestUser = () =>{
    return{
        type: GET_ROOMS_REQUEST_USER,
        payload: {
            loading: true
          }
    };
};

const fetchAllRoomsSuccessUser = (roomsUserData) =>{
    
    return{
        type: GET_ROOMS_SUCCESS_USER,
        payload: {
            roomsUserData
        }
    };
};

const fetchAllRoomsFaillureUser = (errorRooms) =>{
   
    return {
        type: GET_ROOMS_FAILED_USER,
        payload:errorRooms
    };
};

export const fetchAllRoomsUser = (payload) =>{
    
    return async function (dispatch) {
        dispatch(fetchAllRoomsRequestUser());
        try{
            const res = await axios({
                    method:"get",
                    url: URL_User+'/getAllRooms',
                    data: payload,
                    headers:{
                     Authorization:`Bearer ${localStorage.getItem("USER-TOKEN")}`
                     }
                });
              
               if(res.data.message==="You must be logged in"){  
                   dispatch(signOutUser())
               }
               else{
                  
                const result = res.data; 
            
                dispatch(fetchAllRoomsSuccessUser(result));
               }
                
        }catch(errorRooms){
          
                dispatch(fetchAllRoomsFaillureUser(errorRooms.response.data));
              
        }
    };
};

//// /////////////CONTACT  SELLER //////////////


const contactSellerRequest = () =>{
   
    return{
        type: CONTACT_SELLER_REQUEST_USER,
    };
};

const contactSellerSuccess = (contactData) =>{
    return{
        type: CONTACT_SELLER_SUCCESS_USER,
        payload: {
            contactData
        }
    };
};

const contactSellerFailure = (contactError) =>{
   
    return {
        type: CONTACT_SELLER_FAILED_USER,
        payload:contactError
    };
};

export const contactSeller =  (contactData) =>{
 
    return async function (dispatch) {

        dispatch(contactSellerRequest());
    try{
       const response = await axios.post(URL_User+`/contactSeller`,contactData,
           {
            headers:{
                "Accept":"application/json",
                Authorization:`Bearer ${localStorage.getItem("USER-TOKEN")}`
            }
        }
           
        );
        const data = response.data;
       
        if(response.data.message==="You must be logged in"){  
            dispatch(signOutUser())
        }
        else{
               
        dispatch(contactSellerSuccess(data));
        toast.success('Message Sent')
        }
                        
    }catch(contactError){
       
        dispatch(contactSellerFailure(contactError.response.data));
    }
     
    };
};


// SIGN UP USER

const signUpRequestUser = () =>{
    return{
        type: SIGN_UP_USER_REQUEST,
    };
};

const signUpSuccessUser = (user) =>{
    return{
        type: SIGN_UP_USER_SUCCESS,
        payload: {
            user
        }
    };
};

const signUpFailureUser = (error) =>{

    return {
        type: SIGN_UP_USER_FAILURE,
        payload:error.errors
    };
};

export const signUpUser = (user,history) =>{
    
    return async function (dispatch)  {
        dispatch(signUpRequestUser());
        try{
            const res = await axios({
                method:"post",
                url: URL_User+'/register',
                data: user,
                });
                const {data} = res.data;
               
                if(res.data.success ===false && res.status ===200 && res.data.errors){
                    dispatch(signUpSuccessUser(res.data.erros));
                    toast.success('Succefully Registered');
               }
               else{
                   dispatch(signUpFailureUser(data));
               }

          
        }catch(error){
                   
            if(error.response && error.response.status ===400){
                dispatch(signUpFailureUser(error.response.data));
            
           }
           else{
               dispatch(signUpFailureUser(error));
           }

            
             
           
        }
    };
};

//Sign in  USER

const signInRequestUser = () =>{
    return {
        type: SIGN_IN_USER_REQUEST
    };
};

const signInSuccessUser = (payload) =>{
    return {
        type: SIGN_IN_USER_SUCCESS,
        payload
    };
};

const signInFailureUser = (error) =>{
 
    return {
        type: SIGN_IN_USER_FAILURE,
        payload: error,
    };
};

export const signinUser = (payload,history) =>{

    return async function (dispatch) {
    
        dispatch(signInRequestUser);
        try{
    
           const res= await axios({
                method:"POST",
                url: URL_User+"/login",
                data:payload,
                headers:{
                    "Content-type":"application/json",
                    "Accept":"application/json",
                }
            })           
             
            const {access_token,id, user_name:{name} } = res.data;

              
                localStorage.setItem("USER-TOKEN",access_token);
                // localStorage.setItem("USER-EMAIL",email);
                localStorage.setItem("USER-ID",id);
                localStorage.setItem("USER-NAME",name);
                dispatch(signInSuccessUser({access_token,id,name}));
                toast.success('Succefully Logged in');
        }catch(error){
            if(error.response && error.response.status === 404){
                dispatch(signInFailureUser(error.response.data));
            
           }
           else{
               dispatch(signUpFailureUser(error));
           }
           
           
        }
        
    };
};

// sign out USER

export const signOutRequestUser = () =>{
    return {
        type: SIGN_OUT_USER_REQUEST,
    };
};

export const signOutSuccessUser = () =>{
    return {
      type: SIGN_OUT_USER_SUCCESS,
    };
  };

export const signOutFailureUser = () =>{
    return {
        type: SIGN_OUT_USER_FAILURE
    };
};

export const signOutUser = () =>{
    return async function(dispatch){
        dispatch(signOutRequestUser());
        try{
    
            const res= await axios({
                 method:"POST",
                 url: URL_User+"/logout",
                 headers:{
                     "Content-type":"application/json",
                     "Accept":"application/json",
                 }
             }) 
        localStorage.removeItem("USER-TOKEN");
        // localStorage.removeItem("USER-EMAIL");
        localStorage.removeItem("USER-ID");
        localStorage.removeItem("USER-NAME");
        toast.success('Logged out');
            }
            catch(error){
                if(localStorage.getItem("USER-TOKEN")!== null){
                    dispatch(signOutFailureUser());
                }
                else{
                    dispatch(signOutSuccessUser());
                }
            }
       
    };
}


///////////////////////////////////////GUEST /////////////////////////////

/////// FETCH ALL SUBCATEGORY CATEGORY AND SERVICES //////////////////////////////

const fetchAllDataGuestRequest = () =>{
    return{
        type: GET_ALL_SUCATEGORY_CATEGORY_SERVICE_REQUEST_GUEST,
        payload: {
            loading: true
          }
    };
};

const fetchAllDataGuestSuccess = (guestData) =>{
    
    return{
        type: GET_ALL_SUCATEGORY_CATEGORY_SERVICE_SUCCESS_GUEST,
        payload: {
            guestData
        }
    };
};

const fetchAllDataGuestFailure = (errorDataGuest) =>{
    return {
        type: GET_ALL_SUCATEGORY_CATEGORY_SERVICE_FAILED_GUEST,
        payload:errorDataGuest
    };
};

export const fetchAllDataGuest = (payload) =>{
       
    return async function (dispatch) {
        dispatch(fetchAllDataGuestRequest());
        try{
            const res = await axios({
                    method:"get",
                    url: URL_Guest+'/categories',
                  
                   
                });
           
                  
                const result = res.data;
                let payload=[];

                ///////////CAT AND SUB AND SERVICES/////////
                // result.map((cat)=>{
                  
                //     if(cat.length!==0 && cat.subcategories_accepted.length>0 ){
                //         console.log(cat)
                //       payload.push(cat);
                //     }
                // })
                ///////////CAT AND SUB AND SERVICES/////////


                //////////HOLY CODE /////////////////////////////HOLY CODE /////////////////////////////HOLY CODE /////////////////////////////HOLY CODE ///////////////////
                //  result.map((res)=>{
                       
                //     if(res.subcategories_accepted.length>0){
                     
                //           res.subcategories_accepted.map((result)=>  {
                         
                //              if(result.services_accepted.length>0){
                                   
                //                       payload=[...payload,  
                //                         ...result.services_accepted,
                                     

                //                     ];
                            
                //           }
                //     });
                // }});
                //////////HOLY CODE /////////////////////////////HOLY CODE /////////////////////////////HOLY CODE ///////////////////

         
                // result.map((res)=>{
                       
                //     if(res.subcategories_accepted.length>0){
                     
                //           res.subcategories_accepted.map((result)=>  {
                         
                //              if(result.services_accepted.length>0){
                                   
                //                       payload=[...payload,  ...result.services_accepted];
                            
                //           }
                //     });
                // }});
                ///////////////// SERVICES ONLY ///////
/////////you get sub and services//////////////
               
                result.map((res)=>{
                
                   if(res.subcategories_accepted.length>0){
                         res.subcategories_accepted.map((result)=>  {
                        
                            if(result.services_accepted.length>0){
                                  result.services_accepted.map((value)=>{
                                    payload=[...payload, { ...value,
                                        subcategory:result,
                                        category:res
                                    }];

                                  })
                         }
                   });
               }});
/////////you get sub and services//////////////
                
         
              
                dispatch({type:ACCEPTED_SERVICES,payload})
                dispatch(fetchAllDataGuestSuccess(result));
                // dispatch(fetchAllAcceptedServicesFailure("")); 
           
                
        }catch(errorDataGuest){
           
                dispatch(fetchAllDataGuestFailure(errorDataGuest.response.data));
                
        }
    };
};

/////////////////FETCH ILLUSTRATOR GUEST ////////////////

const fetchIlllustratorGuestRequest = () =>{
    return{
        type: GET_ALL_SUB_ILLUSTRATOR_SERVICE_REQUEST_GUEST,
        payload: {
            loading: true
          }
    };
};

const fetchIlllustratorGuestSuccess = (guestIllustratorData) =>{
    
    return{
        type: GET_ALL_SUB_ILLUSTRATOR_SERVICE_SUCCESS_GUEST,
        payload: {
            guestIllustratorData
        }
    };
};

const fetchIlllustratorGuestFailure = (errorIllustratorDataGuest) =>{
    return {
        type: GET_ALL_SUB_ILLUSTRATOR_SERVICE_FAILED_GUEST,
        payload:errorIllustratorDataGuest
    };
};

export const fetchIllustratorDataGuest = (payload) =>{
       
    return async function (dispatch) {
        dispatch(fetchIlllustratorGuestRequest());
        try{
            const res = await axios({
                    method:"get",
                    url: URL_Guest+'/paginateServiceSubcategory',
                                   
                });                
                const result = res.data;         
                
              
                dispatch(fetchIlllustratorGuestSuccess(result));
                       
                
        }catch(errorDataGuest){
           
                dispatch(fetchIlllustratorGuestFailure(errorDataGuest.response.data));
                
        }
    };
};

////////////GET COMMENTS ////////////////////////
const getCommentsRequestGuest = () =>{
    
    return{
        type: GET_COMMENT_REQUEST_GUEST,
    };
};

const getCommentsSuccessGuest = (commentsData) =>{

    return{
        type: GET_COMMENT_SUCCESS_GUEST,
        payload: 
        commentsData
        
    };
};

const getCommentsFailedGuest = (ErrorGetComments) =>{
   
    return {
        type: GET_COMMENT_FAILED_GUEST,
        payload:ErrorGetComments
    };
};

export const getCommentsGuest =  (service_id) =>{
  
    return async function (dispatch) {

        dispatch(getCommentsRequestGuest());
    try{
       const response = await axios({
            method:"get",
            url: URL_Guest +`/getComments/${service_id}`,
         
        });

        const data = response.data;
        
        dispatch(getCommentsSuccessGuest(data));

        
                        
    }catch(ErrorGetComments){
     
        dispatch(getCommentsFailedGuest(ErrorGetComments.response.data));
    }
     
    };
};