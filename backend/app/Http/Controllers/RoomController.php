<?php

namespace App\Http\Controllers;

use App\Models\Message;
use App\Models\Room;
use Illuminate\Http\Request;

class RoomController extends Controller
{
    public function getroom(){
        try {
            $rooms=[];
            $room = Room::where('user1',auth('user')->user()->id)->get();
            $room2 = Room::where('user2',auth('user')->user()->id)->get();
            foreach ($room as $r){
                array_push($rooms,$r);
            }
            foreach ($room2 as $r2){
                array_push($rooms,$r2);
            }


            if ($rooms) {


                return response()->json([
                    'data' => $rooms
                ], 200);
            }
            return response()->json([
                'item' => "empty"
            ], 404);
        } catch (\Exception $e) {
            return response()->json([
                'message' => $e
            ], 500);
        }
    }
    public function createrooms(Request $req){
        try {


            $room = new Room();
            $room->user1 = auth('user')->user()->id;
            $room->user2 = $req->input('user_id');
            if ($room->save()) {
                return response()->json([
                    'success'=>true,
                    'message'=>'Room saved successfully',
                    'data'=>$room,
                ]);
            }
        } catch (\Exception $e) {

            return response()->json([
                'message' => $e->getMessage()
            ], 500);
        }
    }
    public function getAllRooms()
    {
        $getRoom = Room::where('user1',auth('user')->user()->id)
            ->orWhere('user2',auth('user')->user()->id)->with('messages.userSent')->with('users1')->with('users2')->get();

        return response()->json([
            'data'=>$getRoom
        ]);
    }
}
