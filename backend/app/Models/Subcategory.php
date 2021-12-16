<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subcategory extends Model
{
    use HasFactory;



    public function services(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Service::class);
    }
    public function servicesAccepted(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Service::class)->where('status_service',1);
    }

    public function servicesPending(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Service::class)->where('status_service',0);
    }

    public function categories(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Category::class,'category_id','id');
    }

    protected $fillable = [
        'category_id',
        'name'
        ];

}
