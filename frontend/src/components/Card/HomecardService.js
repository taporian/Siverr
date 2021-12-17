import React from 'react'
import { useHistory } from 'react-router-dom';
import { URL_Image } from '../URL';
import './homecard.css';

export default function HomecardService({services}) {
  
const history = useHistory()
    
    return (
        <>
  
<div className="home-card">
    <div className="home-card-image-container">
  <img src={URL_Image+services.image} alt="Denim Jeans" className="home-card-image" />
  
  </div>
  {console.log(services)}
 
  <div className="home-card-info">   
  <a  className='home-a'  >
      <p className="home-title" onClick={()=>history.push({
            pathname : `/`,
            state :{
              redirect:services.category.name.replace(/\s+/g, '-')+'/'+services.subcategory.name.replace(/\s+/g, '-')+'/'+services.title.replace(/\s+/g, '-')+'/'+services.id,
            }
            })}>{services.title}</p></a>
  <p className="home-price"><span className='home-span'>STARTING AT</span> ${services.price}</p>
 
  </div>
</div>
        </>
        
    )
        
}
// href={`${services.category.name.replace(/\s+/g, '-')+'/'+services.subcategory.name.replace(/\s+/g, '-')+'/'+services.title.replace(/\s+/g, '-')+'/'+services.id}`}