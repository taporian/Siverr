<?php

namespace App\Http\Controllers;

use App\Http\Requests\CommentValidator;
use App\Models\Comment;
use App\Models\Order;
use App\Models\Service;
use Illuminate\Http\Request;

class CommentController extends Controller
{
  public function createComment(CommentValidator $request)
  {
        $inputs = $request->all();
        $service_user_id = Service::where('id',$inputs['service_id'])->pluck('user_id')->first();


        $logged_user =  auth('user')->user()->id;
        if($logged_user!=$service_user_id)
        {
            $myOrdersAccepted = Order::where([['user_id',auth('user')->user()->id],['service_id',$inputs['service_id']],['status_order',1]])->get();
            if(!$myOrdersAccepted->isEmpty())
            {
                $comment = new Comment();
                $inputs['user_id']=auth('user')->user()->id;
                $comment->fill($inputs);
                if($comment->save())
                {
                    return response()->json([
                        'data'=>$comment
                    ],200);
                }
                else
                {
                    return response()->json([
                        'message'=>'Error Please wait and try again in a bit'
                    ],400);
                }


            }
            else
            {
                return response()->json([
                    'message'=>'You aren\'t a verified purchaser of this service to comment'
                ],400);
            }

        }
        else
        {
          return  response()->json([
                'message'=>'You can\'t comment on your own service'
            ],400);
        }
        }

    /**
     * @param $id
     */
        public function getComments($id)
        {
            $getComment = Comment::where('service_id',$id)->with('users')->get();
            $collect = $getComment->pluck('rating');
            $count = count($collect);
            $collect =collect($collect)->average();
            $collect =round($collect, 1);
            if(sizeof($getComment) !==0)
            {
                return response()->json([
                    'data'=>$getComment,
                    'average'=>$collect,
                    'count'=>$count
                ],200);
            }
            else{
                return response()->json([
                    'message'=>'This Service doesn\'t have any comments',
                     'average'=>0,
                    'count'=>0
                ],400);
            }
        }

}
