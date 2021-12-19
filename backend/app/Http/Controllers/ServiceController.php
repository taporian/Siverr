<?php

namespace App\Http\Controllers;

use App\Http\Requests\ServiceUpdateValidator;
use App\Http\Requests\ServiceValidator;
use App\Models\Category;
use App\Models\Service;
use App\Models\Subcategory;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ServiceController extends Controller
{

    /**
     * @param Request $request
     * @return JsonResponse
     */
public function store(ServiceValidator $request): JsonResponse
{

    try{
        $inputs = $request->all();

        if(isset($inputs['subcategory_name']) && isset($inputs['category_name']) != ''){
            $check_Category_exists =  Category::where('name', $inputs['category_name'])->first();
            if(!$check_Category_exists){
                $category = new Category();
                $category->name = $inputs['category_name'];
                $category->save();
                $category_id = Category::select('id')->where('name', $inputs['category_name'])->first();
                $category_id=$category_id->id;

                $subcategory = new Subcategory();
                $subcategory->name = $inputs['subcategory_name'];
                $subcategory->category_id = $category_id;
                $subcategory->save();

                $subcategory_id = Subcategory::select('id')->where('name', $inputs['subcategory_name'])->first();
                $subcategory_id=$subcategory_id->id;

                $service = new Service();
                $service->user_id = $inputs['user_id'];
                $service->title = $inputs['title'];
                $service->price = $inputs['price'];
                $service->description = $inputs['description'];
                $service->subcategory_id = $subcategory_id;
                $service->image = $request->image;
                $service->image = $request->image->hashName();

                $request->image->move(public_path('images'),$service->image);

                if( $service->save()) {
                    return response()->json([
                        'success' => true,
                        "message" => "Service created successfully",
                        "Data" => $service,
                    ], 200);
                }
            }
            else{
                return response()->json([
                    "category"=>"Category Exists"
                ],400);
            }



        }
        elseif (isset($inputs['subcategory_name']) && isset($inputs['category_id']) != '')
        {
            $check_Subcategory_exists =  Subcategory::where('name', $inputs['subcategory_name'])->first();

            if(!$check_Subcategory_exists)
            {
                $subcategory = new Subcategory();
                $subcategory->name = $inputs['subcategory_name'];
                $subcategory->category_id = $inputs['category_id'];
                $subcategory->save();
                $subcategory_id = Subcategory::select('id')->where('name', $inputs['subcategory_name'])->first();
                $subcategory_id=$subcategory_id->id;

                $service = new Service();
                $service->user_id = $inputs['user_id'];
                $service->title = $inputs['title'];
                $service->price = $inputs['price'];
                $service->description = $inputs['description'];
                $service->subcategory_id = $subcategory_id;
                $service->image = $request->image;
                $service->image = $request->image->hashName();

                $request->image->move(public_path('images'),$service->image);

                if( $service->save()) {
                    return response()->json([
                        'success' => true,
                        "message" => "Service created successfully",
                        "Data" => $service,

                    ], 200);
                }
            }
            else
            {
                return response()->json([
                    "subcategory" => "SubCategory name already Exists"
                ],400);
            }
        }
        else
        {
            $service = new Service();
            $service->fill($inputs);
            $service->image = $request->image;
            $service->image = $request->image->hashName();
            $request->image->move(public_path('images'),$service->image);
            if( $service->save()){
                return response()->json([
                    'success' => true,
                    "message" => "Service created successfully",
                    "Data" => $service
                ], 200);
            }
            else {
                return response()->json([
                    'success' => false,
                    "message" => "Error while creating service",
                ], 400);
            }
        }
    }
    catch(\Exception $e){
        return response()->json([
            'message'=>'Internal error'
        ],500);
    }

    return response()->json([
        'message'=>'didnt go inside try and catch'
    ],200);
}

    /**
     * @param ServiceUpdateValidator $request
     * @param int $id
     * @return JsonResponse
     */

public function update(ServiceUpdateValidator $request, int $id)
{


    $inputs = $request->only(['title', 'description', 'price']);
    $service =  Service::where([['id',$id ], [ 'status_service','=','1']])->first();
    if($service){
        $service->update($inputs);
        if ($request->hasFile('image')) {
            try {
                unlink("images/" . $service->image);
            } catch (\Exception $exception) {
            }
            try{

                $service->image = $request->image;
                $service->image = $request->image->hashName();
                $request->image->move(public_path('images'),$service->image);
            }catch(\Exception $exception) {}
        }
        if ($service->save() ) {
            return response()->json([
                "Message" => "Service updated successfully",
                "Data" => $service
            ], 200);
        } else {
            return response()->json([
                "Message" => "Can't update a Service On Pending",
            ], 200);
        }
    }
    else {
        return response()->json([
            "Message" => "Can't update a Service On Pending",
        ], 200);
    }
}

    /**
     * @param int $id
     * @return JsonResponse
     */

 public function getServicePendingByUserID(): JsonResponse
 {
        $servicePending =  Service::where([['user_id',auth('user')->user()->id ], [ 'status_service','=','0'],['reason_for_rejection',null]])->get();
        if(!$servicePending->isEmpty())
        {
            return response()->json([
                "data"=>$servicePending
            ], 200);
        }
        else{
            return response()->json([
                "message"=>"No Service Pending"
            ],400);
        }
}

    /**
     * @param int $id
     * @return JsonResponse
     */
    public function getServiceAcceptedByUserID(): JsonResponse
    {
        $serviceAccepted =  Service::where([['user_id',auth('user')->user()->id ], [ 'status_service','=','1']])->get();
        if(!$serviceAccepted->isEmpty())
        {
            return response()->json([
                "data"=>$serviceAccepted
            ], 200);
        }
        else{
            return response()->json([
                "message"=>"No Service Accepted"
            ],400);
        }
    }

    /**
     * @param int $id
     * @return JsonResponse
     */
    public function getServiceRejectedByUserID(): JsonResponse
    {
        $servicePending =  Service::where([['user_id',auth('user')->user()->id ], [ 'status_service','=','0'],['reason_for_rejection','!=','null']])->get();
        if(!$servicePending->isEmpty())
        {
            return response()->json([
                "data"=>$servicePending
            ], 200);
        }
        else{
            return response()->json([
                "message"=>"No Service Rejected"
            ],400);
        }
    }

    /**
     * @return JsonResponse
     */
    public function getAllServicePending(): JsonResponse
    {
        $servicePending =  Service::where([['status_service','=','0'],['reason_for_rejection',null]])->with('user','subcategories.categories')->get();
        if(!$servicePending->isEmpty())
        {
            return response()->json([
                "data"=>$servicePending
            ], 200);
        }
        else{
            return response()->json([
                "message"=>"No Service Pending"
            ],400);
        }
    }

    /**
     * @return JsonResponse
     */

    public function getAllServiceAccepted(): JsonResponse
    {

        $serviceAccepted =  Service::where(  'status_service','=','1')->with('user','subcategories.categories')->get();
        if(!$serviceAccepted->isEmpty())
        {
            return response()->json([
                "data"=>$serviceAccepted
            ], 200);
        }
        else{
            return response()->json([
                "message"=>"No Service Accepted"
            ],400);
        }
    }

    public function getAllServiceRejected(): JsonResponse
    {
        $serviceRejected =  Service::where(  [['reason_for_rejection','!=','null'],['status_service','=','0']])->with('user','subcategories.categories')->get();
        if(!$serviceRejected->isEmpty())
        {
            return response()->json([
                "data"=>$serviceRejected
            ], 200);
        }
        else{
            return response()->json([
                "message"=>"No Service Rejected"
            ],400);
        }
    }

    /**
     * @param $id
     * @return JsonResponse
     */
    public function acceptService($id): JsonResponse
    {

        $service = Service::where("id",$id)->with('subcategories.categories')->first();
        $service->status_service = 1;
        $service->subcategories->status_subcategory = 1;
        $service->subcategories->categories->status_category = 1;

        if($service->save()&&
        $service->subcategories->save()&&
        $service->subcategories->categories->save()){
            $services = Service::where("id",$id)->with('subcategories.categories')->first();
            return response()->json([
                "message"=>"Service Accepted",
                "data"=>$services
            ],200);
        }else{
            return response()->json([
                "message"=>"Failed to Accept",
            ],400);

        }
//        $inputs['category_status']->update();
    }




}
