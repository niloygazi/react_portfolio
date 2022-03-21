<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ClientReviewModel;

class ClintReviewController extends Controller
{
    function onAllSelect()
    {
        $result = ClientReviewModel::all();

        return $result;
    }
}
