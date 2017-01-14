
// -------------------------------------------------------------------------------------------- VARS 

// var openweathermap_api is located inside private_keys.js which is not commited
// please generate your own api key at http://api.openweathermap.org

var celsius = "metric";
var fahrenheit = "imperial";

// -------------------------------------------------------------------------------------------- EVENTS 

window.onload = function() {

	// check if the city was selected before and is stored in cookies 
    var last_selected_city = localStorage.getItem("last_celected_city");

    // if it has -- display weather
    if(last_selected_city != null) {
    	displayWeather(last_selected_city);
    }

}


$(document).on("click","#submit_city",function(e) {

	var typed_city = $("#city").val();

	displayWeather(typed_city);

	// store the provided city in cookies 
	localStorage.setItem("last_celected_city", typed_city);
});


// -------------------------------------------------------------------------------------------- FUNCTIONS 

function displayWeather(city) {

    var current_city = city;

    var url = "http://api.openweathermap.org/data/2.5/weather?q="+current_city+"&units="+celsius+"&appid="+openweathermap_api;

    $.getJSON(url, function(data) {
      console.log(data);
      $("#display").html(data.name + "<br>" + data.main.temp_min);
    })
    .fail(function() { 
    	$("#display").html("Son of a mother trucker! The shit's not working. Try again later maybe...");
    });
}

