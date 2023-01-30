<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\DashboardProfileController;
use App\Http\Controllers\FindRestorantController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\OrderMenuController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StaffController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->middleware('guest');

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/home', [HomeController::class, 'index'])->name('home.index');
    Route::get('/find-restorant', [FindRestorantController::class, 'index'])->name('findRestorant.index');
    Route::post('/order', [OrderController::class, 'index'])->name('order.index');
    Route::post('/create-order', [OrderController::class, 'store'])->name('order.store');
    Route::get('/order', function () {
        return redirect('find-restorant');
    });
    Route::get('/order-menu', [OrderMenuController::class, 'index'])->name('orderMenu.index');
    Route::post('/order-menu', [OrderMenuController::class, 'store'])->name('orderMenu.store');
    Route::resource('dashboard-profile', DashboardProfileController::class);
    Route::resource('dashboard', DashboardController::class);
    Route::resource('staff', StaffController::class);
});

require __DIR__.'/auth.php';
