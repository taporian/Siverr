import React from 'react'
import { Table } from '../TableUser'
export default function RecivedOrderAcceptedList({recievedOrderAcceptedData,errorRecievedOrderAccepted}) {
    return (
       <>
      
       {!errorRecievedOrderAccepted ?
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
   {recievedOrderAcceptedData.length>0 && recievedOrderAcceptedData.map((accept)=>(
     <>
   <Table.TR >
   <Table.TH  >{accept.service.title}</Table.TH>
   <Table.TH  >{'$'+accept.price}</Table.TH>
   <Table.TH  >{accept.users.name}</Table.TH>
   <Table.TH >{accept.users.email}</Table.TH>
   <Table.TH  >{accept.users.phone}</Table.TH>
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
 <Table.TH  >{errorRecievedOrderAccepted.message}</Table.TH>
 </Table.TR> 
 </Table>

 </>

   }
       </>
    )
}
