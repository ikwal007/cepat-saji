<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Restorant;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class FindRestorantController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $getRestorant = Restorant::all();
        $cekOrder = Order::where('user_id', Auth::user()->id)->first();
        if (!$cekOrder) {
            return Inertia::render('FindRestorant', [
                'allRestorant' => $getRestorant
            ]);
        } else {
            return redirect('/order-menu');
        }
    }
}
