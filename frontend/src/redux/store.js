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