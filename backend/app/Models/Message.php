<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
    use HasFactory;

    protected $fillable = [
        'messages',
        'room_id',
        'sender_user',
    ];

    public function rooms(): \Illuminate\Database\Eloquent\Relations\belongsTo
    {
        return $this->belongsTo(Room::class);
    }
    public function user(): \Illuminate\Database\Eloquent\Relations\belongsTo
    {
        return $this->belongsTo(User::class,'sender_user','id');
    }
    public function userSent(): \Illuminate\Database\Eloquent\Relations\belongsTo
    {
        return $this->belongsTo(User::class,'sender_user','id');
    }
}
