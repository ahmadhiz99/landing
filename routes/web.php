<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\BlogController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\SubcategoryController;
use App\Models\Category;
use App\Models\Subcategory;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Landing/Introduction', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
})->name('intro');

Route::get('/background', function () {
    return Inertia::render('Landing/Background');
})->name('background');

Route::get('/career', function () {
    return Inertia::render('Landing/Career');
})->name('career');

Route::get('/projects', function () {
    return Inertia::render('Landing/Project');
})->name('projects');

Route::get('/blogs', function () {
    return Inertia::render('Landing/Blog');
})->name('blogs');


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/blog/data/{id}', [BlogController::class, 'showDataPublic'])->name('blog.show.public');
Route::get('/blog/public', [BlogController::class, 'getDataJSON'])->name('blog.data');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    
    // routes landing
    Route::get('/porto', [ProfileController::class, 'edit'])->name('porto');
    
    // routes blogs / articles
    Route::resource('blog', BlogController::class)->names([
        'index' => 'blog',
        'create' => 'blog.create',
        'store' => 'blog.store',
        'show' => 'blog.show',
        'edit' => 'blog.edit',
        'update' => 'blog.update',
        'destroy' => 'blog.destroy'
    ]);
    Route::post('/blog/store/draft', [BlogController::class, 'storeDraft'])->name('blog.store.draft');
    Route::post('/blog/store/publish', [BlogController::class, 'storePublish'])->name('blog.store.publish');

    // Category and Subcategory
    Route::resource('category', CategoryController::class)->names([
        'index' => 'category.index',
        'store' => 'category.store',
        'update' => 'category.update',
        'destroy' => 'category.destory'
    ]);

    Route::resource('/subcategory', SubcategoryController::class)->names([
        'index' => 'subcategory.index',
        'store' => 'subcategory.store',
        'update' => 'subcategory.update',
        'destroy' => 'subcategory.destory'
    ]);

});

require __DIR__.'/auth.php';
