import React,{useEffect,useState} from 'react'
import './rooms.css';
import { useDispatch,useSelector } from "react-redux";
import {fetchAllRoomsUser } from '../../redux/action-creators';
import { useHistory } from 'react-router-dom';
export default function Rooms() {

    const [loggedInId,SetLoggedinId]=useState(0);
    const  {  errorRooms,roomsUserData } = useSelector((state) =>  state.fetchAllRoomsUserReducer);
    const dispatch = useDispatch();
    const history = useHistory();
 
    const handleMessages = (value)=>{
        console.log({value})
        history.push({
            pathname : `/chat`,
            state :{
              room:value
            }
            } );
    }
    
    useEffect(() => {
        SetLoggedinId(Number(localStorage.getItem('USER-ID')));
        dispatch(fetchAllRoomsUser()) 
      }, []);
     

    return (
        <>
{console.log('roomsUserData',roomsUserData)}
<ol className="list list-view-filter">
<h3 className='list-title'>Messages</h3>
{roomsUserData?.data?.length>0 && roomsUserData.data.map((room)=>

room.user1 === loggedInId ?
    <>
    <h4 className='list-rooms-h4' >{room.users2.name}</h4>
    <hr/>
    <li className='list-rooms' onClick={()=>handleMessages(room)}>{room.messages.messages}</li>
    </>
    :
    <>
    <h4 className='list-rooms-h4' >{room.users1.name}</h4>
    <li className='list-rooms' onClick={()=>handleMessages(room)}>{room.messages.messages}</li>
    </>

// (room.user1 === loggedInId || room.user2 === loggedInId )&& room.messages.sender_user === loggedInId?
// <>
// <h4 className='list-rooms-h4'>{loggedInId === room.users1.id === room.messages.sender_user?room.users2.name+':':'YOU1:'}</h4>
// <li className='list-rooms' onClick={()=>handleMessages(room)}>{room.messages.messages}</li>
// </>
// :<>
// <h4 className='list-rooms-h4'>{loggedInId === room.users2.id === room.messages.sender_user? 'YOU: ':room.users1.name+':'}</h4>
// <li className='list-rooms' onClick={()=>handleMessages(room)}>{room.messages.messages}</li>
// </>

)}

  
</ol>
        </>
    )
}
