<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\CourseTableModel;

class CourseController extends Controller
{
    function onSelectFour()
    {
        $result = CourseTableModel::limit(4)->get();
        return $result;
    }

    function onSelectAll()
    {
        $result = CourseTableModel::all();
        return $result;
    }

    function onSelectDetails($courseID)
    {
        $id = $courseID;
        $result = CourseTableModel::where(['id'=>$id])->get();
        return $result;
    }
}
