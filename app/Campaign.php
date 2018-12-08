<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Campaign extends Model
{
    public function business()
    {
        return $this->belongsTo(Business::class);
    }
}
