<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$origin = filter_input(INPUT_SERVER, 'HTTP_ORIGIN');
$allowedOrigins = ['http://localhost:3000', 'http://parloti.github.io', 'https://parloti.github.io'];
if (in_array($origin, $allowedOrigins)) {
	header('Access-Control-Allow-Origin: ' . $origin);
}
header("Content-Type: application/json;charset=utf-8");

include('lib/forecast.io.php');

$api_key = '7367ac42e8e4dc971df8a9962aa11964';

$latitude = filter_input(INPUT_GET, 'latitude');
$longitude = filter_input(INPUT_GET, 'longitude');
$units = 'si';  // Can be set to 'us', 'si', 'ca', 'uk' or 'auto' (see forecast.io API); default is auto
$lang = 'en'; // Can be set to 'en', 'de', 'pl', 'es', 'fr', 'it', 'tet' or 'x-pig-latin' (see forecast.io API); default is 'en'
$result = [];


$forecast = new ForecastIO($api_key, $units, $lang);

// all default will be
// $forecast = new ForecastIO($api_key);


/*
 * GET CURRENT CONDITIONS
 */
$condition = $forecast->getCurrentConditions($latitude, $longitude);


//echo 'Current temperature: '.$condition->getTemperature(). "\n";
$result['temperature']=$condition->getTemperature();
$result['unit']='Celsius';
				------+\\








/,
$result['icon']=$condition->getIcon();
/*
 * GET HOURLY CONDITIONS FOR TODAY
 */
/*$conditions_today = $forecast->getForecastToday($latitude, $longitude);

echo "\n\nTodays temperature:\n";

foreach($conditions_today as $cond) {

    echo $cond->getTime('H:i:s') . ': ' . $cond->getTemperature(). "\n";

}
*/
/*
 * GET DAILY CONDITIONS FOR NEXT 7 DAYS
 */
/*
$conditions_week = $forecast->getForecastWeek($latitude, $longitude);

echo "\n\nConditions this week:\n";

foreach($conditions_week as $conditions) {

    echo $conditions->getTime('Y-m-d') . ': ' . $conditions->getMaxTemperature() . "\n";

}
*/
/*
 * GET HISTORICAL CONDITIONS
 *//*
$condition = $forecast->getHistoricalConditions($latitude, $longitude, '2010-10-10T14:00:00-0700');

echo "\n\nTemperatur 2010-10-10: ". $condition->getMaxTemperature(). "\n";
*/
echo json_encode($result, true);    // <--- encode
exit();