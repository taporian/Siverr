import React from 'react'
import { Table } from '../TableUser'

export default function MyServiceAcceptedList({myServiceAcceptedData,errorMyServiceAccepted}) {

  
    return (
       <>
       {console.log('myServicePendingData',myServiceAcceptedData)}
       {!errorMyServiceAccepted ?
       <Table key={0}>
   <Table.Head>
     <Table.TR >
       <Table.TH  >Service</Table.TH>
       <Table.TH  >Description</Table.TH>
       <Table.TH  >Price</Table.TH>

      
       </Table.TR>
  </Table.Head>
  
   <Table.Body>
   {myServiceAcceptedData.length>0 && myServiceAcceptedData.map((accepted)=>(
     <>
   <Table.TR >
   <Table.TH  >{accepted.title}</Table.TH>
   <Table.TH  >{accepted.description}</Table.TH>
   <Table.TH  >{accepted.price}</Table.TH>
   
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
<Table.TH  >{errorMyServiceAccepted.message}</Table.TH>
</Table.TR> 
</Table>

</>

   }
       </>
    )
}
