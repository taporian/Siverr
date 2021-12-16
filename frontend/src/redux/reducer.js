import jwt from 'jsonwebtoken';

import{
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

    ACCCEPT_SERVICE_REQUEST_ADMIN,
    ACCCEPT_SERVICE_SUCCESS_ADMIN,
    ACCCEPT_SERVICE_FAILED_ADMIN,

    REJECT_SERVICE_PENDING_REQUEST_ADMIN,
    REJECT_SERVICE_PENDING_SUCCESS_ADMIN,
    REJECT_SERVICE_PENDING_FAILED_ADMIN,



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


    ACCEPTED,
    REJECTED,
    PENDING,




    SIGN_IN_USER_FAILURE,
    SIGN_IN_USER_REQUEST,
    SIGN_IN_USER_SUCCESS,
    SIGN_UP_USER_FAILURE,
    SIGN_UP_USER_REQUEST,
    SIGN_UP_USER_SUCCESS,
    SIGN_OUT_USER_FAILURE,
    SIGN_OUT_USER_REQUEST,
    SIGN_OUT_USER_SUCCESS,

    GET_ALL_SUCATEGORY_CATEGORY_SERVICE_REQUEST_GUEST,
    GET_ALL_SUCATEGORY_CATEGORY_SERVICE_SUCCESS_GUEST,
    GET_ALL_SUCATEGORY_CATEGORY_SERVICE_FAILED_GUEST,
    ACCEPTED_SERVICES,


    GET_ALL_SUB_ILLUSTRATOR_SERVICE_REQUEST_GUEST,
    GET_ALL_SUB_ILLUSTRATOR_SERVICE_SUCCESS_GUEST,
    GET_ALL_SUB_ILLUSTRATOR_SERVICE_FAILED_GUEST, 


} from './action-types';

export const isValidToken = (access_token) =>{
  
    let decoded = jwt.decode(access_token);
  
    return new Date(decoded.exp * 1000) > new Date() ? decoded : null;
};

const iniState ={
    // currentAdmin: localStorage.getItem("ADMIN-TOKEN")
    //     ? isValidToken(localStorage.getItem("ADMIN-TOKEN"))
    //     : null,
    currentAdmin:"",
    currentUser:"",
        access_token: localStorage.getItem("ADMIN-TOKEN")
        ? localStorage.getItem("ADMIN-TOKEN")
        : null,
        access_token_user: localStorage.getItem("USER-TOKEN")
        ? localStorage.getItem("USER-TOKEN")
        : null,
    error:"",
    loading: false,
    isAuthenticated: false,
    pendingServiceData:[],
    acceptedServiceData:[],
    rejectedServiceData:[],
    openPending:false,
    openRejected:false,
    openAccepted:false,
    errorAccepted:"",
    errorPending:"",
    errorRejected:"",
    acceptedCategoryUserDataUser:[],
    categoryUserDataUser:[],
    errorCategoryUser:"",
    fetchSubCategoryDataUser:[],
    fetchSubCategoryDataUsererror:"",
    acceptedServiceDataError:"",
    acceptedServiceAdminData:[],
    rejectServiceAdminData:[],
    rejectServiceDataError:"",
    errorDataGuest:"",
    guestData:[],
    services:[],
    guestIllustratorData:[],
    errorIllustratorDataGuest:"",
    roomsUserData:[],
    errorRooms:"",
    contactData:[],
    contactError:"",
 
};

/////////////////////ADMIN////////////////////////////

//////////////ACCEPT SERVICE //////////////

export const rejectServiceAdminReducer = (state=iniState,action) =>{
    switch(action.type){
        case REJECT_SERVICE_PENDING_REQUEST_ADMIN:
            return{
                ...state,
                loading:false,
          
            };
        case REJECT_SERVICE_PENDING_SUCCESS_ADMIN:
           
            return{
                ...state,
                loading:false,
                rejectServiceDataError:null,    
                rejectServiceAdminData:action.payload.rejectServiceAdminData,
                
            };
        case REJECT_SERVICE_PENDING_FAILED_ADMIN:
            return{
                ...state,
                loading:false,
                rejectServiceDataError: action.payload
            };
            default:
                return{...state};
    }
}


//////////////ACCEPT SERVICE //////////////

export const acceptServiceAdminReducer = (state=iniState,action) =>{
    switch(action.type){
        case ACCCEPT_SERVICE_REQUEST_ADMIN:
            return{
                ...state,
                loading:false,
          
            };
        case ACCCEPT_SERVICE_SUCCESS_ADMIN:
           
            return{
                ...state,
                loading:false,
                acceptedServiceDataError:null,    
                acceptedServiceAdminData:action.payload.acceptedServiceAdminData,
                
            };
        case ACCCEPT_SERVICE_FAILED_ADMIN:
            return{
                ...state,
                loading:false,
                acceptedServiceDataError: action.payload
            };
            default:
                return{...state};
    }
}
////FETCH ALL REJECTED SERVICES ADMIN/////////////

export const toggleScreensReducer = (state=iniState,action) => 
{
    switch(action.type)
    {
      case PENDING:
          return {
            ...state,
            openPending:true,
            openRejected:false,
            openAccepted:false,
           
           
          }
      case REJECTED:
          return {
            ...state,
            openRejected:true,
            openAccepted:false,
            openPending:false,
         
         
          }
      
       case ACCEPTED:
        return {
            ...state,
            openRejected:false,
            openAccepted:true,
            openPending:false,
        
          

          }
         default:
             return {
                 ...state,
                
                //  openRejected:false,
                //  openAccepted:false,
                // openPending:false,
             }
      
    }
}

//////////////////////ADMIN/////////////


////// FETCH ALL REJECTED SERVICES ADMIN //////
export const fetchAllRejectedServiceReducer = (state=iniState,action) =>{
    switch(action.type){
        case GET_ALL_SERVICES_REJECTED_REQUEST_ADMIN:
            return{
                ...state,
                loading:false,
          
            };
        case GET_ALL_SERVICES_REJECTED_SUCCESS_ADMIN:
           
            return{
                ...state,
                loading:false,
                errorRejected:null,
              
                rejectedServiceData:action.payload.rejectedServiceData
            };
        case GET_ALL_SERVICES_REJECTED_FAILURE_ADMIN:
            return{
                ...state,
                loading:false,
                errorRejected: action.payload
            };
            default:
                return{...state};
    }
}


////FETCH ALL ACCEPTED SERVICES ADMIN/////////////

export const fetchAllAcceptedServiceReducer = (state=iniState,action) =>{
    switch(action.type){
        case GET_ALL_SERVICES_ACCEPTED_REQUEST_ADMIN:
            return{
                ...state,
                loading:false,
          
            };
        case GET_ALL_SERVICES_ACCEPTED_SUCCESS_ADMIN:
           
            return{
                ...state,
                loading:false,
                errorAccepted:null,
              
                acceptedServiceData:action.payload.acceptedServiceData
            };
        case GET_ALL_SERVICES_ACCEPTED_FAILURE_ADMIN:
            return{
                ...state,
                loading:false,
                errorAccepted: action.payload
            };
            default:
                return{...state};
    }
}


////FETCH ALL PENDING SERVICES ADMIN/////////////

export const fetchAllPendingServiceReducer = (state=iniState,action) =>{
    switch(action.type){
        case GET_ALL_SERVICES_PENDING_REQUEST_ADMIN:
            return{
                ...state,
                loading:false,
          
            };
        case GET_ALL_SERVICES_PENDING_SUCCESS_ADMIN:
           
            return{
                ...state,
                loading:false,
                error:null,   
                    
                pendingServiceData:action.payload.pendingServiceData
            };
        case GET_ALL_SERVICES_PENDING_FAILURE_ADMIN:
            return{
                ...state,
                loading:false,
                errorPending: action.payload
            };
            default:
                return{...state};
    }
}

///////////////////////////USER /////////////////
/////////CREATE SERVICE ///////

export const createServiceReducer = (state=iniState,action) =>{
    switch(action.type){
        case POST_CREATE_SERVICE_REQUEST_USER:
            return{
                ...state,
                loading:false,
          
            };
        case POST_CREATE_SERVICE_SUCCESS_USER:
           
            return{
                ...state,
                loading:false,
                createServiceError:null,    
                postService:action.payload.postService,
                
            };
        case POST_CREATE_SERVICE_FAILED_USER:
            return{
                ...state,
                loading:false,
                createServiceError: action.payload
            };
            default:
                return{...state};
    }
}

/////////FETCH SUBCATEGORY BY CATEGORY_ID ///////

export const fetchAllAcceptedCategoryUserReducer = (state=iniState,action) =>{
    switch(action.type){
        case GET_ALL_CATEGORY_ACCEPTED_REQUEST_USER:
            return{
                ...state,
                loading:false,
          
            };
        case GET_ALL_CATEGORY_ACCEPTED_SUCCESS_USER:
           
            return{
                ...state,
                loading:false,
                errorAcceptedCategoryUser:null,    
                acceptedCategoryUserDataUser:action.payload.acceptedCategoryUserDataUser,
                
            };
        case GET_ALL_CATEGORY_ACCEPTED_FAILED_USER:
            return{
                ...state,
                loading:false,
                errorAcceptedCategoryUser: action.payload
            };
            default:
                return{...state};
    }
}

////////// FECTH ALL ACCEPTED CATEGORY USER ///////////

export const fetchAllSubCategoryByCategoryIDUserReducer = (state=iniState,action) =>{
    switch(action.type){
        case GET_SUBCATEGORY_BY_CATEGORY_ID_REQUEST_USER:
            return{
                ...state,
                loading:false,
          
            };
        case GET_SUBCATEGORY_BY_CATEGORY_ID_SUCCESS_USER:
           
            return{
                ...state,
                loading:false,
                fetchSubCategoryDataUsererror:null,    
                fetchSubCategoryDataUser:action.payload.fetchSubCategoryDataUser,
                
            };
        case GET_SUBCATEGORY_BY_CATEGORY_ID_FAILED_USER:
            return{
                ...state,
                loading:false,
                fetchSubCategoryDataUsererror: action.payload
            };

        case EMPTY_SUBCATEGORY:
            return{
                ...state,
                loading:false,
                fetchSubCategoryDataUsererror:null,    
                fetchSubCategoryDataUser:[],
                
            }
            default:
                return{...state};
    }
}

////////// FECTH ALL CATEGORY USER ///////////

export const fetchAllCategoryUserReducer = (state=iniState,action) =>{
    switch(action.type){
        case GET_ALL_CATEGORY_REQUEST_USER:
            return{
                ...state,
                loading:false,
          
            };
        case GET_ALL_CATEGORY_SUCCESS_USER:
      
            return{
                ...state,
                loading:false,
                errorCategoryUser:null,    
                categoryUserDataUser:action.payload.categoryUserDataUser,
                
            };
        case GET_ALL_CATEGORY_FAILED_USER:
            return{
                ...state,
                loading:false,
                errorCategoryUser: action.payload
            };
            default:
                return{...state};
    }
}


////////// FETCH ALL ROOMS /////////////////

export const fetchAllRoomsUserReducer = (state=iniState,action) =>{
    switch(action.type){
        case GET_ROOMS_REQUEST_USER:
            return{
                ...state,
                loading:false,
          
            };
        case GET_ROOMS_SUCCESS_USER:
      
            return{
                ...state,
                loading:false,
                errorRooms:null,    
                roomsUserData:action.payload.roomsUserData,
                
            };
        case GET_ROOMS_FAILED_USER:
            return{
                ...state,
                loading:false,
                errorRooms: action.payload
            };
            default:
                return{...state};
    }
}
///////////////CONTACT SELLER USER ///////////

export const contactSellerReducer = (state=iniState,action) =>{
    switch(action.type){
        case CONTACT_SELLER_REQUEST_USER:
            return{
                ...state,
                loading:false,
          
            };
        case CONTACT_SELLER_SUCCESS_USER:
           
            return{
                ...state,
                loading:false,
                contactError:null,    
                contactData:action.payload.contactData,
                
            };
        case CONTACT_SELLER_FAILED_USER:
            return{
                ...state,
                loading:false,
                contactError: action.payload
            };
            default:
                return{...state};
    }
}

////SIGN IN AND SIGN UP////

export const authenticationReducer = (state=iniState,action) =>{
    switch(action.type){
        case SIGN_IN_ADMIN_REQUEST:
        case SIGN_UP_ADMIN_REQUEST:
        case SIGN_OUT_ADMIN_REQUEST:
            return{
                ...state,
                loading: true,
                currentAdmin: "",
                isAuthenticated:false,
            };
        case SIGN_IN_ADMIN_FAILURE:
        case SIGN_UP_ADMIN_FAILURE:
        case SIGN_OUT_ADMIN_FAILURE:
           
            return {
                ...state,
                loading: false,
                error: action.payload,
                currentAdmin: null,
                isAuthenticated: false,
            };
        case SIGN_UP_ADMIN_SUCCESS:
        case SIGN_IN_ADMIN_SUCCESS:
            
            return{
                ...state,
                loading:false,
                access_token: action.payload.access_token,
                currentAdmin: action.payload.email,
                isAuthenticated: true,
            };
        case SIGN_OUT_ADMIN_SUCCESS:
            localStorage.removeItem("ADMIN-TOKEN");
            return{
                ...state,
                isAuthenticated:false,
                loading:false,
                currentAdmin:"",
                token:"",
            };
           
                case SIGN_IN_USER_REQUEST:
                    case SIGN_UP_USER_REQUEST:
                    case SIGN_OUT_USER_REQUEST:
                        return{
                            ...state,
                            loading: true,
                            currentUser: "",
                            isAuthenticated:false,
                        };
                    case SIGN_IN_USER_FAILURE:
                    case SIGN_UP_USER_FAILURE:
                    case SIGN_OUT_USER_FAILURE:
                       
                        return {
                            ...state,
                            loading: false,
                            error: action.payload,
                            currentUser: null,
                            isAuthenticated: false,
                        };
                    case SIGN_UP_USER_SUCCESS:
                    case SIGN_IN_USER_SUCCESS:
                        
                        return{
                            ...state,
                            loading:false,
                            access_token: action.payload.access_token,
                            currentUser: action.payload.email,
                            isAuthenticated: true,
                        };
                    case SIGN_OUT_USER_SUCCESS:
                        localStorage.removeItem("USER-TOKEN");
                        return{
                            ...state,
                            isAuthenticated:false,
                            loading:false,
                            currentUser:"",
                            token:"",
                        };
                        default:
                            return{state};       
    }
};
//////////////////////////GUEST///////////////////////

////////////FETCH ALL DATA GUESTT ////////////////
export const fetchAllDataGuestReducer = (state=iniState,action) =>{
    switch(action.type){
        case ACCEPTED_SERVICES:
            return {
                ...state,
                services:action.payload,
            }
        case GET_ALL_SUCATEGORY_CATEGORY_SERVICE_REQUEST_GUEST:
            return{
                ...state,
                loading:false,
          
            };
        case GET_ALL_SUCATEGORY_CATEGORY_SERVICE_SUCCESS_GUEST:
           
            return{
                ...state,
                loading:false,
                errorDataGuest:null,       
                guestData:action.payload
            };
        case GET_ALL_SUCATEGORY_CATEGORY_SERVICE_FAILED_GUEST:
            return{
                ...state,
                loading:false,
                guestData: action.payload
            };
            default:
                return{...state};
    }
}
//////////////////FETCH ILLUSTRATOR GUEST ////////////
export const fetchIllustratorDataGuestReducer = (state=iniState,action) =>{
    switch(action.type){
      
        case GET_ALL_SUB_ILLUSTRATOR_SERVICE_REQUEST_GUEST:
            return{
                ...state,
                loading:false,
          
            };
        case GET_ALL_SUB_ILLUSTRATOR_SERVICE_SUCCESS_GUEST:
           
            return{
                ...state,
                loading:false,
                errorIllustratorDataGuest:null,       
                guestIllustratorData:action.payload
            };
        case GET_ALL_SUB_ILLUSTRATOR_SERVICE_FAILED_GUEST:
            return{
                ...state,
                loading:false,
                guestIllustratorData: action.payload
            };
            default:
                return{...state};
    }
}


export default authenticationReducer;