<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactSellerValidator;
use App\Http\Requests\OrderValidator;
use App\Models\Message;
use App\Models\Order;
use App\Models\Room;
use Illuminate\Http\Request;

class OrderController extends Controller
{
   public function createOrder(OrderValidator $request)
   {
       try{
           $inputs = $request->all();
           if($inputs['user_id'] != $inputs['user_id_service']){
//
               $check_room_exists = Room::
                   where([['user1',$inputs['user_id_service']],['user2',$inputs['user_id']]])
                   ->orWhere([['user1',$inputs['user_id']],['user2',$inputs['user_id_service']]])
                   ->first();
               if($check_room_exists){
                    $order = new Order();
                    $order->user_id = $inputs['user_id'];
                    $order->description_order= $inputs['description_order'];
                    $order->price=$inputs['price'];
                    $order->service_id=$inputs['service_id'];
                        $order->save();

                        $send_message = new Message();
                        $send_message->sender_user = $inputs['user_id'];
                        $send_message->room_id = $check_room_exists->id;
                        $send_message->messages = $inputs['description_order'];
                        $send_message->save();
                   return response()->json([
                       'data'=>$order,
                       'message_sent'=>$send_message
                   ],200);
               }
               else{
                   $room = new Room();
                   $room->user1 = $inputs['user_id'];
                   $room->user2 = $inputs['user_id_service'];
                   $room->save();
                   $order = new Order();
                   $order->user_id = $inputs['user_id'];
                   $order->description_order= $inputs['description_order'];
                   $order->price=$inputs['price'];
                   $order->service_id=$inputs['service_id'];
                    $order->save();
                   $send_message = new Message();
                   $send_message->sender_user = $inputs['user_id'];
                   $send_message->room_id = $room->id;
                   $send_message->messages = $inputs['description_order'];
                   $send_message->save();

                   return response()->json([
                       'room_created'=>$room,
                       'data'=>$order,
                       'message_sent'=>$send_message
                   ],200);
               }

           }



       }


       catch(\Exception $e){
           return response()->json([
               'message'=>'Internal error'
           ],500);
       }
   }

   public function contactSeller(ContactSellerValidator $request)
   {
       try{
           $inputs = $request->all();
           if($inputs['user_id'] != $inputs['user_id_service']){
//
               $check_room_exists = Room::
               where([['user1',$inputs['user_id_service']],['user2',$inputs['user_id']]])
                   ->orWhere([['user1',$inputs['user_id']],['user2',$inputs['user_id_service']]])
                   ->first();
               if($check_room_exists){

                   $send_message = new Message();
                   $send_message->messages = $inputs['contact_seller'];
                   $send_message->room_id = $check_room_exists->id;
                   $send_message->sender_user = $inputs['user_id'];
                   $send_message->save();
                   return response()->json([
                       'message_sent'=>$send_message
                   ],200);
               }
               else{
                   $room = new Room();
                   $room->user1 = $inputs['user_id'];
                   $room->user2 = $inputs['user_id_service'];
                   $room->save();
                   $send_message = new Message();
                   $send_message->sender_user = $inputs['user_id'];
                   $send_message->room_id = $room->id;
                   $send_message->messages = $inputs['contact_seller'];
                   $send_message->save();

                   return response()->json([
                       'room_created'=>$room,
                       'message_sent'=>$send_message
                   ],200);
               }

           }
           else{
               return response()->json([
                   'message_sent'=>'You can\'t contact yourself'
               ],400);
           }



       }


       catch(\Exception $e){
           return response()->json([
               'message'=>'Internal error'
           ],500);
       }

   }
}
