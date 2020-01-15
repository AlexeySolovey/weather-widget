<?php 
	$apiKey = '0ef8612d3402a74a844f10bd28dbab04';
	$city = 'kiev';

	$apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=" . $city . ",ua&units=metric&appid=". $apiKey;

	$ch = curl_init();

	curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt( $ch, CURLOPT_URL, $apiUrl );

	$html = curl_exec($ch);

	curl_close($ch);

	print_r($html);

?>