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
"backing", "cracking", "jacking", "lacking", "packing", "racking", "sacking", "smacking", "stacking", "tacking", "tracking", "whacking", "wracking"
];

var mother_rhymes = [
"mother", "smother"
];

var exclamations = [
"oh... ","abomination!","abominations!","arg! argh!","bah!","bejeezus!","blast and damnation!","blast it!","blistering barnacles! ","bloody hell!","oh, bother!","botheration!","brother","bugger! ","buggeration! ","oh, buggers!","bummer!","christ!","confound it!","consarn it!","cor ","cor blimey!","crap!","crikey! ","cripes ","crud!","crumbs! ","curses!","curses of curses! ","dadgummit! ","dagnabit! ","damn! double damn!","damn it! dammit!","damn it all to hell!","damn it all to high heaven!","damn it all to kingdom come!","damnation!","dang!","darn! ","darn it! ","darnation! ","dayum! ","the devil! to the devil with it all!","doggonit! ","d'oh! ","drat! ","egad!","egads! ","faugh!","foh! ","feck!","feh!","oh, fiddle! ","fie! fie on it!","for chrissake!","for crying out loud!","for fake sake! for fake's sake! ","for fuck's sake!","for godsake! for godsakes! ","for god's sake! ","for god's sakes!","for heaven's sake!","for Pete's sake!","for pity's sake!","for the love of god!","for the love of Mike! ","for the love of Pete! ","frak! ","frell! ","fuck! fuck it!","fuck-a-doodle-doo! ","fuckity fuck fuck!","fudge! ","gadzooks!  odzooks!  odzookers!  zooks! ","gah! ","gar! ","gawd! gawd damn!","give me a break!","god!","goddamnit! goddangit!","god in heaven!","god rot! gods rot! gods rot it!","good grief! ","gor blimey! ","great! ","great, just great! ","grrr...","heck! ","heckfire!","hell! to hell with it!","hellfire! hellfires!","hell's bells! ","oh, hell and damnation! ","hmph! ","hmmph! ","humph!","horrors! ","oh, horror! ","horror of horrors! ","inconceivable! ","i've had it!","jeez! ","jesus! ","jesus christ! ","jesus h. christ!","jesus christ on a stick!","oh, joy ","just fabulous","just lovely!","just perfect!","just wonderful! ","lumme ","motherfuck!","nertz! ","nertz!  ","NO!","nuts!","perdition!","phooey","rats!","screw it!","sheesh!","shit! ","shite!","shit and shinola!  ","shit and shineola!  ","shoot! ","shove it! stuff it! ","shucks","sod it! ","son of a bitch!","suffering savior  ","suffering succotash!  ","sugar!  ","swell ","tarnation! ","terrific ","this bites!","this just sucks!","this stinks!","thunder! ","thunderation!","thundering typhoon! ","oh, turds!","what a pain!","zounds! ","zwounds!  ","a curse on you!","damn you!","damn you to hell!","to the devil with you!","eat me!","fuck you!","get knotted! ","get rooted! ","get stuffed! ","go fuck a duck! ","go fuck yourself!","go jump in a lake!","go jump off a cliff!","go take a flying fuck! ","go take a flying leap!","go to hell!","god damn you!","to hell with you!","kiss my ass!","kiss my grits!","may your life be interesting! ","screw you!","up yours!","avaunt! ","beat it!","begone!","bite me!","bog off! ","bug off!","buzz off!","fuck off!","get lost!","go fly a kite!","piss off!","scram!","sod off! ","take a hike!","absurd! ","that's absurd!","are you crazy?","are you daft?","are you for real?","are you kidding? you've got to be kidding!","are you off your rocker?","are you out of your mind?","are you out of your tree?","balderdash!","baloney!","bollocks! ","bosh! ","bull! ","what a load of bull!","bullhickey!","bull honkey! ","bull honky!","bullshit! ","that's bullshit!","absolute bunkum! ","that's bunk!","what claptrap!","codswallop! ","crap! what a load of crap!","what crock!","dream on! ","falderal! ","folderol!","fiddle-de-dee! ","fiddle-dee-dee!","fiddlesticks!","flapdoodle! what flapdoodle! ","fudge!","get out! ","get out of here!","hah!","have you gone bananas?","have you gone completely haywire?","have you got a screw loose?","have you lost your head? ","have you lost your mind?","have you lost your marbles? ","have you lost your senses?","hogwash!","that's hokum!","hooey!  ","horsefeathers!","horsepucky! ","horse pucky! ","horse puckey! ","horseshit!","humbug! ","i don't think so!","impossible! that's impossible!","what a bunch of malarkey!","my ass! my foot! my left foot! ","no way! no way in hell!","nonsense!","pah!","piffle! ","pish! ","poppycock!","rhubarb!  ","ridiculous! totally ridiculous!","rubbish! what a load of rubbish!","stroll on!  ","surely you jest!","surely you're not serious!","that's complete lunacy!","the hell...!","tripe! what tripe!","tut!","yeah, and i'm the pope. ","yeah, and i'm the queen mother. ","yeah, right. ","yeah, whatever you say. ","yeah, when hell freezes over!","yeah, when pigs fly!","you've got to be joking!","are you messing with me?","are you pulling my leg? you're pulling my leg!","are you taking the piss?  ","are you trying to pull one over on me?","are you trying to pull the wool over my eyes?","cut the crap!","get off the grass! ","i'm not buying that!","i'm not gullible","i wasn't born yesterday!","pull the other one, it's got bells on!  ","stop pulling my leg!","that's a good one ","what do you take me for, an idiot?","who do you think you're kidding?","you don't think i'm going to fall for that, do you?","you'll have to do better than that!","you're leading me on!","damn right! ","darn tootin! ","i'll say! ","indeed! ","sure is!","totally! ","verily! ","yes sirree!","oh! ","aah!","ack!","ah!","bless my heart! bless my soul!","blimey! cor blimey! gor blimey! ","bloody nora! ","blow me down!","boy, oh boy… ","bugger and blast! ","bugger me! bugger me dead! ","by cracky! ","by George!","by God!","by gum! ","by jingo!","by Jove!","cheese 'n rice! ","christ almighty!","crikey!","criminy! crimeny! ","dang! damn!","dear me!","eek!","fancy that! well, fancy that!","gee! ","geesh! ","gee whiz! ","geez! ","gee manetti! ","gee whillikers! ","gee whillikins! ","golly willikers!","glory be!","glory osky! gloryosky! ","god almighty!","golly! good golly! ","golly ned!  ","good god!","good heavens!","good lord!","goodness! ","gracious! ","goodness gracious!","Gordon Bennett!  ","gosh! ","gramercy! ","great balls of fire!","great caesar's ghost! ","great day!  ","great day in the morning!   ","great day in the world! ","great galaxies! ","great galloping! ","great galloping goannas!  ","great jumping jehoshaphat! ","great maker! ","great scott!","great thundering jesus!","ha!","heavens!","heavens above!","heavens to betsy! ","hey!","holy batman!","holy cow!","holy crap! ","holy guacamole!","holy jalapeño! ","holy mackerel!","holy mary, mother of god!","holy mike! ","holy moley! holy moses!","holy mother of god!","holy shit! ","holy smoke! ","holy tamale! ","holy toledo!","hot damn!","i don't believe it! ","i'll be buggered! ","i'll be gobsmacked! ","i'll be dog! i'll be dog-gone! ","jebus!  ","jeepers! ","jeepers creepers!","jeez! geez!","jeez louise! ","jesus! in the name of jesus!","jesus, mary, and joseph!","jiminy , jimminy , jimminycricket!","jumping jellybeans!","land alive! ","land sakes alive! ","landsakes! ","sakes alive!  ","lo and behold!","lord almighty!","lord have mercy! ","lord a mercy!","lord love a duck! ","lor' luvaduck! ","man!","man alive! ","man oh man!","mercy! mercy me!","my blessed stars!","my god!","my goodness!","my heavens!","my, oh my!","my soul!","my stars!","my word!","no way!","oh, boy.","oh, dear","oh, lordy...","oh, my ","oh, my giddy aunt!  ","oh, no!","oops!","shit!","shit fire and save your matches! ","shit on a brick! ","shiver me timbers!","sink me!","son of a bitch! son of gun!","stone me!  ","stone the crows!  ","streuth! strewth! struth! 'struth!  ","strike a light!  ","strike me pink!  ","sweet baby jesus!","sweet jesus!","sweet jumping christopher!  ","sweet lord of mercy!","sweet merciful crap  ","sweet merciful fuck! holy sweet merciful fuck!","sweet merciful jesus!","sweet mother of god!","sweet suffering jesus!","thunderation! ","uh-oh!","unbelievable! ","well, blow me down!","well, fuck me!  ","well, how about that!","well, i'll be!","well, i'll be a monkey's uncle!","well, i'll be a son of a bitch/gun!","well, i'll be damned!","well, i'll go to the foot of our stairs! ","well, i never!","well, i swan! ","I swanny! ","well, i swear!","well, will you look at that!","what in blazes!","what in hell!","what in tarnation!","what in the name of heaven!","in the name of jesus!","what in the sam hill!","what on earth...","what the...??!","what the crap?","what the dickens?","what the fuck?","what the heck?","what the shit?!","whoa!","whoops!","why, i declare!","why, i'll be darned!","will wonders never cease? ","wow!","yikes!","yipe! yipes!","zoiks! ","awesome!","bitchin'!","brill! ","brilliant!","cool! kewl!","cool beans!","coolness!","cowabunga! ","delightful! ","what a delight!","dynamite!","excellent!","exquisite! ","fab! ","fabulous!","fabtastic!","fabulicious!","fantabulous!","fantastic!","far out!","first-class!","first-rate! ","frabjous!","fresh!","goodie! ","goody!","grand!","great!","groovy!","hallelujah!","hoorah! hooray!","hot diggety! hot diggity!","hot diggety damn!","hot diggity dog!","hot dog! hot dawg!","hubba-hubba! ","hurrah! hurray!","huzzah!","i've died and gone to heaven!","keen!","lovely!","magnificent!","marvelous!","neat-oh!","nifty!","oh, boy!","oh, goodie! ","oh, goody!","out of sight! ","outasight!","perfect!","phat!","praise the lord!","primo","rad! ","radical!","righteous!","right-on!","slammin'!","smashing! ","spectacular!","spiffing! ","spiffy!","splendid!","stupendous!","super! super-duper! super-dooper!","superb!","sweet!","swell!","tight!","terrific!","that's dope!","this kicks ass!","this rocks!","tubular!","wahoo!","way out!","whippee!","whoo-hoo! ","woo-hoo!","whoopee!","wicked!","wild!","wizard!","wonderful!","woo!","woot!","wowee!","yahoo!","yay! yea!","yeah!","yeah, baby!","yee-haw!","yes!","yippee!","yoiks! ","zowie!","attaboy! attagirl!","brava! bravo!","bravissimo!","good on ya! ","way to go!","alack!","alas!","boo hoo! ","ochone! ","ohone!   ","oy vey! ","waesuck! ","waesucks! ","welladay!","well-a-day! ","wellaway!","welaway! ","woe is me!","ah. ","ah... ","ahem ","ahoy! ","avast! ","aw... ","bingo! ","blech! ","boo! ","dear me ","eureka! ","fuckin' A!  ","ha-ha! ","heigh-ho! ","hidey-ho! ","hey! hey there! ","ho-ho! ","just shoot me! ","oof! ooph! ","oofdah!  ","ooh... ","ooh la la! ","ouch! ","ow! ","oi! ","oy! ","phew! ","posh!  ","pshaw ","psst! ","save me! ","ta-da! ","tee-hee! ","tsk, tsk! ","ugh! ","uhhh... ","ummm... ","unh? ","unh! ","voi-la! ","yo! ","yow! ","yuck! ","yummy!"
];

