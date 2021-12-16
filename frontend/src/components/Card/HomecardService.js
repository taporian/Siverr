import React from 'react'
import { URL_Image } from '../URL';
import './homecard.css';

export default function HomecardService({services}) {
  

    
    return (
        <>
  
<div className="home-card">
    <div className="home-card-image-container">
  <img src={URL_Image+services.image} alt="Denim Jeans" className="home-card-image" />
  
  </div>
  {console.log(services)}
 
  <div className="home-card-info">   
  <a  className='home-a' href={`${services.category.name.replace(/\s+/g, '-')+'/'+services.subcategory.name.replace(/\s+/g, '-')+'/'+services.title.replace(/\s+/g, '-')+'/'+services.id}`} >
      <p className="home-title">{services.title}</p></a>
  <p className="home-price"><span className='home-span'>STARTING AT</span> ${services.price}</p>
 
  </div>
</div>
        </>
        
    )
        
}
