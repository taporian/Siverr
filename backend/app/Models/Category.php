<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;
    protected $fillable = [
        'name'
    ];

  public  function  subcategories(): \Illuminate\Database\Eloquent\Relations\HasMany
  {
        return $this->hasMany(Subcategory::class);
}

    public  function  subcategoriesAccepted(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Subcategory::class)->where('status_subcategory','1');
    }

    public  function  subcategoriesPending(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Subcategory::class)->where('status_subcategory','0');
    }





}
