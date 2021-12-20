import React from 'react'
import { Table } from '../TableUser'

export default function MyServiceRejectedList({myServiceRejectedData,errorMyServiceRejected}) {

  
    return (
       <>
       {console.log('myServicePendingData',myServiceRejectedData)}
       {!errorMyServiceRejected ?
       <Table key={0}>
   <Table.Head>
     <Table.TR >
       <Table.TH  >Service</Table.TH>
       <Table.TH  >Description</Table.TH>
       <Table.TH  >Price</Table.TH>
       <Table.TH  >Reason for Rejection</Table.TH>
       
      
       </Table.TR>
  </Table.Head>
  
   <Table.Body>
   {myServiceRejectedData.length>0 && myServiceRejectedData.map((rejected)=>(
     <>
   <Table.TR >
   <Table.TH  >{rejected.title}</Table.TH>
   <Table.TH  >{rejected.description}</Table.TH>
   <Table.TH  >{rejected.price}</Table.TH>
   <Table.TH  >{rejected.reason_for_rejection}</Table.TH>
  
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
<Table.TH  >{errorMyServiceRejected.message}</Table.TH>
</Table.TR> 
</Table>

</>

   }
       </>
    )
}
