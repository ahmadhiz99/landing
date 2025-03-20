<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;
use App\Models\Blog;
use App\Models\Category;
use App\Models\Subcategory;

class BlogController extends Controller
{
    /**
     * Display the user's blog form.
     */
    public function getDataJSON()
    {
        $blogs = Blog::with('category','subcategory')->paginate(10);
        return response()->json($blogs);
    }
    /**
     * Display the user's profile form.
     */
    public function showDataPublic($id)
    {
        $category = Category::where('status','active')->get();
        $subcategory = Subcategory::where('status','active')->get();

        $blog = Blog::where('id',$id)->first();
        session(['response' => $blog]); 
        return Inertia::render('Landing/BlogShow',['blog'=>$blog,'data_category'=>$category,'data_subcategory'=>$subcategory]);
    }


    /**
     * Display the user's blog form.
     */
    public function index()
    {
        $category = Category::where('status','active')->get();
        $subcategory = Subcategory::where('status','active')->get();
        $blogs = Blog::with('category','subcategory')->paginate(10);
        return Inertia::render('Blog/Index',['blogs'=>$blogs]);
    }

    /**
     * Display the user's blog form.
     */
    public function create()
    {
        $category = Category::where('status','active')->get();
        $subcategory = Subcategory::where('status','active')->get();
        return Inertia::render('Blog/Create', ['category' => $category,'data_category'=>$category,'data_subcategory'=>$subcategory]);
    }

    /**
     * Display the user's blog form.
     */
    public function storeDraft(Request $request)
    {
        if($request->id > 0){
            $blog = Blog::find($request->id);
        }else{
            $blog = new Blog;
        }
        $blog->title = $request->title;
        $blog->content = $request->content;
        $blog->category = (int) $request->category;
        $blog->subcategory = (int) $request->subcategory;
        $blog->status = $request->status;
        $blog->label = json_encode($request->label);

        if ($blog->save()) {
            return redirect()->back()->with('response', ['data'=>$blog,'id'=>$blog->id,'status'=>200,'message'=>'Berhasil Disimpan']);
        }
        return redirect()->back()->with('response', ['status'=>500,'message'=>'Gagal Disimpan']);
    }
    
    /**
     * Display the user's blog form.
     */
    public function storePublish(Request $request)
    {
        if($request->id > 0){
            $blog = Blog::find($request->id);
        }else{
            $blog = new Blog;
        }
        $blog->title = $request->title;
        $blog->content = $request->content;
        $blog->category = $request->category;
        $blog->subcategory = $request->subcategory;
        $blog->status = $request->status;
        $blog->label = json_encode($request->label);
        if ($blog->save()) {
            return redirect()->route('blog')->with('response', ['data'=>$blog,'id'=>$blog->id,'status'=>200,'message'=>'Berhasil Disimpan']);
        }
        return redirect()->back()->with('response', ['status'=>500,'message'=>'Gagal Disimpan']);
    }

    /**
     * Display the user's profile form.
     */
    public function show($id)
    {
        $category = Category::where('status','active')->get();
        $subcategory = Subcategory::where('status','active')->get();

        $blog = Blog::where('id',$id)->first();
        session(['response' => $blog]); 
        return Inertia::render('Blog/Create',['blog'=>$blog,'data_category'=>$category,'data_subcategory'=>$subcategory]);
    }

    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy($id)
    {
        $blog = Blog::find($id);
        if ($blog->delete()) {
            return redirect()->route('blog')->with('response', ['status'=>200,'message'=>'Berhasil Dihapus']);
        }
        return redirect()->route('blog')->with('response', ['status'=>500,'message'=>'Gagal Dihapus']);
    }
}
