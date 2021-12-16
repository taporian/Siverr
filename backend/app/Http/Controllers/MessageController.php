<?php

namespace App\Http\Controllers;

use App\Events\NewMessage;
use App\Models\Message;
use Illuminate\Http\Request;

class MessageController extends Controller
{

public function getmsg(Request $request){
    $user= auth('user')->user();
    $input=$request->all();
    $room=$input['room_id'];
    $msgs=Message::with('user')->where("room_id",$room)->get();
    return response()->json(['status'=>200,'messages'=>$msgs]);
}
    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function postmsg(Request $request){
        $user= auth('user')->user();
        $input=$request->all();
        $room=$input['room_id'];
        $new =new Message();
        $new->sender_user=$user->id;
        $new->room_id=$room;
        $new->messages=$input['messages'];
        $new->save();
        broadcast(new NewMessage($user,$new,$room))->toOthers();
        return response()->json(['status'=>200]);
    }

}
