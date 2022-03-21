<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\InformationTableModel;

class InformationController extends Controller
{
    function onSelectInfo()
    {
        $result = InformationTableModel::all();

        return $result;
    }
}
