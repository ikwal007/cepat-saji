<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Restorant extends Model
{
    use HasFactory;

    /**
     * Get orders for the restaurant.
     */
    public function orders()
    {
        return $this->hasMany(Order::class);
    }
}
