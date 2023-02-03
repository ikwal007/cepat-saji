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
    public function editTotalPrice($findOrder, $request)
    {
        $subTotalPrice = array();
        foreach (OrderMenu::where('order_id', $request->order_id)->get() as  $menus) {
            $menu = $menus;
            $subTotalPrice[] = $menu->menu->price * $menu->quanty;
        }
        $newTotalPrice = array_sum($subTotalPrice);
        $findOrder->total_price = $newTotalPrice;
        $findOrder->save();
    }
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
        $cartList = (!$findOrder) ? null : $findOrder->orderMenu;
        $cartListData = array();
        foreach ($cartList as $data) {
            $object = (object) [
                'id' => $data->id,
                'order_id' => $data->order_id,
                'menu_id' => $data->menu_id,
                'quanty' => $data->quanty,
                'name' => $data->menu->name,
                'price' => $data->menu->price,
                'img' => $data->menu->img,
            ];
            $cartListData[] = $object;
        }
        if (!$findOrder) {
            return redirect('/find-restorant');
        } else {
            return Inertia::render('OrderMenu', [
                'food' => $food,
                'drink' => $drink,
                'dataOrder' => $findOrder,
                'cartList' => $cartListData
            ]);
        }
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
        $findOrder = Order::find($request->order_id);
        $findOrderMenuFromRequest = $findOrder->orderMenu->where('menu_id', $request->menu_id)->first();

        if (isset($findOrderMenuFromRequest->menu)) {
            $findOrderMenuFromRequest->quanty = $findOrderMenuFromRequest->quanty + $request->quanty;
            $findOrderMenuFromRequest->save();
            $this->editTotalPrice($findOrder, $request);
        } else {
            $orderMenu->order_id = $request->order_id;
            $orderMenu->menu_id = $request->menu_id;
            $orderMenu->quanty = $request->quanty;
            $orderMenu->save();
            $this->editTotalPrice($findOrder, $request);
        };
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
        $findOrder = Order::find($request->order_id);
        $findOrderMenuFromRequest = $findOrder->orderMenu->where('menu_id', $request->menu_id)->first();
        $findOrderMenuFromRequest->quanty = $request->quanty + 1;
        $findOrderMenuFromRequest->save();
        $this->editTotalPrice($findOrder, $request);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request ,$id)
    {
        $findOrder = Order::find($request->order_id);
        $findOrderMenuFromRequest = $findOrder->orderMenu->where('menu_id', $request->menu_id)->first();
        $findOrderMenuFromRequest->quanty = $request->quanty - 1;
        ($findOrderMenuFromRequest->quanty == 0) ? $findOrderMenuFromRequest->delete() : $findOrderMenuFromRequest->save() ;
        $this->editTotalPrice($findOrder, $request);
    }
}
