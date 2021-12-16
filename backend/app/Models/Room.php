<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Room extends Model
{
    use HasFactory;

    protected $fillable = [
        'user1',
        'user2',

    ];

//    public function messages(): \Illuminate\Database\Eloquent\Relations\HasMany
//    {
//        return $this->HasMany(Message::class);
//    }
    public function messages(): \Illuminate\Database\Eloquent\Relations\hasOne
    {
        return $this->hasOne(Message::class)->latest();

    }
    public function users1(): \Illuminate\Database\Eloquent\Relations\belongsTo
    {
        return $this->belongsTo(User::class,'user1','id');
    }
    public function users2(): \Illuminate\Database\Eloquent\Relations\belongsTo
    {
        return $this->belongsTo(User::class,'user2','id');
    }

}
