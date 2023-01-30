<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use App\Models\Order;
use App\Models\OrderMenu;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class OrderMenuController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $food = Menu::where('type', 'food')->get();
        $drink = Menu::where('type', 'drink')->get();
        $findOrder = Order::where('user_id', Auth::user()->id)->first();
        $cartList = (!$findOrder) ? null : OrderMenu::where('order_id', $findOrder->id)->get();
        if (!$findOrder) {
            return redirect('/find-restorant');
        } else {
            return Inertia::render('OrderMenu', [
                'food' => $food,
                'drink' => $drink,
                'dataOrder' => $findOrder,
                'cartList' => $cartList
            ]);
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $orderMenu = new OrderMenu();
        $orderMenu->order_id = $request->order_id;
        $orderMenu->menu_id = $request->menu_id;
        $orderMenu->quanty = $request->quanty;
        $orderMenu->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
