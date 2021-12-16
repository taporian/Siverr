<?php

namespace App\Http\Controllers;


use App\Models\Service;

use Illuminate\Http\Request;

class PaginateController extends Controller
{
    public function paginateServiceSubcategory12(){
        return Service::where([['subcategory_id','12'],['status_service','1']])->with('subcategories.categories')->inRandomOrder()->paginate(4);
    }

}
