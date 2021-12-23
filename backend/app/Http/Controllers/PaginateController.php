<?php

namespace App\Http\Controllers;


use App\Models\Service;

use Illuminate\Http\Request;

class PaginateController extends Controller
{
    public function paginateServiceSubcategory1(){
        return Service::where([['subcategory_id','1'],['status_service','1']])->with('subcategories.categories')->inRandomOrder()->paginate(4);
    }

    public function paginateServiceSubcategory5(){
        return Service::where([['subcategory_id','6'],['status_service','1']])->with('subcategories.categories')->inRandomOrder()->paginate(4);
    }

}


