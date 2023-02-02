<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;
    /**
     * The attributes that aren't mass assignable.
     *
     * @var array
     */
    protected $guarded = ['id'];

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function restorant() {
        return $this->belongsTo(Restorant::class, 'restorant_id');
    }

    public function orderMenu() {
        return $this->hasMany(OrderMenu::class);
    }
}
