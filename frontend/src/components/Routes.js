import React,{useEffect} from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import NavBar from "./Navbar";
import SigninAdmin from "../pages/Admin/SignIn/SigninAdmin";
import { useSelector } from "react-redux";
import SignupAdmin from "../pages/Admin/SignUp/SignupAdmin";
import { GlobalStyle } from './styled/GlobalStyle.styled';
import Home from '../pages/User/Home/Home';
import AdminHome from "../pages/AdminHome";
import SigninUser from "../pages/User/SignIn/SigninUser";
import SignupUser from "../pages/User/SignUp/SignupUser";
import AdminDashboard from '../pages/Admin/Dashboard/AdminDashboard';
import AdminDashboard2 from "../pages/AdminDashboard2";
import SidebarAdmin from "./SidebarAdmin";
import AddService from "../pages/User/AddService/AddService";
import Block from "./Block/Block";
import Category from "../pages/Category/Category";

import Footer from "../pages/User/footer/Footer";
import Subcategory from "../pages/Subcategory/Subcategory";
import Service from "../pages/Service/Service";
import Chat from "./chats/Chat";
import Rooms from "./Rooms/Rooms";

export default function Routes(){
    const { access_token } = useSelector((state) => state.authenticationReducer );   // IF I REMOVE THIS IT WON'T REDIRECT ME
   
      const tokenAdmin = localStorage.getItem("ADMIN-TOKEN") ;
      const tokenUser = localStorage.getItem("USER-TOKEN") ;
      const params = window.location.href.includes("/admin");
      const params2 = window.location.href.includes("/admin/signin");

 
    
    return (
        <>
                
                    
                    
                 <GlobalStyle/>
                { !params &&  <NavBar token={tokenUser} />  }
                { params && !params2 && <SidebarAdmin token={tokenAdmin} />  }
                
                        <Switch>
                        <Route path="/block" component={Block} token={tokenUser} />
                        <LoginRouteUser path="/signin" component={SigninUser} token={tokenUser} />
                        <Route path="/signup" component={SignupUser} token={tokenUser} />  
                        <PrivateRouteUser path="/addService" component={AddService} token={tokenUser}/>
                    
                        <Route path="/" component={Home} exact token={tokenUser}/>
                        <PrivateRouteUser path="/room" component={Rooms} exact token={tokenUser}/>
                        <PrivateRouteUser exact path='/chat' component={Chat} token={tokenUser} />   
                     
                        <PrivateRouteAdmin path="/admin/home" component={AdminDashboard} exact token={tokenAdmin}/>
                        <PrivateRouteAdmin path="/admin/home2" component={AdminDashboard2} exact token={tokenAdmin}/>
                        <LoginRouteAdmin path="/admin/signin" component={SigninAdmin} token={tokenAdmin} />
                    
                       
                        <Route path="/:cat" exact component={Category} />
                        <Route path="/:cat/:sub" exact component={Subcategory} />
                        <Route  path="/:cat/:sub/:title/new" component={Service}/>
                        <Route path="/:cat/:sub/:title/:id"  exact  component={Service} />
                                                                               
                

                    
                           
                        {/* <Route path="/signup" component={SignupAdmin} token={tokenAdmin} />                        */}
                        </Switch>
                    
                      
                        {!params &&  <Footer /> }
              
       
        </>
    )
}
function LoginRouteUser({ path, component: Component, token, ...props }) {
    return (
        <Route
            {...props}
            path={path}
            render={(props) =>
                token ? <Redirect to="/" /> : <Component {...props} />
            }
        />
    );
}
function PrivateRouteUser({ path, component: Component, token, ...props }) {
    return (
        <Route
            {...props}
            path={path}
            render={(props) =>
                token ? <Component {...props} /> : <Redirect to="/signin" />
            }
        />
    );
}

function LoginRouteAdmin({ path, component: Component, token, ...props }) {
    return (
        <Route
            {...props}
            path={path}
            render={(props) =>
                token ? <Redirect to="/admin/home" /> : <Component {...props} /> 
            }
        />
    );
}
function PrivateRouteAdmin({ path, component: Component, token, ...props }) {
    // if(localStorage.getItem('ADMIN-TOKEN')){
    return (
        <Route
            {...props}
            path={path}
            render={(props) =>
                token ? <Component {...props} /> : <Redirect to="/admin/signin" /> 
            }
        />
    );
        // }
        // else{
        //     return (
        //         <Redirect to="/admin/signin" /> 
        //     )
        // }
}