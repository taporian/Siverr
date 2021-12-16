import React from 'react'
import { InputFormTxt } from './styled/Form.style'
export default function Input({isDisabled,children,register,...rest}) {
    return (
        <>
          {isDisabled?
          <InputFormTxt  {...rest} disabled>
      
              {children}
          </InputFormTxt>:
          <InputFormTxt {...rest}>
               
          {children}
      </InputFormTxt>
          }  
        </>
    )
}
