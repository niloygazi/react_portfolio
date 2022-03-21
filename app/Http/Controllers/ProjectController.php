<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ProjectTableModel;

class ProjectController extends Controller
{
    function onSelectThree()
    {
        $result = ProjectTableModel::limit(3)->get();
        return $result;
    }

    function onSelectAll()
    {
        $result = ProjectTableModel::all();
        return $result;
    }

    function onSelectDetails($projectID)
    {
        $id = $projectID;
        $result = ProjectTableModel::where(['id'=>$id])->get();
        return $result;
    }
}
