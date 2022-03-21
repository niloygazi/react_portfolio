<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\FooterTableModel;

class FooterController extends Controller
{
    function onSelectFooter()
    {
        $result = FooterTableModel::all();
        return $result;
    }
}
