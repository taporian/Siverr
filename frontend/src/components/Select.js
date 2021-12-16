import React from 'react'

export default function Select({isDisabled,children,...rest}) {
    return (
        <>
          {isDisabled?
          <select {...rest} disabled>
              {children}
          </select>:
          <select {...rest}>
          {children}
      </select>
          }  
        </>
    )
}
