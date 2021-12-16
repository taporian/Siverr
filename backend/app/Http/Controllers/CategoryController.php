<?php

namespace App\Http\Controllers;

use App\Http\Requests\CategoryUpdateValidator;
use App\Http\Requests\CategoryValidator;
use App\Http\Requests\RejectPendingServicesValidation;
use App\Models\Category;
use App\Models\Service;
use App\Models\Subcategory;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * @param CategoryValidator $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(CategoryValidator $request): \Illuminate\Http\JsonResponse
    {

        $inputs = $request->all();
        $category = new Category();
        $category->name = $inputs['name'];
        $category->status_category=1;
        $category->save();
        return response()->json([
            'message' => 'Category'.' '. $inputs['name'] .' '.' was added',
        ]);
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */

    public function index()
    {
        $category = Category::where('status_category',1)->with('subcategoriesAccepted.servicesAccepted.user')->get(); //maybe .user give you problems at front

        return response()->json($category);
    }

    /**
     * @param CategoryUpdateValidator $request
     * @param int $id
     * @return \Illuminate\Http\JsonResponse
     */

    public function update(CategoryUpdateValidator $request, int $id){

        $inputs = $request->all();
        $category =  Category::where('id',$id)->first();
        $category->update($inputs);
        return response()->json([
            'message' => 'Category'.' '. $inputs['name'] .' '.' was added',

        ]);

    }

    /**
     * @param int $id
     * @return mixed
     */

    public function getCategory(int $id)
    {
        return Category::where('id',$id)->with('subcategories')->first();
    }


    public function rejectPendingServices(RejectPendingServicesValidation $req,int $id){
        $inputs = $req->all();
        $service = Service::where('id',$id)->with('subcategoryPending')->first();

        $subCategory = Subcategory::where([['id',$service['subcategory_id']],['status_subcategory',0]])->with('servicesPending')->first();

        if($subCategory){
            $messages= $service->update($inputs);


            $serviceNb = $subCategory->services()->count();
//            dd($subCategoryCount);
            //todo fetch service related to subcategory
            if($serviceNb <= 1 ){

                $category = Category::where('id',$subCategory['category_id'])->first();
                $subCategoryCount = $category->subcategoriesPending()->count();

                if($category['status_category'] == 0 && $subCategoryCount <= 1){

                    $categoryDeleted = $category->delete();
                    $subCategoryDeleted = $subCategory->delete();
                    return response()->json([
                        'message'=>$categoryDeleted .' and '.$subCategoryDeleted.' '.' created by user created',
                        'reason_for_rejection'=>$messages['reason_for_rejection'],
                    ]);

                }else{
                    $subCategoryDeleted = $subCategory->delete();
                    return response()->json([
                        'message'=>$subCategoryDeleted .' created by user created',
                        'reason_for_rejection'=>$messages['reason_for_rejection'],
                    ]);


                }

            }else{
               //todo update service
                $inputs["subcategory_id"] = 0;
                $service->update($inputs);

            }
        }

        $service->update($inputs);
        return response()->json([

            'message'=>$service.' was rejected ',
        ]);
    }

    public function getAllAcceptedCategory(): \Illuminate\Http\JsonResponse
    {
        $category = Category::where('status_category',1)->get();

        return response()->json([
            "data"=>$category
            ]
        );
    }
    public function getAllPendingCategory(): \Illuminate\Http\JsonResponse
    {
        $category = Category::where('status_category',0)->get();

        return response()->json([
            "data"=>$category
        ]);
    }

    public function getAllCategory(): \Illuminate\Http\JsonResponse
    {
        $category= Category::all();
        return response()->json([
            "category"=>$category
        ]);
    }


}


