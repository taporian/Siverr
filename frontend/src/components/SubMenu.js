import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {GoSignOut} from 'react-icons/go';
// import { useDispatch } from "react-redux";
import { signOutAdmin } from '../redux/action-creators';
const SidebarLink = styled(Link)`
  display: flex;
  color: #b3b7c2;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    background: #222b48;
    border-left: 4px solid #632ce4;
    cursor: pointer;
    color:#ffffff;
  }
`;
const Signout = styled.div`
 display: flex;
  color: #b3b7c2;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    background: #222b48;
    border-left: 4px solid #632ce4;
    cursor: pointer;
    color:#ffffff;
  }


`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: #2C3658;
  height: 60px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
  &:hover {
    background: #222b48;
    cursor: pointer;
    color: white;
  }
`;

const SubMenu = ({ item }) => {
  const dispatch = useDispatch();
  //   const history = useHistory();
  // const paramsSingOut = window.location.href.includes("/admin/signout");
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);
// if(paramsSingOut){
//   console.log('sinout')
//   dispatch(signOutAdmin(history));
// }
  return (
    <>
  {item && !item.function?
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      :
      <Signout onClick={()=>dispatch(signOutAdmin())}><GoSignOut/><div style={{'margin-right':'7rem'}}>Sign Out</div></Signout>}
   

    {/* // these are the dropdownsLink */}
      {subnav &&
        item.subNav.map((item, index) => {
         
          if(item.function === undefined){
         
            return (
              <DropdownLink to={item.path} key={index}>
                {item.icon}
                <SidebarLabel>{item.title}</SidebarLabel>
              </DropdownLink>
            );
          }else{
            console.log("part 2")
            return (<a onClick={()=>dispatch(item.function)}>signout</a>);
          }
         
        })}
    </>
  );
};

export default SubMenu;