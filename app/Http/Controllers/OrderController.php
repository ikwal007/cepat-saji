<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\Restorant;
use Illuminate\Http\Request;
use Illuminate\Session\Store;
use Inertia\Inertia;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return Inertia::render('Order', [
            'findRestorant' => $request->id
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            'myAddress' => 'required',
            'findRestorant' => 'required',
            'totalPrice' => 'required',
        ]);

        $order = new Order;
        $order->user_id = $request->name;
        $order->restorant_id = $request->findRestorant;
        $order->customer_address = $request->myAddress;
        $order->total_price = $request->totalPrice;
        $order->save();

        return redirect('/order-menu');
    }
}
