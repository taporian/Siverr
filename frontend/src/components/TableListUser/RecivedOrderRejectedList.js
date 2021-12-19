import React from 'react'
import { Table } from '../TableUser'
export default function RecivedOrderRejectedList({recievedOrderRejectedData,errorRecievedOrderRejected}) {
    return (
       <>
       {console.log('inside',errorRecievedOrderRejected)}
       {!errorRecievedOrderRejected ? 
       
       <Table key={0}>
   <Table.Head>
     <Table.TR >
       <Table.TH  >Service</Table.TH>
       <Table.TH  >Price</Table.TH>
       <Table.TH  >Buyer</Table.TH>
       <Table.TH  >Buyer's Email</Table.TH>
       <Table.TH  >Buyer's Phone</Table.TH>
       </Table.TR>
  </Table.Head>
  
   <Table.Body>
  
   {recievedOrderRejectedData.length>0 && recievedOrderRejectedData.map((rejected)=>(
     <>
   <Table.TR >
   <Table.TH  >{rejected.service.title}</Table.TH>
   <Table.TH  >{'$'+rejected.price}</Table.TH>
   <Table.TH  >{rejected.users.name}</Table.TH>
   <Table.TH >{rejected.users.email}</Table.TH>
   <Table.TH  >{rejected.users.phone}</Table.TH>
   </Table.TR> 
   </>
   ))}
   
      
   </Table.Body> 
  
 
  </Table>

   : 
   <>
    <Table key={0}>
   <Table.Head>
   <Table.TR >
     <Table.TH  >Message</Table.TH>
     </Table.TR>
</Table.Head>
<Table.TR> 
   <Table.TH  >{errorRecievedOrderRejected.message}</Table.TH>
   </Table.TR> 
   </Table>

   </>
}
       </>
    )
}
