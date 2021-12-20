import React from 'react'
import { Table } from '../TableUser'
import { URL_Image } from '../URL'
export default function MyServicePendingList({myServicePendingData,errorMyServicePending}) {

  
    return (
       <>
       {console.log('myServicePendingData',myServicePendingData)}
       {!errorMyServicePending ?
       <Table key={0}>
   <Table.Head>
     <Table.TR >
       <Table.TH  >Service</Table.TH>
       <Table.TH  >Description</Table.TH>
       <Table.TH  >Price</Table.TH>
       
      
       </Table.TR>
  </Table.Head>
  
   <Table.Body>
   {myServicePendingData.length>0 && myServicePendingData.map((pending)=>(
     <>
   <Table.TR >
   <Table.TH  >{pending.title}</Table.TH>
   <Table.TH  >{pending.description}</Table.TH>
   <Table.TH  >{pending.price}</Table.TH>
  
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
<Table.TH  >{errorMyServicePending.message}</Table.TH>
</Table.TR> 
</Table>

</>

   }
       </>
    )
}
