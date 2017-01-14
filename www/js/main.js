
// -------------------------------------------------------------------------------------------- VARS 

// var openweathermap_api is located inside private_keys.js which is not commited
// please generate your own api key at http://api.openweathermap.org

var celsius = "metric";
var fahrenheit = "imperial";

// check if the city was selected before and is stored in cookies 
var last_selected_city = localStorage.getItem("last_celected_city");

// -------------------------------------------------------------------------------------------- EVENTS 

window.onload = function() {


    // if it has -- display weather
    if(last_selected_city != null) {
    	displayWeather(last_selected_city);
    }

}


$(document).on("click","#submit_city",function(e) {

	var typed_city = $("#city").val();

	displayWeather(typed_city);
});


// -------------------------------------------------------------------------------------------- FUNCTIONS 

function displayWeather(city) {

	// get current date to record it in cookies so we fetch weather info from the api only once a day
	var date = new Date();
	var current_day = date.getDate();
	var current_month = date.getMonth()+1;
	var current_year = date.getFullYear()
	var current_date = current_day+"-"+current_month+"-"+current_year;

	var last_date_weather_was_fetched = localStorage.getItem("last_date_weather_was_fetched");

	// only fetch weather data once a day so that daily api limit is not exceed quickly
	if (last_date_weather_was_fetched != current_date || 
		last_date_weather_was_fetched == null || 
		localStorage.getItem("todays_weather") == null ||
		city != last_selected_city
		) {

		localStorage.setItem("last_date_weather_was_fetched", current_date);

	    var current_city = city;

	    var url = "http://api.openweathermap.org/data/2.5/weather?q="+current_city+"&units="+celsius+"&appid="+openweathermap_api;

	    $.getJSON(url, function(data) {
	      
	      console.log("data fetched from api");
	      console.log(data);
	      $("#display").html(data.name + "<br>" + data.main.temp_min);

	      // record todays weather data 
	      localStorage.setItem("todays_weather", JSON.stringify(data));

	      // store the provided city in cookies 
		  localStorage.setItem("last_celected_city", city);

	    })
	    .fail(function() { 
	    	$("#display").html("Son of a mother trucker! The shit's not working. Try again later maybe...");
	    });

	// if weather data was already fetched today
	// get weather data from cookies and dont call api
	} else {
		var data = JSON.parse(localStorage.getItem("todays_weather"));
		console.log("data loaded from cookie");
		console.log(data);
	     $("#display").html(data.name + "<br>" + data.main.temp_min);
	}

}

