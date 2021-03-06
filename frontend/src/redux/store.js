import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";

import {authenticationReducer, 
  fetchAllPendingServiceReducer,
  fetchAllAcceptedServiceReducer,
  fetchAllRejectedServiceReducer,
  toggleScreensReducer,
  fetchAllAcceptedCategoryUserReducer,
  fetchAllCategoryUserReducer,
  fetchAllSubCategoryByCategoryIDUserReducer,
  createServiceReducer,
  acceptServiceAdminReducer,
  rejectServiceAdminReducer,
  fetchAllDataGuestReducer,
  fetchIllustratorDataGuestReducer,
  fetchAllRoomsUserReducer,
  contactSellerReducer,
  postOrderReducer,
  fetchAllMyPendingOrderUserReducer,
  fetchAllMyAcceptedOrderUserReducer,
  fetchAllMyRejectedOrderUserReducer,
  fetchAllRecievedPendingOrderUserReducer,
  fetchAllRecievedAcceptedOrderUserReducer,
  fetchAllRecievedRejectedOrderUserReducer,
  acceptOrderUserReducer,
  rejectOrderUserReducer,
  getCommentsGuestReducer,
  postCommentUserReducer,
  fetchAllMyPendingServiceUserReducer,
  fetchAllMyAcceptedServiceUserReducer,
  fetchAllMyRejectedServiceUserReducer,
  fetchVoiceGuestReducer,
} from "./reducer";

const createRootReducer = () =>
combineReducers({
  authenticationReducer,
  fetchAllPendingServiceReducer,
  fetchAllAcceptedServiceReducer,
  fetchAllRejectedServiceReducer,
  toggleScreensReducer,
  fetchAllAcceptedCategoryUserReducer,
  fetchAllCategoryUserReducer,
  fetchAllSubCategoryByCategoryIDUserReducer,
  createServiceReducer,
  acceptServiceAdminReducer,
  rejectServiceAdminReducer,
  fetchAllDataGuestReducer,
  fetchIllustratorDataGuestReducer,
  fetchAllRoomsUserReducer,
  contactSellerReducer,
  postOrderReducer,
  fetchAllMyPendingOrderUserReducer,
  fetchAllMyAcceptedOrderUserReducer,
  fetchAllMyRejectedOrderUserReducer,
  fetchAllRecievedPendingOrderUserReducer,
  fetchAllRecievedAcceptedOrderUserReducer,
  fetchAllRecievedRejectedOrderUserReducer,
  acceptOrderUserReducer,
  rejectOrderUserReducer,
  getCommentsGuestReducer,
  postCommentUserReducer,
  fetchAllMyPendingServiceUserReducer,
  fetchAllMyAcceptedServiceUserReducer,
  fetchAllMyRejectedServiceUserReducer,
  fetchVoiceGuestReducer,
});

const initState = {
    authenticationReducer: {
        currentAdmin: null,
      access_token: "",
      error: "",
      loading: false,
      isAuthenticated: false,
     
    },
    fetchAllPendingServiceReducer:{
      error:"",
      loading: false,
      pendingServiceData:[],
    
    },
    fetchAllAcceptedServiceReducer:{
      errorAccepted:"",
      loading: false,
      acceptedServiceData:[],
    },
    fetchAllRejectedServiceReducer:{
      error:"",
      loading: false,
      rejectedServiceData:[],
    },
    fetchAllAcceptedCategoryUserReducer:{
      errorAcceptedCategoryUser:"",
      loading: false,
      acceptedCategoryUserDataUser:[],
    },
    fetchAllCategoryUserReducer:{
      errorCategoryUser:"", 
      loading: false,
      categoryUserDataUser:[],
    },
    fetchAllSubCategoryByCategoryIDUserReducer:{
      fetchSubCategoryDataUsererror:"",
      loading: false,
      fetchSubCategoryDataUser:[],
    },
    createServiceReducer:{
      createServiceError:"",
      loading:false,
      postService:[],
    },
    acceptServiceAdminReducer:{
      acceptedServiceDataError:"",
      loading:false,
    acceptedServiceAdminData:[],
    },
    rejectServiceAdminReducer:{
      rejectServiceDataError:"",
      loading:false,
    rejectServiceAdminData:[],

    },
    fetchAllDataGuestReducer:{
      errorDataGuest:"",
      loading:false,
      guestData:[],
    },
    fetchIllustratorDataGuestReducer:{
      errorIllustratorDataGuest:"",
      guestIllustratorData:[],
      loading:false,

    },
    fetchAllRoomsUserReducer:{
      roomsUserData:[],
      loading:false,
      errorRooms:"",

    },
    contactSellerReducer:{
      loading:false,
      contactData:[],
      contactError:"",
    },
    postOrderReducer:{
      loading:false,
      postOrderData:[],
      postOrderError:"",
    },
    fetchAllMyPendingOrderUserReducer:
    {
      loading:false,
      myPendingOrderData:[],
      errorMyPendingOrder:"",
    },
    fetchAllMyAcceptedOrderUserReducer:
    {
      loading:false,
      myAcceptedOrderData:[],
      errorMyAcceptedOrder:"",
    },
    fetchAllMyRejectedOrderUserReducer:
    {
      loading:false,
      myRejectedOrderData:[],
      errorMyRejectedOrder:"",
    },

    fetchAllRecievedPendingOrderUserReducer:
    {
      loading:false,
      receivedPendingOrderData:[],
      errorRecievedPendingOrder:"",
    },
    fetchAllRecievedAcceptedOrderUserReducer:
    {
      loading:false,
      receivedAcceptedOrderData:[],
      errorRecievedAcceptedOrder:""
    
    },
    fetchAllRecievedRejectedOrderUserReducer:
    {
      loading:false,
      errorRecievedRejectedOrder:"",
      receivedRejectedOrderData:[],
    },
    acceptOrderUserReducer:
    {loading:false,
      acceptOrderData:[],
      ErroracceptOrder:"",
    },
    rejectOrderUserReducer:{
      loading:false,
      rejectOrderData:[],
      ErrorRejectOrder:"",
    },
    getCommentsGuestReducer:
    {
      loading:false,
      commentsData:[],
      ErrorGetComments:"",
    },
    postCommentUserReducer:
    {  loading:false,
      ErrorComment:"",    
      commentData:[],
    },
    fetchAllMyPendingServiceUserReducer:
    {
      loading:false,
      errorMyServicePending:"",       
      myServicePendingData:[],
    },
    fetchAllMyAcceptedServiceUserReducer:
    {
      loading:false,
      errorMyServiceAccepted:"",       
      myServiceAcceptedData:[],

    },

    fetchAllMyRejectedServiceUserReducer:
    {
      loading:false,
      errorMyServiceRejected:"",       
       myServiceRejectedData:[],
    },

    fetchVoiceGuestReducer:
    {
      loading:false,
      errorVoiceDataGuest:"",
      guestVoiceData:[]
    }

 
   

  
    
  
  
  }


export default function makeStore(initialState = initState) {
    let composeEnhancers = compose;
    const middlewares = [thunk];
  
    if (process.env.NODE_ENV === "development") {
      if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
        composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
      }
    }
    const store = createStore(
      createRootReducer(),
      initialState,
      composeEnhancers(applyMiddleware(...middlewares))
    );
  
    if (module.hot) {
      module.hot.accept("./reducer", () => {
        const nextReducer = require("./reducer").default;
        store.replaceReducer(nextReducer);
      });
    }
    return store;
  }