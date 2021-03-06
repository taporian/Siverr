<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    use HasFactory;

    /**
     * @var string[]
     */
    protected $fillable = [
        'user_id',
        'title',
        'description',
        'image',
        'subcategory_id',
        'status_service',
        'reason_for_rejection',
        'price'


    ];

    public function orders(): \Illuminate\Database\Eloquent\Relations\hasMany
    {
        return $this->hasMany(Order::class,'service_id','id');
    }
    public function ordersPending(): \Illuminate\Database\Eloquent\Relations\hasMany
    {
        return $this->hasMany(Order::class,'service_id','id')->where('status_order',0);
    }
    public function ordersAccepted(): \Illuminate\Database\Eloquent\Relations\hasMany
    {
        return $this->hasMany(Order::class,'service_id','id')->where('status_order',1);
    }
    public function ordersRejected(): \Illuminate\Database\Eloquent\Relations\hasMany
    {
        return $this->hasMany(Order::class,'service_id','id')->where('status_order',2);
    }

    public function comments(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Comment::class);
    }

    public function user(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(User::class);
    }
    public function subcategories(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Subcategory::class,'subcategory_id','id');
    }

    public function subcategoryPending(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Subcategory::class,'subcategory_id','id')
            ->where('status_subcategory','0');
    }



}
