<?php

namespace App\Http\Controllers;

use App\Http\Requests\SubAndCategoryValidator;
use App\Http\Requests\SubCategoryUpdateValidator;
use App\Http\Requests\SubCategoryValidator;
use App\Models\Category;
use App\Models\Subcategory;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class SubCategoryController extends Controller
{
    /**
     * @param SubCategoryValidator $request
     * @return JsonResponse
     */
    public function store(SubCategoryValidator $request): JsonResponse
    {

        $inputs = $request->all();
        $subcategory = new Subcategory();
        $category_exists =  Category::where([['id',$inputs['category_id'] ], [ 'status_category','=','1']])->first();
        if($category_exists){
            $subcategory->name = $inputs['name'];
            $subcategory->category_id=$inputs['category_id'];
            $subcategory->status_subcategory=1;
            $subcategory->save();
            return response()->json([
                'message' => 'SubCategory'.' '. $inputs['name'] .' '.' was added',
            ]);
        }
        else
        {
            return response()->json([
                'message' => 'subcategory'.' '. $inputs['name'] .' '.' can\'t be added into category that isn\'t accepted',
            ]);
        }


    }

    /**
     *
     */
        public function createSubCategoryCategory(SubAndCategoryValidator $request)
        {
            $inputs = $request->all();

            if(!isset($inputs['category_id']) || $inputs['category_id'] == ''){
                $category = new Category();

                $category->name=$inputs['category_name'];
                $category->status_category=1;
                $category->save();
                $category_id = $category->id;
//            $category_id = Category::select('id')->where('name', $inputs['category_name'])->first();

                $subcategory= new Subcategory();
                $subcategory->name = $inputs['subcategory_name'];
                $subcategory->category_id=$category_id;
                $subcategory->status_subcategory=1;
                $subcategory->save();
                return response()->json([
                    'message' => 'SubCategory'.' '. $inputs['subcategory_name'] .' '.' and Category ' .'' .$inputs['category_name']. ' '.' was added',
                ]);
            }
            else
            {

                $subcategory= new Subcategory();
                $subcategory->name = $inputs['subcategory_name'];
                $subcategory->category_id=$inputs['category_id'];
                $subcategory->status_subcategory=1;
                $subcategory->save();
                return response()->json([
                    'message' => 'SubCategory'.' '. $inputs['subcategory_name'] .' was added',
                ]);
            }




        }
    /**
     * @return JsonResponse
     */

    public function index()
    {
        $subcategory = Subcategory::all();
        return response()->json($subcategory);
    }

    /**
     * @param SubCategoryUpdateValidator $request
     * @param int $id
     * @return JsonResponse
     */

    public function update(SubCategoryUpdateValidator $request, int $id){

        $inputs = $request->all();
        $subcategory =  Subcategory::where('id',$id)->first();
        $subcategory->update($inputs);
        return response()->json([
            'message' => 'SubCategory'.' '. $inputs['name'] .' '.' was updated',

        ]);

    }

    /**
     * @return JsonResponse
     */
    public function getSubcategoryByCategoryId(int $id): JsonResponse
    {

        $subcategory = Subcategory::where('category_id',$id)->get();
        return response()->json($subcategory);
    }


    /**
     * @param int $id
     * @return mixed
     */

    public function getSubCategory(int $id)
    {
        return Subcategory::where('id',$id)->first();
    }
}
