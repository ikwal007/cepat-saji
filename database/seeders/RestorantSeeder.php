<?php

namespace Database\Seeders;

use App\Models\Restorant;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RestorantSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Restorant::create([
            'address' => 'darussalam'
        ]);
        Restorant::create([
            'address' => 'simpang lima'
        ]);
        Restorant::create([
            'address' => 'simpang tujuh ule kareng'
        ]);
        Restorant::create([
            'address' => 'batoh'
        ]);
        Restorant::create([
            'address' => 'lambaro'
        ]);
    }
}
