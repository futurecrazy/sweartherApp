
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

	swearUi();

    // if the city was ever previously selected -- display weather
    if(last_selected_city != null) {
    	getAndDisplayWeather(last_selected_city);
    }
}


$(document).on("submit","#cityform",function(e) {
	e.preventDefault();

	var typed_city = $("#city").val();

	// hide keyboard 
	document.activeElement.blur();
    $("input").blur();

    if(typed_city != "") {
		getAndDisplayWeather(typed_city);
	}
});


$(document).on("click, touchend","#display",function(e) {
	animateRandomBgColour();
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

			var swear_adj = ing_adjectives[getRandomInt(0, ing_adjectives.length-1)];

			animateRandomBgColour();
			$("#display").html("<p class='city_limit_allert'>I can't tell "+swear_adj+" weather for more than "+city_lookup_day_limit+" "+swear_adj+" cities a day. Try "+city+" tomorrow</p>");

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
		    	animateRandomBgColour();
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
			city + "." + br + temperature + "." + br  + description.capitalizeFirstLetter() + ".",
			temperature + " and " + description + " today in " + city + ".",
			temperature + " in " + city + "." + br + description.capitalizeFirstLetter() + "."
		];

		animateRandomBgColour();
		$("#display").html( swear(sentence_patterns[getRandomInt(0, sentence_patterns.length-1)]) );

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

punctuation = [
	".",
	"!",
	"?"
];

function swear(about) {
	
	// turn a sentence into an array 
	var sentence_array = about.split(" ");

	// add swear words 
	for (var i = 0; i < sentence_array.length; i++) {
		
		var current_word = sentence_array[i];

		if (i != 0) {
			var previous_word = sentence_array[i-1];
		} else {
			var previous_word = "";
		}


		// decide if we want to swear or not
		// bigger the range -- the less likely a swear word will be inserted 
		if (getRandomInt(0, 1) == 1) {
			// check if the next word is not a preposition
			if (prepositions.indexOf(current_word) == -1) {

				// bigger the range -- the less likely a generate swear word will be used 
				var use_generated_swear_word = getRandomInt(0, 10) == 2;

				if (use_generated_swear_word) {
					var current_swear_word = generateSwearAdjective();
				} else {
					var current_swear_word = adjectives[getRandomInt(0, adjectives.length-1)];
				}

				var last_char_of_a_prev_word = previous_word.slice(-1);

				var beginning_of_sentence = i == 0 || punctuation.indexOf(last_char_of_a_prev_word) != -1;
				if (beginning_of_sentence) {
					current_swear_word = current_swear_word.capitalizeFirstLetter();
				}


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
	var complete_swearing = addExclamations(complete_swearing);
	return complete_swearing;
}


function generateSwearAdjective() {
	return mother_rhymes[getRandomInt(0, mother_rhymes.length-1)] + fucking_rhymes[getRandomInt(0, fucking_rhymes.length-1)];
}

function addExclamations(sentence) {

	var add_in_the_beginning = getRandomInt(0, 1) == 1;
	var add_in_the_end = getRandomInt(0, 1) == 1;

	if (add_in_the_beginning) {
		sentence = exclamations[getRandomInt(0, exclamations.length-1)].capitalizeFirstLetter()+"<br>"+sentence;
	}

	if (add_in_the_end) {
		sentence = sentence + "<br>"+exclamations[getRandomInt(0, exclamations.length-1)].capitalizeFirstLetter();
	}

	return sentence;
}


// --------------------------------------------------------------------------- STYLING

function animateRandomBgColour() {
	// $("body").css("background-color", get_random_color());
	// setTimeout(function(){ 
	// 	$("body").css("background-color", get_random_color());
	// }, 500);
	
	$("body").css("background-color", get_random_color());
	
	var counter = 0;
	
	var slow_down = 10; 

	var interval = setInterval(function(){ 
		counter++;
		slow_down = slow_down+30;
		$("body").css("background-color", get_random_color());
		if (counter == 30) {
			clearInterval(interval);
		}
	}, slow_down);
}

function swearUi() {
	$("#city").attr("placeholder", "Enter a "+ing_adjectives[getRandomInt(0, ing_adjectives.length-1)]+" city");
}


// ===================================================================================================== HELPERS 

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//http://jsfiddle.net/5V8mV/1/
// good to use this jsfiddle to test the color range
function get_random_color() {
    var h = getRandomInt(1, 360); // color hue between 1 and 360
    var s = getRandomInt(90, 100); // saturation 30-100%
    var l = getRandomInt(60, 70); // lightness 30-70%
    return 'hsl(' + h + ',' + s + '%,' + l + '%)';
}

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
