<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
   protected $table = 'blog';

   protected $guarded;

   public function category()
   {
      return $this->belongsTo(Category::class, 'category');
   }
   public function subcategory()
   {
      return $this->belongsTo(Subcategory::class, 'subcategory');
   }
}
