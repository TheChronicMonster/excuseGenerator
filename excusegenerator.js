// Ripped from http://saturdaykid.com/usernames/generator.html
// It's a really cool name generator. Check it out.
// Ensures the user has chosen an adjective and a noun
var validate = function() {
	var adjectives = document.getElementById("adjective");
	var selectedAdj = adjectives.options[adjectives.selectedIndex].value;
	if (!selectedAdj) {
		var adj = document.getElementById("adjective");
		adj.className = "notSelected";
		return false;
	} else {
		var adj = document.getElementById("adjective");
		adj.className = "";
	}
	var verbs = document.getElementById("verb");
	var selectedVerb = verbs.options[verbs.selectedIndex].value;
	if (!selectedVerb) {
		var verb = document.getElementById("verb");
		verb.className = "notSelected";
		return false;
	} else {
		var verb = document.getElementById("verb");
		verb.className = "";
	}
	var nouns = document.getElementById("noun");
	var selectedNoun = nouns.options[nouns.selectedIndex].value;
	if (!selectedNoun) {
		var noun = document.getElementById("noun");
		noun.className = "notSelected";
		return false;
	} else {
		var noun = document.getElementById("noun");
		noun.className = "";
	}
	generator(selectedAdj, selectedVerb, selectedNoun);
};

// Capitalizes first letter of each word
String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.slice(1);
};
		

// Pulls adjective out of array using random number sent from generator
function getAdj(x){
	switch(x) {
		case "dark": 
			var dark = ["dark","morbid", "scary", "spooky", "gothic", "deviant", "creepy", "sadistic", "black", "dangerous", "dejected", "haunted", 
			"morose", "tragic", "shattered", "broken", "sad", "melancholy", "somber", "dark", "gloomy", "homicidal", "murderous", "shady", "misty", 
			"dusky", "ghostly", "shadowy", "demented", "cursed", "insane", "possessed", "grotesque", "obsessed"];
			return dark;
		case "color": 
			var colors = ["blue", "green", "purple", "grey", "scarlet", "NeonGreen", "NeonBlue", "NeonPink", "HotPink", "pink", "black", "red", 
			"maroon", "silver", "golden", "yellow", "orange", "mustard", "plum", "violet", "cerulean", "brown", "lavender", "violet", "magenta",
			"chestnut", "rosy", "copper", "crimson", "teal", "indigo", "navy", "azure", "periwinkle", "brassy", "verdigris", "veridian", "tan", 
			"raspberry", "beige", "sandy", "ElectricBlue", "white", "champagne", "coral", "cyan"];
			return colors;
		case "whimsical": 
			var whimsy = ["whimsical", "silly", "drunken", "goofy", "funny", "weird", "strange", "odd", "playful", "clever", "boastful", "breakdancing",
			"hilarious", "conceited", "happy", "comical", "curious", "peculiar", "quaint", "quirky", "fancy", "wayward", "fickle", "yawning", "sleepy",
			"cockeyed", "dizzy", "dancing", "absurd", "laughing", "hairy", "smiling", "perplexed", "baffled", "cockamamie", "vulgar", "hoodwinked", 
			"brainwashed"];
			return whimsy;
		case "shiny":
			var shiny = ["sapphire", "opal", "silver", "gold", "platinum", "ruby", "emerald", "topaz", "diamond", "amethyst", "turquoise", 
			"starlit", "moonlit", "bronze", "metal", "jade", "amber", "garnet", "obsidian", "onyx", "pearl", "copper", "sunlit", "brass", "brassy",
			"metallic"];
			return shiny;
		case "noisy":
			var noisy = ["untuned", "loud", "soft", "shrieking", "melodious", "musical", "operatic", "symphonic", "dancing", "lyrical", "harmonic", 
			"orchestral", "noisy", "dissonant", "rhythmic", "hissing", "singing", "crooning", "shouting", "screaming", "wailing", "crying", "howling",
			"yelling", "hollering", "caterwauling", "bawling", "bellowing", "roaring", "squealing", "beeping", "knocking", "tapping", "rapping", 
			"humming", "scatting", "whispered", "whispering", "rasping", "buzzing", "whirring", "whistling", "whistled"];
			return noisy;
		case "apocalyptic":
			var apocalyptic = ["nuclear", "apocalyptic", "desolate", "atomic", "zombie", "collapsed", "grim", "fallen", "collapsed", "cannibalistic", 
			"radioactive", "toxic", "poisonous", "venomous", "disastrous", "grimy", "dirty", "undead", "bloodshot", "rusty", "glowing", "decaying",
			"rotten", "deadly", "plagued", "decimated", "rotting", "putrid", "decayed", "deserted", "acidic"];
			return apocalyptic;
		case "insulting":
			var insulting = ["stupid", "idiotic", "fat", "ugly", "hideous", "grotesque", "dull", "dumb", "lazy", "sluggish", "brainless", "slow", 
			"gullible", "obtuse", "dense", "dim", "dazed", "ridiculous", "witless", "daft", "crazy", "vapid", "inane", "mundane", "hollow", "vacuous",
			"boring", "insipid", "tedious", "monotonous", "weird", "bizarre", "backward", "moronic", "ignorant", "scatterbrained", "forgetful", "careless", 
			"lethargic", "insolent", "indolent", "loitering", "gross", "disgusting", "bland", "horrid", "unseemly", "revolting", "homely", "deformed",
			"disfigured", "offensive", "cowardly", "weak", "villainous", "fearful", "monstrous", "unattractive", "unpleasant", "nasty", "beastly", "snide", 
			"horrible", "syncophantic", "unhelpful", "bootlicking"];
			return insulting;
		case "praise":
			var praise = ["beautiful", "intelligent", "smart", "genius", "ingenious", "gorgeous", "pretty", "witty", "angelic", "handsome", "graceful",
			"talented", "exquisite", "enchanting", "fascinating", "interesting", "divine", "alluring", "ravishing", "wonderful", "magnificient", "marvelous",
			"dazzling", "cute", "charming", "attractive", "nifty", "delightful", "superior", "amiable", "gentle", "heroic", "courageous", "valiant", "brave", 
			"noble", "daring", "fearless", "gallant", "adventurous", "cool", "enthusiastic", "fierce", "awesome", "radical", "tubular", "fearsome", 
			"majestic", "grand", "stunning"];
			return praise;
		case "scientific":
			var scientific = ["scientific", "technical", "digital", "programming", "calculating", "formulating", "cyberpunk", "mechanical", "technological", 
			"innovative", "brainy", "chemical", "quantum", "astro", "space", "theoretical", "atomic", "electronic", "gaseous", "investigative", "solar", 
			"extinct", "galactic"];
			return scientific;
		}
}

// Pulls noun out of array using random number sent from generator
function getNoun(y) {
	switch(y) {
		case "animals": 
			var animals = ["flamingo", "hedgehog", "owl", "elephant", "pussycat", "alligator", "dachsund", "poodle", "beagle", "crocodile", "kangaroo", 
			"wallaby", "woodpecker", "eagle", "falcon", "canary", "parrot", "parakeet", "hamster", "gerbil", "squirrel", "rat", "dove", "toucan", 
			"raccoon", "vulture", "peacock", "goldfish", "rook", "koala", "skunk", "goat", "rooster", "fox", "porcupine", "llama", "grasshopper", 
			"gorilla", "monkey", "seahorse", "wombat", "wolf", "giraffe", "badger", "lion", "mouse", "beetle", "cricket", "nightingale", 
			"hawk", "trout", "squid", "octopus", "sloth", "snail", "locust", "baboon", "lemur", "meerkat", "oyster", "frog", "toad", "jellyfish", 
			"butterfly", "caterpillar", "tiger", "hyena", "zebra", "snail", "pig", "weasel", "donkey", "penguin", "crane", "buzzard", "vulture", 
			"rhino", "hippopotamus", "dolphin", "sparrow", "beaver", "moose", "minnow", "otter", "bat", "mongoose", "swan", "firefly", "platypus"];
			return animals;
		case "profession": 
			var professions = ["doctor", "lawyer", "ninja", "writer", "samurai", "surgeon", "clerk", "artist", "actor", "engineer", "mechanic",
			"comedian", "fireman", "nurse", "RockStar", "musician", "carpenter", "plumber", "cashier", "electrician", "waiter", "president", "governor", 
			"senator", "scientist", "programmer", "singer", "dancer", "director", "mayor", "merchant", "detective", "investigator", "navigator", "pilot",
			"priest", "cowboy", "stagehand", "soldier", "ambassador", "pirate", "miner", "police"];
			return professions;	
		case "fantasy": 
			var fantasy = ["centaur", "wizard", "gnome", "orc", "troll", "sword", "fairy", "pegasus", "halfling", "elf", "changeling", "ghost", 
			"knight", "squire", "magician", "witch", "warlock", "unicorn", "dragon", "wyvern", "princess", "prince", "king", "queen", "jester", 
			"tower", "castle", "kraken", "seamonster", "mermaid", "psychic", "seer", "oracle"];
			return fantasy;
		case "music":
			var music = ["violin", "flute", "bagpipe", "guitar", "symphony", "orchestra", "piano", "trombone", "tuba", "opera", "drums", 
			"harpsichord", "harp", "harmonica", "accordion", "tenor", "soprano", "baritone", "cello", "viola", "piccolo", "ukelele", "woodwind", "saxophone",
			"bugle", "trumpet", "sousaphone", "cornet", "stradivarius", "marimbas", "bells", "timpani", "bongos", "clarinet", "recorder", "oboe", "conductor",
			"singer"];
			return music;
		case "horror":
			var horror = ["murderer", "chainsaw", "knife", "sword", "murder", "devil", "killer", "psycho", "ghost", "monster", "godzilla", "werewolf", 
			"vampire", "demon", "graveyard", "zombie", "mummy", "curse", "death", "grave", "tomb", "beast", "nightmare", "frankenstein", "specter", 
			"poltergeist", "wraith", "corpse", "scream", "massacre", "cannibal", "skull", "bones", "undertaker", "zombie", "creature", "mask", "psychopath",
			"fiend", "satanist", "moon", "fullMoon"];
			return horror;
		case "gross":
			var gross = ["slime", "bug", "roach", "fluid", "pus", "booger", "spit", "boil", "blister", "orifice", "secretion", "mucus", "phlegm", 
			"centipede", "beetle", "fart", "snot", "crevice", "flatulence", "juice", "mold", "mildew", "germs", "discharge", "toilet", "udder", "odor", "substance", 
			"fluid", "moisture", "garbage", "trash", "bug"];
			return gross;
		case "everyday":
			var everyday = ["mirror", "knife", "fork", "spork", "spoon", "tupperware", "minivan", "suburb", "lamp", "desk", "stereo", "television", "TV",
			"book", "car", "truck", "soda", "door", "video", "game", "computer", "calender", "tree", "plant", "flower", "chimney", "attic", "kitchen",
			"garden", "school", "wallet", "bottle"];
			return everyday;
		case "jewelry":
			var jewelry = ["earrings", "ring", "necklace", "pendant", "choker", "brooch", "bracelet", "cameo", "charm", "bauble", "trinket", "jewelry", 
			"anklet", "bangle", "locket", "finery", "crown", "tiara", "blingBling", "chain", "rosary", "jewel", "gemstone", "beads", "armband", "pin",
			"costume", "ornament", "treasure"];
			return jewelry;
		case "places":
			var places = ["swamp", "graveyard", "cemetery", "park", "building", "house", "river", "ocean", "sea", "field", "forest", "woods", "neighborhood",
			"city", "town", "suburb", "country", "meadow", "cliffs", "lake", "stream", "creek", "school", "college", "university", "library", "bakery",
			"shop", "store", "theater", "garden", "canyon", "highway", "restaurant", "cafe", "diner", "street", "road", "freeway", "alley"];
			return places;
		case "scifi":
			var scifi = ["robot", "alien", "raygun", "spaceship", "UFO", "rocket", "phaser", "astronaut", "spaceman", "planet", "star", "galaxy", 
			"computer", "future", "timeMachine", "wormHole", "timeTraveller", "scientist", "invention", "martian", "pluto", "jupiter", "saturn", "mars",
			"quasar", "blackHole", "warpDrive", "laser", "orbit", "gears", "molecule", "electron", "neutrino", "proton", "experiment", "photon", "apparatus",
			"universe", "gravity", "darkMatter", "constellation", "circuit", "asteroid"];
			return scifi;
		}
}

// Pulls verb out of array using random number sent from generator
function getVerb(z){
	switch(z) {
		case "past": 
			var past = ["accepted", "ached", "added", "admired", "advised", "adopted", "affirmed",
			"agreed", "alerted", "alleged", "allowed", "alluded", "amused", "announced", "annoyed",
			"argued", "arranged", "arrested", "articulated", "asked", "attacked", "attended", "avoided",
			"ate", "avowed", "baked", "banned", "bandaged", "bartered", "bathed", "beared", "befriended",
			"believed", "bent", "bit", "bleached", "blinded", "blinked", "blotted", "blew", "blushed",
			"bolted", "bombed", "borrowed", "broke", "burned", "buried", "cajoled", "carved", "changed",
			"cheated", "choked", "collected", "confessed", "condifed", "cooked", "covered", "cracked",
			"crossed", "cried", "damaged", "declared", "delayed", "desired", "developed", "dug", "divided",
			"divorced", "drank", "eloped", "employed", "entertained", "escaped", "evacuated", "excused",
			"expeled", "explored", "extolled", "faxed", "feared", "fenced", "fled"];
			return past;
		case "present":
			var present = ["is adding", "is admiring", "is advising", "is adopting", "is affirming",
			"is alerting", "is allowing", "is amusing", "is announcing", "is annoying", "is arguing",
			"is arranging", "is arresting", "is articulating", "is asking", "is attacking", "is attending",
			"is avoiding", "is eating", "is avowing", "is baking", "is banning", "is bandaging", "is bartering",
			"is bathing", "is bearing", "is befriending", "is believing", "is bending", "is biting",
			"is bleaching", "is blinding", "is blinking", "is blotting", "is blowing", "is blushing",
			"is cheating", "is choking", "is collecting", "is confessing", "is cooking", "is covering",
			"is cracking", "is crossing", "is crying", "is damaging", "is declaring", "is delaying",
			"is desiring", "is developing", "is digging", "is dividing", "is divorcing", "is drinking",
			"is eloping", "is employing", "is entertaining", "is escaping", "is evacuating", "is excusing",
			"is exploring the", "is extolling", "is faxing", "is fearing", "is fencing", "is fleeing"];
			return present;
		case "future":
			var future = ["is going to accept", "is going to ache", "is going to add", "is going to admire",
			"is going to advise", "is going to adopt", "is going to affirm", "is going to agree", "is going to alert",
			"is going to allege", "is going to allow", "is going to allude", "is going to amuse"];
			return future;
		}
}

// Generates random numbers for getAdj and getNoun functions and displays new name on webpage
// name has been changed to excuse
function generator(adj, verb, noun) {
	var adjectives = getAdj(adj);
	var verbs = getVerb(verb);
	var nouns = getNoun(noun);
	var randomNumber1 = parseInt(Math.random() * adjectives.length);
	var randomNumber2 = parseInt(Math.random() * verbs.length);
	var randomNumber3 = parseInt(Math.random() * nouns.length);
	var randomNumber4 = parseInt(Math.random() * nouns.length);
	var excuse = "My " + adjectives[randomNumber1].capitalize() + " " + nouns[randomNumber4].capitalize() + " " + verbs[randomNumber2].capitalize() + " my " + nouns[randomNumber3].capitalize() + ".";
	document.getElementById('excuse').innerHTML=excuse;
}

// Easter Egg function - chooses random adjective and random noun
// randomName has been changed to randomExcuse
function randomExcuse() {
	var adjectives = ["dark", "color", "whimsical", "shiny", "noise", "apocalyptic", "insulting", "praise", "scientific"];
	var verbs = ["past", "present", "future"];
	var nouns = ["animals", "everyday", "fantasy", "gross", "horror", "jewelry", "places", "scifi"];
	var randomNumberAdj = parseInt(Math.random() * adjectives.length);
	var randomNumberVerb = parseInt(Math.random() * verbs.length);
	var randomNumberNoun = parseInt(Math.random() * nouns.length);
	generator(adjectives[randomNumberAdj], nouns[randomNumberNoun]);
	console.log("%c" + document.getElementById("excuse").innerText, 'color: rgb(232, 28, 7); font-family: "Patua One"; letter-spacing: .01em; text-align: center; font-size: 6.5em;');
}

document.getElementById("button").addEventListener("click", validate);
document.getElementById("easteregg").addEventListener("click", randomExcuse);
