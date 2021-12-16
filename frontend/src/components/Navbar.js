import React,{useState,useEffect} from "react";
import { useDispatch } from "react-redux";
import {  signOutUser } from "../redux/action-creators";
import { fetchAllDataGuest,fetchIllustratorDataGuest } from "../redux/action-creators";
import {Nav,Logo,NavDropDown,Menu,MenuLink,DropButton} from './styled/Navbar.styled'
import {GoPrimitiveDot} from 'react-icons/go'
import DropdownCustom from "./Dropdown/DropdownCustom";
import { DropdownButton,Dropdown ,} from "react-bootstrap";




const Navbar = () => {
  

  
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const illustratorPage="?page=1"
  
  
  // const { currentUser } = useSelector((state) => state.authenticationReducer);
  const currentUser=localStorage.getItem('USER-NAME');
  const handleSignOut = () => {
    dispatch(signOutUser());
  };
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    dispatch(fetchAllDataGuest())
    dispatch(fetchIllustratorDataGuest(illustratorPage))
  
  }, [dispatch]);


  return (
    <>
    <Nav>
      <Logo href="/">
        Siverr<span ><GoPrimitiveDot style={{'color':'#18a563'}}/> </span>
      </Logo>
      <NavDropDown onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
        
      </NavDropDown>
      <Menu isOpen={isOpen}>
        <MenuLink href="/">Home</MenuLink>
        <MenuLink href="/signup">Sign Up</MenuLink>
        <MenuLink href="/addService">Add Service</MenuLink>
        <MenuLink href="/room">Messages</MenuLink>
       
        {currentUser !=null ? (
          <DropButton>
            {/* ${currentUser.charAt(0).toUpperCase()} */}
            <DropdownButton id="dropdown-basic-button"  title={`${currentUser}`}>
          <Dropdown.Item href="/" onClick={handleSignOut}>Sign Out</Dropdown.Item>
          <Dropdown.Item href="/dashboard">Manage Orders</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
           
          </DropButton>
        
       
        ) : (
        <MenuLink href="/signin">Sign In </MenuLink>
        )}         
      </Menu>   
      <DropdownCustom/>
    </Nav>
  

  
     {/* <Nav>    */}
      
    {/* <Menu style={{'border-top':'1px solid #e4e5e7','border-bottom':'1px solid #e4e5e7','width':'100%'}}>    
  {console.log('guestData',guestData)}
      {
      guestData && guestData.guestData && guestData.guestData.map(guest=>(
      
         
        <MenuLinkRoute  href={`/${guest.name.replace(/\s+/g, '-')}`}>{guest.name}</MenuLinkRoute>
       
       
      ))}    
      </Menu> */}
   {/* </Nav> */}

   
   </>
  );
};

export default Navbar;