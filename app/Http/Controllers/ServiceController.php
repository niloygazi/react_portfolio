<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ServiceTableModel;

class ServiceController extends Controller
{
    function onSelectService()
    {
        $result = ServiceTableModel::all();
        return $result;
    }
}
