<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AdminController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::resource('admins','App\Http\Controllers\AdminController')->only(['index','store','update']);

//////////////////ADMIN ROUTES////////////////////////////////////
Route::group(['prefix' => 'admins'], function() {


    Route::post('/login', ['App\Http\Controllers\AdminController', 'login']);

    Route::group(['middleware' => ['jwt.admin']], function () {
        Route::get('/getAllUsers', ['App\Http\Controllers\AdminController', 'getAllUsers']);
        Route::post('/register', ['App\Http\Controllers\AdminController', 'register']);
        Route::post('/logout', ['App\Http\Controllers\AdminController', 'logout']);
        Route::get('/getAllAdmins', ['App\Http\Controllers\AdminController', 'index']);
        Route::delete('/delete/{id}', ['App\Http\Controllers\AdminController', 'destroy']);
        Route::put('/update/{id}', ['App\Http\Controllers\AdminController', 'update']);
        Route::put('/updateUser/{id}', ['App\Http\Controllers\UserController', 'update']);
        Route::resource('categories','App\Http\Controllers\CategoryController')->only(['store','update']);
        Route::resource('subcategories','App\Http\Controllers\SubCategoryController')->only(['store','update']);
        Route::post('/createSubCategory', ['App\Http\Controllers\SubCategoryController', 'createSubCategoryCategory']);
        Route::get('/getAllServicePending', ['App\Http\Controllers\ServiceController', 'getAllServicePending']);
        Route::get('/getAllServiceAccepted', ['App\Http\Controllers\ServiceController', 'getAllServiceAccepted']);
        Route::get('/getAllServiceRejected', ['App\Http\Controllers\ServiceController', 'getAllServiceRejected']);
        Route::post('/rejectPendingServices/{id}', ['App\Http\Controllers\CategoryController', 'rejectPendingServices']);
        Route::put('/acceptService/{id}', ['App\Http\Controllers\ServiceController', 'acceptService']);

    });
});

///////////////////////GUEST ROUTES//////////////////////
Route::resource('categories','App\Http\Controllers\CategoryController')->only(['index']);
Route::resource('subcategories','App\Http\Controllers\SubCategoryController')->only(['index']);
Route::get('/getCategory/{id}', ['App\Http\Controllers\CategoryController', 'getCategory']);
Route::get('/paginateServiceSubcategory',['App\Http\Controllers\PaginateController', 'paginateServiceSubcategory12']);
//////////////////USER ROUTES////////////////////////////////////////////
Route::group(['prefix' => 'users'], function() {

    Route::post('/register', ['App\Http\Controllers\UserController', 'register']);

    Route::post('/login', ['App\Http\Controllers\UserController', 'login']);
    Route::group(['middleware' => ['jwt.user']], function () {
        Route::post('/logout', ['App\Http\Controllers\UserController', 'logout']);
        Route::delete('/delete/{id}', ['App\Http\Controllers\UserController', 'destroy']);
        Route::put('/update/{id}', ['App\Http\Controllers\UserController', 'update']);
        Route::resource('services','App\Http\Controllers\ServiceController')->only(['store','update']);
        Route::get('/getServicePending/{id}', ['App\Http\Controllers\ServiceController', 'getServicePendingByUserID']);
        Route::get('/getServiceAccepted/{id}', ['App\Http\Controllers\ServiceController', 'getServiceAcceptedByUserID']);
        Route::get('/getServiceRejected/{id}', ['App\Http\Controllers\ServiceController', 'getServiceRejectedByUserID']);
        Route::get('/getAllAcceptedCategory', ['App\Http\Controllers\CategoryController', 'getAllAcceptedCategory']);
        Route::get('/getAllPendingCategory', ['App\Http\Controllers\CategoryController', 'getAllPendingCategory']);
        Route::get('/getSubcategoryByCategoryId/{id}', ['App\Http\Controllers\SubCategoryController', 'getSubcategoryByCategoryId']);
        Route::get('/getAllCategory', ['App\Http\Controllers\CategoryController', 'getAllCategory']);
        Route::post('/postmessages', ['App\Http\Controllers\MessageController', 'postmsg']);
        Route::post('getmsg',['App\Http\Controllers\MessageController', 'getmsg']);
        Route::post('/createOrder',['App\Http\Controllers\OrderController', 'createOrder']);
        Route::post('/contactSeller',['App\Http\Controllers\OrderController', 'contactSeller']);
        Route::get('/getroom',['App\Http\Controllers\RoomController', 'getroom']);
        Route::get('/getAllRooms',['App\Http\Controllers\RoomController', 'getAllRooms']);
        Route::get('/getAllPendingOrder',['App\Http\Controllers\OrderController', 'getAllPendingOrder']);
        Route::get('/getAllAcceptedOrder',['App\Http\Controllers\OrderController', 'getAllAcceptedOrder']);
        Route::get('/getAllRejectedOrder',['App\Http\Controllers\OrderController', 'getAllRejectedOrder']);
        Route::put('/acceptOrder/{id}',['App\Http\Controllers\OrderController', 'acceptOrder']);
        Route::put('/rejectOrder/{id}',['App\Http\Controllers\OrderController', 'rejectOrder']);
        Route::get('/myOrdersPending',['App\Http\Controllers\OrderController', 'myOrdersPending']);
        Route::get('/myOrdersAccepted',['App\Http\Controllers\OrderController', 'myOrdersAccepted']);
        Route::get('/myOrdersRejected',['App\Http\Controllers\OrderController', 'myOrdersRejected']);
        Route::post('/createComment',['App\Http\Controllers\CommentController', 'createComment']);


    });
    });





//
//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});
