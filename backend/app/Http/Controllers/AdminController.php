<?php

namespace App\Http\Controllers;

use App\Http\Requests\AdminUpdateValidator;
use App\Http\Requests\AdminValidator;
use App\Models\Admin;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class AdminController extends Controller
{

    public function register(AdminValidator $request) {
        $inputs = $request->validated();
        $admin = new Admin();
        $admin->fill($inputs);
        $admin->save();
        $token = auth('admin')->login($admin);

        return $this->respondWithTokenRegister($token);


    }
    public function index()
    {
        //

        $admin = Admin::all();
        return response()->json($admin);
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */

    public function login(): \Illuminate\Http\JsonResponse
    {
        $credentials = request(['email', 'password']);
        $name = Admin::select('name')->where('email', $credentials)->first();
        $name = $name->name;
        if (! $token = auth('admin')->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->respondWithTokenLogin($token,$name);


    }

    public function logout()
    {
        auth('admin')->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    protected function respondWithTokenRegister($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type'   => 'bearer',
            'expires_in'   => auth('admin')->factory('api')->getTTL() * 60,
            'message' => 'Successfully Registered an Admin',

        ]);
    }
    protected function respondWithTokenLogin($token,$name)
    {
        $email = request('email');
        return response()->json([
            'access_token' => $token,
            'token_type'   => 'bearer',
            'expires_in'   => auth('admin')->factory('api')->getTTL() * 60,
            'message' => 'Successfully Logged In',
            'email' => $email,
            'name' => $name,



        ]);
    }
    public function show($email)
    {
        return Admin::where('email',$email)->first();
    }

    public function getAdminId($id)
    {
        return Admin::where('id',$id)->first();
    }

    /**
     * @param int $id
     * @return array|\Illuminate\Contracts\Foundation\Application|JsonResponse|Request|string
     */
    public function destroy(int $id)
    {

       $email = Admin::select('email')->where('id', $id)->get();
        Admin::where('id',$id)->delete();
        return response()->json([
            'message' => 'Successfully Deleted',
            'email'=> $email
        ]);
    }
    public function update(AdminUpdateValidator $request, int $id){

        $inputs = $request->validated();
        $admin =  Admin::where('id',$id)->first();
        $admin->update($inputs);
        return response()->json([
            'message' => 'Succesfully Updated',
            'email'=> $admin

        ]);

    }

    /**
     * @return JsonResponse
     */

    public function getAllUsers()
    {

        $user = User::all();
        return response()->json($user);
    }

}
