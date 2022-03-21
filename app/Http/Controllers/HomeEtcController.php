<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\OthersTableModel;
class HomeEtcController extends Controller
{
  
    function onSelectVideo(){
        $result= OthersTableModel::select('video_description','video_url')->get();
        return $result;
      }

      function onSelectProjectClient(){
        $result= OthersTableModel::select('total_project','total_client')->get();
        return $result;
      }

          
    function onSelectTechDesc(){
        $result= OthersTableModel::select('tech_description')->get();
        return $result;
      }
    

      function onSelectHomeTitle(){
        $result= OthersTableModel::select('home_title','home_subtitle')->get();
        return $result;
      }
}
