import React from 'react'
import { Table } from '../TableUser'
export default function MyOrderRejectedList({myRejectedOrderData,ErrormyOrderRejected}) {
    return (
       <>
       {!ErrormyOrderRejected ?
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
   {myRejectedOrderData.length>0 && myRejectedOrderData.map((rejected)=>(
     <>
   <Table.TR >
   <Table.TH  >{rejected.services.title}</Table.TH>
   <Table.TH  >{rejected.services.price}</Table.TH>
   <Table.TH  >{rejected.services.user.name}</Table.TH>
   <Table.TH >{rejected.services.user.email}</Table.TH>
   <Table.TH  >{rejected.services.user.phone}</Table.TH>
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
<Table.TH  >{ErrormyOrderRejected.message}</Table.TH>
</Table.TR> 
</Table>

</>

   }
       </>
    )
}
