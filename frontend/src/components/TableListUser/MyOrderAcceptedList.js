import React from 'react'
import { Table } from '../TableUser'
export default function MyOrderAcceptedList({myAcceptedOrderData,ErrormyOrderAccepted}) {
    return (
       <>
       {!ErrormyOrderAccepted ?
       <Table key={0}>
       
   <Table.Head>
     <Table.TR >
       <Table.TH  >Service</Table.TH>
       <Table.TH  >Price</Table.TH>
       <Table.TH  >Provider</Table.TH>
       <Table.TH  >Provider's Email</Table.TH>
       <Table.TH  >Provider's Phone</Table.TH>
       </Table.TR>
  </Table.Head>
   <Table.Body>
   {myAcceptedOrderData.length>0 && myAcceptedOrderData.map((accepted)=>(
     <>
   <Table.TR >
   <Table.TH  >{accepted.services.title}</Table.TH>
   <Table.TH  >{accepted.services.price}</Table.TH>
   <Table.TH  >{accepted.services.user.name}</Table.TH>
   <Table.TH >{accepted.services.user.email}</Table.TH>
   <Table.TH  >{accepted.services.user.phone}</Table.TH>
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
 <Table.TH  >{ErrormyOrderAccepted.message}</Table.TH>
 </Table.TR> 
 </Table>

 </>
}
       </>
    )
}
