<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserUpdateValidator;
use App\Http\Requests\UserValidator;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function register(UserValidator $request)
    {

        $inputs = $request->validated();
        $user = new User();
        $user->fill($inputs);
        $user->save();

        $token = auth('user')->login($user);

        return $this->respondWithToken($token);
    }

    public function login()
    {
        $credentials = request(['email', 'password']);
        $id = User::select('id')->where('email', $credentials)->get()->pluck('id');
        $name = User::select('name')->where('email', $credentials)->first();
        $id=$id[0];
        if (! $token = auth('user')->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        return $this->respondWithLoginToken($token,$id,$name);
    }

    public function logout()
    {
        auth('user')->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    protected function respondWithToken($token)
    {

        return response()->json([

            'access_token' => $token,
            'token_type'   => 'bearer',
            'expires_in'   => auth('user')->factory()->getTTL() * 60
        ]);
    }
    protected function respondWithLoginToken($token,$id,$name)
    {
        $email = request('email');
        return response()->json([
            'id'=>$id,
            'access_token' => $token,
            'token_type'   => 'bearer',
            'expires_in'   => auth('user')->factory()->getTTL() * 60,
            'email'=>$email,
            'user_name'=>$name,
        ]);
    }
    public function destroy(int $id)
    {

        $email = User::select('email')->where('id', $id)->get();
        User::where('id',$id)->delete();
        return response()->json([
            'message' => 'Successfully Deleted Your account',
            'email'=> $email
        ]);
    }
    public function update(UserUpdateValidator $request, int $id){

        $inputs = $request->validated();
        $user =  User::where('id',$id)->first();
        $user->update($inputs);
        return response()->json([
            'message' => 'Succesfully Updated',
            'email'=> $user

        ]);

    }
}
