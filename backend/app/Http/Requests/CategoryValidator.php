<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\ValidationException;

class CategoryValidator extends FormRequest
{
    /**
     * @return bool
     */
    public function authorize(): bool
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
            'name' => ['required', 'string', 'unique:categories', 'max:20'],
        ];
    }

    /**
     * @return string[]
     */
    public function messages()
    {

        return
            [

                'required' => ':attribute is required',
                'unique' => ':attribute already exists',

            ];
    }
    /**
     * @return string[]
     */
    public function attributes()
    {
        return [
                'name'=>'category'
        ];
    }
    /**
     * @param Validator $validator
     * @throws \Illuminate\Validation\ValidationException
     */


    protected function failedValidation(Validator $validator)
    {


            $response = response()->json([
                'success' => false,
                'message' => 'Error Validation',
                'errors' => $validator->errors()
            ]);

        throw(new ValidationException( $validator, $response));

    }
}
