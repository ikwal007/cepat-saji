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
}
