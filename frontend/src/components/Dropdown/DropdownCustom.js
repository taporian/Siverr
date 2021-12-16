import React from 'react'
import './DropdownCustom.css';
import { useSelector } from "react-redux";
export default function DropdownCustom() {
    const  { guestData, errorDataGuest } = useSelector((state) =>  state.fetchAllDataGuestReducer);
    return (
        <>
            <div id="container-dropdown">
    <nav className='nav-dropdown'style={{'border-top':'1px solid #e4e5e7','border-bottom':'1px solid #e4e5e7','width':'100%'}}>
        <ul className='ul-dropdown'>
            {guestData && guestData.guestData && guestData.guestData.map(guest=>(

<li className='li-dropdown' style={{'padding':'0 1rem'}}><a className='a-dropdown' href={`/${guest.name.replace(/\s+/g, '-')}`}>{guest.name}</a>   

 
 <ul className='ul-dropdown'>
 {guest && guest.subcategories_accepted.length>0 && guest.subcategories_accepted.map(subcategory=>(
   
 <li className='li-dropdown'><a className='a-dropdown'  href={`/${guest.name.replace(/\s+/g, '-')}/${subcategory.name.replace(/\s+/g, '-')}`}>{subcategory.name}</a></li>
 ))}
</ul>  
          
                 
</li>

            ))}
          
           
        </ul>
    </nav>
</div>
        </>
    )
}
