var prepositions = [
	"the", // articles also go in prepositions as there are not many of them
	"a",
	"an",
	"and",
	"of",
	"in",
	"to",
	"for",
	"with",
	"on",
	"at",
	"from",
	"by",
	"about",
	"as",
	"into",
	"like",
	"through",
	"after",
	"over",
	"between",
	"out",
	"against",
	"during",
	"without",
	"before",
	"under",
	"around",
	"among"
];


var adjectives = [
"accursed", 
"bally", 
"blamed",
"blankety-blank", 
"blasted",
"bleeding",
"bleeping",
"blessed", 
"blinking", 
"bloody",
"blooming",  
"confounded", 
"consarned", 
"crappy",
"cruddy",
"cursed",
"dad-blamed", 
"dad-blasted", 
"dad-burned", 
"dadgum", 
"daggoned", 
"doggone", 
"doggoned", 
"damn", 
"damned",
"dang", 
"danged", 
"darn", 
"darned", 
"durn", 
"durned", 
"deuced", 
"dratted",
"facking",
"fecking",
"flaming",
"flipping",
"freaking", 
"fricking", 
"frigging",
"frelling", 
"fucked up",
"fucking",
"f\'n", 
"phuckin", 
"phucking", 
"phukin", 
"fugging", 
"phuggin", 
"fookin", 
"fooking",
"goddamn", 
"goddamned",
"goldarn", 
"goldarned",
"infernal",
"motherfucking",
"rotten",
"ruddy",
"shitty",
"sodding", 
"stinking",
"tarnal", 
"crummy", 
"decrepit", 
"junky", 
"shabby", 
"shoddy", 
"trashy",
"foul", 
"putrescent", 
"putrid", 
"slimy",
"disgusting", 
"noxious", 
"obnoxious", 
"repugnant", 
"vile",
"execrable", 
"detestable", 
"abominable", 
"abhorrent",
"miserable", 
"sorry", 
"wretched",
"awful", 
"bad", 
"cruel", 
"deplorable", 
"despicable", 
"dreadful", 
"horrendous", 
"horrible", 
"horrid", 
"terrible",
"devilish", 
"diabolical", 
"evil", 
"fiendish", 
"nefarious", 
"perfidious", 
"pernicious", 
"wicked"
];

// can be inserted before any nown 
var ing_adjectives = getIngAdjectives();

function getIngAdjectives() {

	var ing_array = [];

	for (var i = 0; i < adjectives.length; i++) {
		// if the word ends at "ing"
		if (adjectives[i].slice(-3) == "ing") {
			// put it inside ing_array
			ing_array.push(adjectives[i]);
		}
	};
	return ing_array;
}


var fucking_rhymes = [
"attacking", "backing", "cracking", "jacking", "lacking", "packing", "racking", "sacking", "smacking", "stacking", "tacking", "tracking", "whacking", "wracking"
];

var mother_rhymes = [
"mother", "brother", "smother", "father"
];


