import React,{useEffect,useRef,useState} from 'react'
import PusherJs from 'pusher-js';
import { URL_User } from '../URL';
import { signOutUser } from '../../redux/action-creators';
import { useDispatch } from 'react-redux';
import './Chat.css'

import { useParams } from 'react-router-dom';
export default function Chat(props) {

   

const [messages, setMessages] = useState([]);
const [messageInput, setMessageInput] = useState("");
// const [room, setRoom] = useState(0);
const [getmessages,Setgetmessages]=useState()
const sender_user_id = localStorage.getItem('USER-ID')
const dispatch = useDispatch();
const room = props.location.state.room;


const messageEl = useRef();


    useEffect( () => {
      

        async function Load(){

        
        
        const pusher = new PusherJs("7a885669ff1c6332e7bc", {
            cluster: "eu",
        });
        
            const formData = new FormData();
            formData.append("room_id",room.id); 
    
            const response = await fetch(URL_User+"/getmsg",
                {
                    headers: {
                        Authorization:`Bearer ${localStorage.getItem("USER-TOKEN")}`
                    },
                    method: "post",
                    body: formData,
                }
            );   
            const result = await response.json();
            console.log('message',result.messages);
           if(result.message==='You must be logged in'){
            dispatch(signOutUser());
           }else{
            Setgetmessages(result.messages);
        
           }
           
          
            
         
    
        
            const channel = pusher.subscribe("Chat" + room.id); /// here put room_id
            channel.bind("App\\Events\\NewMessage", function (data) {
                
                setMessages((prev) => [...prev, {prev}]);
                
            });
            return () => {
                pusher.unsubscribe("Chat" + room.id);
            };
        }
        Load();
           
        
    }, [messages]);


    const sendMsg = async () => {
        const formData = new FormData();
        formData.append("messages", messageInput);
        formData.append("room_id", room.id); 

        const response = await fetch(URL_User+"/postmessages", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("USER-TOKEN")}`,
            },
            method: "post",
            body: formData,
        }
        
        );
        setMessageInput("");
      
        
        const result = await response.json();
    
    }

        useEffect(() => {
         
            if (messageEl) {
              messageEl.current.addEventListener('DOMNodeInserted', event => {
                const { currentTarget: target } = event;
                target.scroll({ top: target.scrollHeight, behavior: 'smooth' });
              });
            }
          }, [])
       
    return (
        <div>
          {console.log('room',room)}
            <div className="container">     
                          
                          {/* <div className="row no-gutters"> */}
                              <div className="col-3">
                                  {/* <div className="card">
                                      <div className="card-header">card header</div>
                                      <div className="card-body">
                                          <ul id="user_list" className="user_list list-group">
                                              {this.state.user_list.map((number) =>
                                              <a href="#">
                                                
                                                  <li id={"user_"+number.id} onClick={this.loadChats} className="list-group-item d-flex justify-content-between align-items-center" key={'user_'+number.id}>
                                                      {number.name}
                                                      <span className="badge badge-primary badge-pill">14</span>
                                                  </li>
                                              </a>  )}
                                          </ul>
                                      </div>                            
                                  </div> */}
                              </div>
                              <div className="col">
                                  <div className="card">
                                      <div className="card-header"></div>
                                      {/* <div className="card-header">{isAnyUserActive?this.state.active_user[0].name:'no active'}</div> */}
                                      <div className="card-body">
                                          <ul id="chat_list"className="chat_list" ref={messageEl}>
                                           
                                              {getmessages  && getmessages.map((msgs) => 
                                                    
                                                  (msgs.sender_user.toString()===sender_user_id)?    
                                                  <div   className="sent" id={msgs.id} key={msgs.id}>{msgs.messages}</div>                                
                                                  :
                                                  <div  className="replies" id={msgs.id} key={msgs.id}>{msgs.messages}</div>
                                              
                                              )}
                                          </ul>
                                      </div>
                                      <div className="card-footer">
                                          <input type="text"  id="chat_tbox" value={messageInput} className="form-control" placeholder="Enter message..." onChange={(event)=>{setMessageInput(event.target.value)}}/>
                                     
                                      
                                          <input type="submit" className="go-chat"  value="GO" onClick={(event)=>{event.preventDefault();sendMsg();}} />
                                          
                                      </div>
                                  </div>
                              </div>
                          {/* </div> */}
                      </div>
        </div>
    )
}
