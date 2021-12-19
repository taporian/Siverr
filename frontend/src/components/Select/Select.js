import React from 'react';
import './select.css';
export default function Select({isDisabled,children,...rest}) {
    return (
        <>
          {isDisabled?
          <select className='select-comp' {...rest} disabled>
              {children}
          </select>:
          
          <select className='select-comp'  {...rest}>
          {children}
      </select>
          }  
        </>
    )
}
