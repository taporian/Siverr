<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\ValidationException;

class SubCategoryValidator extends FormRequest
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
            'name' => ['string', 'unique:subcategories', 'max:20'],
            'category_id' =>['required']
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
                'unique' => ':attribute already exists'

            ];
    }
    /**
     * @return string[]
     */
    public function attributes()
    {
        return [
            'name'=>'Subcategory'
        ];
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
