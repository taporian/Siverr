import React from 'react'
import { Table } from '../TableUser'
export default function MyOrderPendingList({myOrderPendingData}) {
    return (
       <>
       {console.log('myOrderPendingData',myOrderPendingData)}
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
   {myOrderPendingData.length>0 && myOrderPendingData.map((pending)=>(
     <>
   <Table.TR >
   <Table.TH  >{pending.services.title}</Table.TH>
   <Table.TH  >{pending.services.price}</Table.TH>
   <Table.TH  >{pending.services.user.name}</Table.TH>
   <Table.TH >{pending.services.user.email}</Table.TH>
   <Table.TH  >{pending.services.user.phone}</Table.TH>
   </Table.TR> 
   </>
   ))}
   </Table.Body> 
  
 
  </Table>
       </>
    )
}
