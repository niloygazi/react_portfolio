<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ContactTableModel;

class ContactController extends Controller
{
    function onContactInfoSend(Request $request)
    {
        $contactArray = json_decode($request->getContent(), true);
        $name  = $contactArray['name'];
        $email  = $contactArray['email'];
        $messege  = $contactArray['messege'];

        $result = ContactTableModel::insert(['name'=>$name, 'email'=>$email, 'messege'=>$messege]);

        if($result == true)
        {
            return 1;
        }
        else
        {
            return 0;
        }
    }
}
