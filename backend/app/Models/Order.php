<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
public function users(): \Illuminate\Database\Eloquent\Relations\BelongsTo
{
    return $this->belongsTo(User::class,'user_id','id');
}
    public function services(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Service::class,'service_id','id');
    }

    protected $fillable = [
        'user_id',
        'service_id',
        'quantity',
        'description_order',
        'price',
        'status_order',


    ];
}
