import React,{useEffect} from 'react'
import './adminDashboard.css'
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {Container,Row } from 'react-bootstrap';
import {  acceptedScreen, fetchAcceptedServices,fetchPendingServices,fetchRejectedServices, pendingScreen, rejectedScreen, signOutAdmin } from "../../../redux/action-creators";
import ServiceCard from '../../../components/ServiceCard';
import SidebarAdmin from '../../../components/SidebarAdmin'
import {ImCross} from 'react-icons/im';
import {BsFillPatchCheckFill} from 'react-icons/bs';
import {RiSearchEyeLine} from 'react-icons/ri';
import Invoices from '../../../components/Invoices';
import NavbarAdmin from '../../../components/NavbarAdmin';
import Sidebar from '../../../components/Sidebar';
import TableList from '../../../components/TableList';

export default function AdminDashboard() {
  const rejected_services ="REJECTED SERVICES";
  const pending_services ='PENDING ' + '\xa0'+ 'SERVICES';
  const accepted_services ="ACCEPTED SERVICES";
  const pending_icon = <span className="material-icons service-icon-color">pending_actions </span>;
  const rejected_icon = <ImCross style={{'color':'red',"width":"15%","height":"15%"}}/>;
  const accepted_icon = <BsFillPatchCheckFill style={{'color':'green',"width":"15%","height":"15%"}} />;
    const dispatch = useDispatch();
    const history = useHistory();
    const currentAdmin=localStorage.getItem('ADMIN-NAME');
    const handleSignOut = () => {
        dispatch(signOutAdmin(history));
      };
      const  { pendingServiceData, errorPending } = useSelector((state) =>  state.fetchAllPendingServiceReducer);
      const  { acceptedServiceData, errorAccepted } = useSelector((state) =>  state.fetchAllAcceptedServiceReducer);
      const  { rejectedServiceData, errorRejected } = useSelector((state) =>  state.fetchAllRejectedServiceReducer);
      const {openAccepted,openPending,openRejected} = useSelector((state) =>  state.toggleScreensReducer);

 
    return (
        <Container fluid>
        <Row>    
     <div className="col-md-9 col-lg-10 ml-md-auto px-0 w-100 content-admin-dashboard" >
     
         <main className="container-fluid container-adjustment"  >
              <Container >
              <section className="row admin-dashboard-service-cards" >
              <div className="col-md-6 col-lg-3">
                <article className="p-4 rounded  border-left
                     mb-4">
                      <ServiceCard  state={pendingScreen}  fetchServices={fetchPendingServices} servicesText={pending_services} icon={pending_icon}/>
                  </article>
          
                </div>
                <div className="col-md-6 col-lg-3">
                <article className="p-4 rounded  border-left
                     mb-4">
                      <ServiceCard   state={acceptedScreen} fetchServices={fetchAcceptedServices}  servicesText={accepted_services} icon={accepted_icon}/>
                  </article>
              
                </div>
                <div className="col-md-6 col-lg-3">
                <article className="p-4 rounded  border-left
                     mb-4">
                      <ServiceCard  state={rejectedScreen} fetchServices={fetchRejectedServices}  servicesText={rejected_services} icon={rejected_icon}/>
                  </article>
             
                </div>
                
              </section>
              </Container>
              
              <div className="jumbotron jumbotron-fluid rounded bg-white border-0 shadow-sm border-left px-4">
        <Container>

        {!errorPending? 
        pendingServiceData.length > 0 && openPending && <TableList serviceData={pendingServiceData} /> 
        : openPending && <TableList serviceData={pendingServiceData} errors={errorPending}/> 
        
        }
        {/* ///wont go inside because of acceptedServiceData.length  */}
        {!errorAccepted ?
          
        acceptedServiceData.length > 0 && openAccepted && <TableList   serviceData={acceptedServiceData}  />
          : openAccepted && <TableList serviceData={acceptedServiceData}   errors={errorAccepted}  />
      } 
       {!errorRejected ?
          rejectedServiceData.length > 0 && openRejected &&  <TableList serviceData={rejectedServiceData}  /> :
          openRejected &&  <TableList serviceData={rejectedServiceData} errors={errorRejected} /> 
          } 

        </Container>

      </div>
      
            </main>
          
          </div>
         
         
        </Row>
        
      </Container>
    )
}

