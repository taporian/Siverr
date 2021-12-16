<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;
use Illuminate\Validation\ValidationException;

class AdminUpdateValidator extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {

        return [
            'name' => [ 'string', 'max:20'],
            'last_name' => [ 'string', 'max:20'],
            'email' => [ 'email', 'unique:admins', 'email'],
            'password' => [ Password::min(8)
                ->mixedCase()
                ->letters()
                ->numbers()
                ->symbols()
                ->uncompromised()]
        ];
    }

    /**
     * @return string[]
     */


    public function messages()
    {
        return
            [

                'name.min' => 'Name must contain more than 3 Letters',
                'last_name.min' => 'Name must contain more than 3 Letters',
                'unique' => ':attribute already exists'

            ];
    }

    /**
     * @return string[]
     */
    public function attributes()
    {
        return [
            'last_name' => 'Last Name'
        ]; // TODO: Change the autogenerated stub
    }

    /**
     * @param Validator $validator
     * @throws \Illuminate\Validation\ValidationException
     */


    protected function failedValidation(Validator $validator)
    {
        if($this->wantsJson()){
            $response = response()->json([
                'success' => false,
                'message' => 'Error Validation',
                'errors' => $validator->errors()
            ]);
        }      // TODO: Change the autogenerated stub
        throw(new ValidationException( $validator, $response));

    }

}
