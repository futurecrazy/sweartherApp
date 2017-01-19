
// ===================================================================================================== PRESETS 

// var openweathermap_api is located inside private_keys.js which is not commited
// please generate your own api key at http://api.openweathermap.org

var celsius = "metric";
var fahrenheit = "imperial";

// weather for how many cities can be looked up a day
var city_lookup_day_limit = 3;

// ===================================================================================================== VARS 

// check if the city was selected before and is stored in cookies 
var last_selected_city = localStorage.getItem("last_selected_city");

if (localStorage.getItem("new_submitted_city_counter") == null) {
	var new_submitted_city_counter = 0;
} else {
	var new_submitted_city_counter = localStorage.getItem("new_submitted_city_counter");
}

if (localStorage.getItem("cities_entered") == null) {
	var cities_entered = "";
} else {
	var cities_entered = localStorage.getItem("cities_entered");
}

// ===================================================================================================== EVENTS 

window.onload = function() {
    // if the city was ever previously selected -- display weather
    if(last_selected_city != null) {
    	getAndDisplayWeather(last_selected_city);
    }
}


$(document).on("click","#submit_city",function(e) {

	var typed_city = $("#city").val();

	getAndDisplayWeather(typed_city);
});


// ===================================================================================================== FUNCTIONS 


// --------------------------------------------------------------------------- WEATHER  

function getAndDisplayWeather(city) {

	// get current date to record it in cookies so we fetch weather info from the api only once a day
	var date = new Date();
	var current_day = date.getDate();
	var current_month = date.getMonth()+1;
	var current_year = date.getFullYear()
	var current_date = current_day+"-"+current_month+"-"+current_year;
	

	var last_date_weather_was_fetched = localStorage.getItem("last_date_weather_was_fetched");

	// reset variables if the date changed 
	if (current_date != last_date_weather_was_fetched) {
		cities_entered = "";
		new_submitted_city_counter = 0;

		// reset cookies but keep last entered city
		localStorage.clear();
		localStorage.setItem("last_selected_city", last_selected_city);

	}

	// record all cities entered to limit the api requests for any new cities  
	if (cities_entered.search("__"+city+"__") == -1 && new_submitted_city_counter != city_lookup_day_limit) {
		cities_entered += "__"+city+"__";
		new_submitted_city_counter ++;

		// record data to cookies
		localStorage.setItem("new_submitted_city_counter", new_submitted_city_counter);
		localStorage.setItem("cities_entered", cities_entered);
	}

	console.log("cities_entered = "+cities_entered);
	console.log("new_submitted_city_counter = "+new_submitted_city_counter);


	// only fetch weather data once a day so that daily api limit is not exceed quickly
	if (last_date_weather_was_fetched != current_date || 
		last_date_weather_was_fetched == null || 
		localStorage.getItem("todays_weather_in_"+city) == null ||
		city != last_selected_city &&
		cities_entered.search("__"+city+"__") == -1
		) {

		// if a new city is being looked up but the daily city limit is exceeded
		if (city != last_selected_city && 
			cities_entered.search("__"+city+"__") == -1 &&
			new_submitted_city_counter == city_lookup_day_limit) {

			$("#display").append("<p class='city_limit_allert'><br> Sorry I can't tell you weather for more than "+city_lookup_day_limit+" cities a day. Please try "+city+" tomorrow</p>");

		} else { 
			localStorage.setItem("last_date_weather_was_fetched", current_date);

		    var current_city = city;

		    var url = "http://api.openweathermap.org/data/2.5/weather?q="+current_city+"&units="+celsius+"&appid="+openweathermap_api;

		    $.getJSON(url, function(data) {
		      
		      console.log("data fetched from api");
		      console.log(data);

		      displayWeather(data);

		      // record todays weather data 
		      localStorage.setItem("todays_weather_in_"+city, JSON.stringify(data));

		      // store the provided city in cookies 
			  localStorage.setItem("last_selected_city", city);

		    })
		    .fail(function() { 
		    	$("#display").html("Son of a mother trucker! The shit's not working. Try again later maybe...");
		    });
		}

	// if weather data was already fetched today
	// get weather data from cookies and dont call api
	} else {

		$(".city_limit_allert").remove();

		var data = JSON.parse(localStorage.getItem("todays_weather_in_"+city));
		console.log("data loaded from cookie");
		console.log(data);
	    
	    displayWeather(data);

	    // store the provided city in cookies 
		localStorage.setItem("last_selected_city", city);
	}

	// ........................................................ Display weather 

	function displayWeather(data) {

		var city = data.name;
		var temperature = data.main.temp_min;
		var description = data.weather[0].description;
		var br = "<br>"; // line break

		var sentence_patterns = [
			city + br + temperature + br  + description,
			temperature + " and " + description + " today in " + city,
			temperature + " in " + city + br + description
		];

		$("#display").html( swear(sentence_patterns[1]) );

	} // displayWeather()

	console.log("localStorage = ");
    console.log(localStorage);

} //  getAndDisplayWeather(city)


// --------------------------------------------------------------------------- SWEAR 

// exceptions
dont_use_non_ing_swear_words_before = [
	"today",
	"yesterday",
	"tomorrow",
	"now",
	"again",
	"intensity"
];

function swear(about) {
	
	// turn a sentence into an array 
	var sentence_array = about.split(" ");

	// add swear words 
	for (var i = 0; i < sentence_array.length; i++) {
		
		var current_word = sentence_array[i];

		// decide if we want to swear or not
		// bigger the range -- the less likely a swear word will be inserted 
		if (getRandomInt(0, 3) == 2) {
			// check if the next word is not a preposition
			if (prepositions.indexOf(current_word) == -1) {

				var current_swear_word = adjectives[getRandomInt(0, adjectives.length-1)];

				var dont_swear = false;

				var use_current_word_only_with_ing = dont_use_non_ing_swear_words_before.indexOf(current_word) != -1;

				var current_swear_word_doesnt_end_with_ing = current_swear_word.slice(-3) != "ing";

				if (use_current_word_only_with_ing && current_swear_word_doesnt_end_with_ing) {
					dont_swear = true;
				}

				if (dont_swear == false) {
					// insert a swear adjective before it 
					sentence_array[i] = current_swear_word+" "+sentence_array[i];
				}

			}
		}

	};

	var complete_swearing = sentence_array.join(" ");
	return complete_swearing;
}



// ===================================================================================================== HELPERS 

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

