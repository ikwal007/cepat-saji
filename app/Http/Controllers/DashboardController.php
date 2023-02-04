<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $findOrder = Order::where('user_id', Auth::user()->id)->first();
        $allOrderMenu = $findOrder->orderMenu;

        $dataTotalPrice = $findOrder->total_price;
        $dataListMenu = array();
        foreach ($allOrderMenu as $orderMenu) {
            $data = (object) [
                'name' => $orderMenu->menu->name,
                'quanty' => $orderMenu->quanty,
                'subPrice' => $orderMenu->quanty * $orderMenu->menu->price
            ];
            $dataListMenu[] = $data;
        }
        $mainData = (object) [
            'dataListMenu' => $dataListMenu,
            'dataTotalPrice' => $dataTotalPrice
        ];
        return Inertia::render('Dashboard/Dashboard', [
            'mainData' => $mainData
        ]);
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
        //
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
