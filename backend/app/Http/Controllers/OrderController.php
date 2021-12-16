<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactSellerValidator;
use App\Http\Requests\OrderValidator;
use App\Models\Message;
use App\Models\Order;
use App\Models\Room;
use App\Models\Service;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    /**
     * @param OrderValidator $request
     * @return JsonResponse
     */
   public function createOrder(OrderValidator $request): JsonResponse
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
           else{
              return response()->json([
                   'message_sent'=>'You can\'t order from yourself'
               ],400);
           }



       }


       catch(\Exception $e){
           return response()->json([
               'message'=>'Internal error'
           ],500);
       }
   }

    /**
     * @param ContactSellerValidator $request
     * @return JsonResponse
     */

   public function contactSeller(ContactSellerValidator $request): JsonResponse
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

    /**
     * @return JsonResponse
     */

    public function getAllPendingOrder(): JsonResponse
    {
        $room = Service::where('user_id',auth('user')->user()->id)->with('ordersPending')->get();
        $arr=[];
        foreach($room as $roomKey => $roo) {
            if( !isset($roo->ordersPending) || sizeof($roo->ordersPending)==0  ){
                array_push($arr,$roomKey);
            }
        }
        $room= $room->toArray();
        foreach ($arr as $arkey => $ar) {
            array_splice($room, $ar - $arkey, 1);
        }



        return response()->json([
            'size'=>sizeof($room),
           'data'=>$room
       ],200);
   }

    /**
     * @return JsonResponse
     */

    public function getAllAcceptedOrder(): JsonResponse
    {
        $acceptedOrder = Service::where('user_id',auth('user')->user()->id)->with('ordersAccepted')->get();
        $arr=[];
        foreach($acceptedOrder as $roomKey => $roo) {
            if( !isset($roo->ordersAccepted) || sizeof($roo->ordersAccepted)==0  ){
                array_push($arr,$roomKey);
            }
        }
        $acceptedOrder= $acceptedOrder->toArray();
        foreach ($arr as $arkey => $ar) {
            array_splice($acceptedOrder, $ar - $arkey, 1);
        }



        return response()->json([
            'size'=>sizeof($acceptedOrder),
            'data'=>$acceptedOrder
        ],200);
    }

    /**
     * @return JsonResponse
     */
    public function getAllRejectedOrder(): JsonResponse
    {
        $rejectedOrder = Service::where('user_id',auth('user')->user()->id)->with('ordersRejected')->get();
        $arr=[];
        foreach($rejectedOrder as $roomKey => $roo) {
            if( !isset($roo->ordersRejected) || sizeof($roo->ordersRejected)==0  ){
                array_push($arr,$roomKey);
            }
        }
        $rejectedOrder= $rejectedOrder->toArray();
        foreach ($arr as $arkey => $ar) {
            array_splice($rejectedOrder, $ar - $arkey, 1);
        }



        return response()->json([
            'size'=>sizeof($rejectedOrder),
            'data'=>$rejectedOrder
        ],200);
    }

    /**
     * @param $id
     * @return JsonResponse
     */
    public function acceptOrder($id): JsonResponse
    {

        $order = Order::where("id",$id)->first();
        $order->status_order = 1;

        if($order->save()){
            return response()->json([
                "message"=>"Order Accepted",
                "data"=>$order
            ],200);
        }else{
            return response()->json([
                "message"=>"Failed to Accept",
            ],400);

        }

    }

    /**
     * @param $id
     * @return JsonResponse
     */

    public function rejectOrder($id): JsonResponse
    {

        $order = Order::where("id",$id)->first();
        $order->status_order = 2;

        if($order->save()){
            return response()->json([
                "message"=>"Order Rejected",
                "data"=>$order
            ],200);
        }else{
            return response()->json([
                "message"=>"Failed to Accept",
            ],400);

        }

    }

    /**
     * @return JsonResponse
     */
public function myOrdersPending(): JsonResponse
{
        $myOrdersPending = Order::where([['user_id',auth('user')->user()->id],['status_order',0]])->get();
        if($myOrdersPending)
        {
            return response()->json([

                'data'=>$myOrdersPending
            ],200);
        }else
        {

            return response()->json([

                'message'=>'No Orders Pending'
            ],400);
        }
}

    public function myOrdersAccepted(): JsonResponse
    {
        $myOrdersAccepted = Order::where([['user_id',auth('user')->user()->id],['status_order',1]])->get();
        if($myOrdersAccepted)
        {
            return response()->json([

                'data'=>$myOrdersAccepted
            ],200);
        }else
        {

            return response()->json([

                'message'=>'No Orders Accepted'
            ],400);
        }
    }
    public function myOrdersRejected(): JsonResponse
    {
        $myOrdersRejected = Order::where([['user_id',auth('user')->user()->id],['status_order',2]])->get();
        if($myOrdersRejected)
        {
            return response()->json([

                'data'=>$myOrdersRejected
            ],200);
        }else
        {

            return response()->json([

                'message'=>'No Orders Rejected'
            ],400);
        }
    }



}

