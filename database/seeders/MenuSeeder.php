<?php

namespace Database\Seeders;

use App\Models\Menu;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MenuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Menu::create([
            'name' => 'extra onion burger',
            'img' => '/assets/imgs/static/burger-bawang-ekstra.png',
            'price' => '20000',
            'type' => 'food'
        ]);
        Menu::create([
            'name' => 'extra beef burger',
            'img' => '/assets/imgs/static/burger-daging-ekstra.png',
            'price' => '25000',
            'type' => 'food'
        ]);
        Menu::create([
            'name' => 'double beef burger',
            'img' => '/assets/imgs/static/burger-dobel-daging.png',
            'price' => '25000',
            'type' => 'food'
        ]);
        Menu::create([
            'name' => 'lasagna',
            'img' => '/assets/imgs/static/lasagna.png',
            'price' => '25000',
            'type' => 'food'
        ]);
        Menu::create([
            'name' => 'cheese and tomato pizza',
            'img' => '/assets/imgs/static/pizza-keju-tomat.png',
            'price' => '50000',
            'type' => 'food'
        ]);
        Menu::create([
            'name' => 'vegetable pizza',
            'img' => '/assets/imgs/static/pizza-sayur.png',
            'price' => '60000',
            'type' => 'food'
        ]);
        Menu::create([
            'name' => 'vegetable mushroom sausage pizza',
            'img' => '/assets/imgs/static/pizza-sosis-jamur-sayur.png',
            'price' => '80000',
            'type' => 'food'
        ]);
        Menu::create([
            'name' => 'cocacola',
            'img' => '/assets/imgs/static/cocacola.png',
            'price' => '5000',
            'type' => 'drink'
        ]);
        Menu::create([
            'name' => 'orange juice',
            'img' => '/assets/imgs/static/jus-jeruk.png',
            'price' => '8000',
            'type' => 'drink'
        ]);
        Menu::create([
            'name' => 'manggo and avocado juice',
            'img' => '/assets/imgs/static/jus-mangga-alpukat.png',
            'price' => '10000',
            'type' => 'drink'
        ]);
    }
}
