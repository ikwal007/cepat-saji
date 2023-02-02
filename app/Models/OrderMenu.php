<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class OrderMenu extends Model
{
    use HasFactory;
    /**
     * The attributes that aren't mass assignable.
     *
     * @var array
     */
    protected $guarded = ['id'];

    public function order() {
        return $this->belongsTo(Order::class, 'order_id');
    }

    public function menu() {
        return $this->belongsTo(Menu::class);
    }
}
