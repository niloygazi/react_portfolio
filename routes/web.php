<?php

/** @var \Laravel\Lumen\Routing\Router $router */

use App\Http\Controllers\ChartDataController;

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/ChartData', ['middleware'=>'auth','uses'=>'ChartDataController@onAllSelect']);
$router->get('/ClientReview', ['middleware'=>'auth','uses'=>'ClintReviewController@onAllSelect']);
$router->post('/ContactSend', ['middleware'=>'auth','uses'=>'ContactController@onContactInfoSend']);

$router->get('/CourseHome', ['middleware'=>'auth','uses'=>'CourseController@onSelectFour']);
$router->get('/CourseAll', ['middleware'=>'auth','uses'=>'CourseController@onSelectAll']);
$router->get('/CourseDetails/{courseID}', ['middleware'=>'auth','uses'=>'CourseController@onSelectDetails']);

$router->get('/Footer', ['middleware'=>'auth','uses'=>'FooterController@onSelectFooter']);
$router->get('/Information', ['middleware'=>'auth','uses'=>'InformationController@onSelectInfo']);
$router->get('/Service', ['middleware'=>'auth','uses'=>'ServiceController@onSelectService']);

$router->get('/ProjectHome', ['middleware'=>'auth','uses'=>'ProjectController@onSelectThree']);
$router->get('/ProjectAll', ['middleware'=>'auth','uses'=>'ProjectController@onSelectAll']);
$router->get('/ProjectDetails/{projectID}', ['middleware'=>'auth','uses'=>'ProjectController@onSelectDetails']);

$router->get('/VideoHome', ['middleware'=>'auth','uses'=>'HomeEtcController@onSelectVideo']);
$router->get('/TotalProjectClient', ['middleware'=>'auth','uses'=>'HomeEtcController@onSelectProjectClient']);
$router->get('/TechDesc', ['middleware'=>'auth','uses'=>'HomeEtcController@onSelectTechDesc']);
$router->get('/HomeTopTitle', ['middleware'=>'auth','uses'=>'HomeEtcController@onSelectHomeTitle']);