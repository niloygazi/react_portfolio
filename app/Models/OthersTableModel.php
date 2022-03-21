<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OthersTableModel extends Model
{
    protected $table = 'others';
    protected $primaryKey = 'id';
    public $incrementing = true;
    protected $keyType = 'int';
    public $timestamps = false;
}
