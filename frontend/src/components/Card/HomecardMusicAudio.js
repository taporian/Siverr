import React from 'react'
import { URL_Image } from '../URL';
import './homecard.css';

export default function HomecardMusicAudio({services}) {
  

    
    return (
        <>
  
<div className="home-card" style={{"background-color":"white"}}>
    <div className="home-card-image-container"  >
  <img src={URL_Image+services.image} alt="Denim Jeans" className="home-card-image" />
  
  </div>
  {console.log(services,'servicesservices')}
 
  <div className="home-card-info"style={{"height":"8rem"}} >
  <a  className='home-a' href={`${services.subcategories.categories.name.replace(/\s+/g, '-')+'/'+services.subcategories.name.replace(/\s+/g, '-')+'/'+services.title.replace(/\s+/g, '-')+'/'+services.id}`} >
      <p className="home-title">{services.title}</p>
      </a>
  <p className="home-price"  ><span className='home-span'>STARTING AT</span> ${services.price}</p>
 
  </div>
</div>
        </>
        
    )
        
}
