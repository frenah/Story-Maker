//Stores for inoputs
var boxOne = "name";
var boxTwo = "favourite animal";
var boxThree = "favourite food";
var boxFour = "best friend";
var boxFive = "???";

//Stores for story sections
var partOne = 0;
var partTwo = 0;
var partThree = 0;
var partFour = 0;
var partFive = 0;


//First Section Of The Story
$(document).on("keyup", ".input-field", function() {
	boxOne = $("#name").val();
	boxTwo = $("#favouriteAnimal").val();
	boxThree = $("#favouriteFood").val();
	boxFour = $("#bestFriend").val();
	boxFive = $("#random").val();

	storySectionOne = [
//Type 1
"It was a fine morning. " + boxOne + " was just waking up. They were planning on seeing " + boxFour + " later that day. They suspected that " + boxFour + " was going to flake on them and so they called to confirm plans. After a long conversation they decided they would meet at " 
, //Type 2
"It was late morning. " + boxOne + " had just woken up. They were just about to start cooking " + boxThree + " as their friend " + boxFour + " was coming over for lunch. They knew that " + boxFour + " was kind of a flake and so they called them to make sure that they were still visiting. After the conversation they decided they would meet at "
, //Type 3
boxOne + " was walking along " + boxFive + "  road. A bus drove by when suddenly " + boxFour + " fell off of the bus. Don&#39t ask how it happened, it just sort of did??? Well anyway, " + boxFour + " had a few scrapes and bruises. It was nothing major but they questioned whether or not they needed to go to hospital. In the end they decided it would be best to go to "   
, //Type 4
boxOne + " was strolling down " + boxFive + " road one fine day when they spotted a super cool human called " + boxFour + ". They just sort of became bffs just like that. Like, friends at first sight. I mean, you can&#39t even write stuff like that. You could probably automatically generate a story like that though. Anyway, they decided to go to "
, //Type 5
"&#34It&#39s been 5 long years " + boxOne + " but we&#39ve finally done it&#34 said the scientist. &#34We&#39ve finally managed to bioengineer you a friend! What would you like your friend to be called&#34? &#34How about " + boxFour + "&#34 " + boxOne + " stated. &#34Excellent choice&#34 said the scientist. &#34So where would you like to go first "+ boxFour + "&#34 " + boxOne + " asked. " + boxFour + " decided to go to "
];
})

//Second Section Of The Story
$(document).on("keyup", ".input-field", function() {
	boxOne = $("#name").val();
	boxTwo = $("#favouriteAnimal").val();
	boxThree = $("#favouriteFood").val();
	boxFour = $("#bestFriend").val();
	boxFive = $("#random").val();

	storySectionTwo = [
//Type 1
boxOne + "&#39s house. <br><br>" + boxOne + " started cooking " + boxThree + ". They got a little carried away and started putting " + boxFive + " in it. They were both concerned it would ruin the flavour but in actual fact, it improved it! After lunch " + boxOne + " started talking about the time "  
, //Type 2
boxFour + "&#39s new home. <br><br>It was incredibly spacious and well decorated. It even had a " + boxFive + " hanging on the wall! " + boxFour + " introduced " + boxOne + " to their pet " + boxTwo + ". &#34What&#39s this little feller&#39s  name&#34? Asked " + boxOne + ". " + boxThree + " replied " + boxFour + ". " + boxOne + " considered this to be a rather strange name for a pet " + boxTwo + ". Regardless they were distracted by what was going on on the T.V. It showed news suggesting that "
, //Type 3
"the hospital. <br><br>Once at hospital they talked to the King of the doctors... Wait that&#39s  sexist, the queen of the doctors! Wait that&#39s  still sexist. Guess I&#39ll just have to call them the head doctor... That&#39s a thing right? Wait why were " + boxOne + " and " + boxFour + " here again? I think I got side-tracked in meta thoughts. Erm, suddenly "
, //Type 4
"a " + boxFive + " themed caf&eacute. <br><br>It was actually really fancy and stuck to the theme perfectly. They both got a hot drink. &#34Have you ever heard of donut theory&#34 " + boxOne + " asked. &#34No, what&#39s that about?&#34 " + boxFour + " replied. &#34Well basically, have you ever noticed how ring donuts have holes? When you eat a donut, you don&#39t eat the hole do you? So what happens to the hole? It just floats off into existence doesn&#39t it? Some people are calling it a major breakthrough in physics which is radically changing the way we understand the continued expansion of the universe. The more ring donuts we eat, the bigger the universe gets&#34! &#34You&#39re a moran " + boxOne + "&#34 responded "+ boxFour +". They were then interrupted because "
, //Type 5
"a super secret laboratory.<br><br>It was super high tech. I mean, they even had scientists reverse engineering a " + boxFive + ". It was a super chill lab as well. Like, they didn&#39t even have that strict no pets allowed policy. They even had some " + boxTwo + "s helping them with the reverse engineering. It was the perfect lab. They decided to stay for four months in order to train the friendly and consenting " + boxTwo + "s. They decided their work was done when one day they noticed that "
];
})

//Third Section Of The Story
$(document).on("keyup", ".input-field", function() {
	boxOne = $("#name").val();
	boxTwo = $("#favouriteAnimal").val();
	boxThree = $("#favouriteFood").val();
	boxFour = $("#bestFriend").val();
	boxFive = $("#random").val();

	storySectionThree = [
//Type 1
"a " + boxTwo +" was making a massive " + boxThree + ".<br><br> It was quite remarkable really. I mean yeah, they were using " + boxFive + " as an ingredient. But let&#39s not get judgy here. I mean they are just a " + boxTwo + " after all. Once they had made the " + boxThree + " they offered some to everyone in the room. It was quite spectacular really."
, //Type 2
" the world record for the largest " + boxThree + " had been set.<br><br> It was immense. There was so much " + boxThree + ". I mean yeah, it did contain " + boxFive + " but seriously people just need to get used to making " + boxThree + " with " + boxFive + ". Regardless, hurds of " + boxTwo + "s flocked to it. They ate it. All of it. It was an intense moment of glory!"
, //Type 3
boxFour + " got stuck and started saying &#34" + boxFive + ", " + boxFive + ", " + boxFive + ", " + boxFive + ", " + boxFive + ", " + boxFive + ", " + boxFive + ", " + boxFive + ", " + boxFive + ", " + boxFive + ", " + boxFive + "&#34 ect. You get the general idea.<br><br>It just kept on going for hours, days, year, seconds even! Needless to say it was quite terrifying for " + boxFour + ". It only calmed down when someone rubbed " + boxThree + " into " + boxFour + "&#39s face. At the time no one seemed to understand why it helped " + boxFour + ". In the end it turned out to be something to do with the " + boxThree + " containing " + boxFive +  "."
, //Type 4
"a " + boxTwo + " barged in through the wall. <br><br>Like, it literally came straight through the wall as if it was made out of " + boxFive + " or something. It started talking to " + boxOne + " in Japanese. " + boxOne + " did not talk Japanese however so it was kind of wasted on them. I mean, not to undermine a talking " + boxTwo + " or anything. It&#39s really impressive but I feel like you really have to be able to talk Japanese to fully appreciate it."
, //Type 5
"people in the same room had started dissecting " + boxFive + "s.<br><br>It was kind of a mood killer. I mean, yeah, scientists reverse engineer " + boxFive + "s all the time but that&#39s not the same as dissecting. Besides, science right? Am I right? I mean everyone loves science, even though a lot of people who talk about science fail to fully understand the basic fundamentals of it but still rabbit on... I mean " + boxTwo + " on about it like they&#39re some kind of expert. They&#39re morans really though. "
];
})

//Forth Section Of The Story
$(document).on("keyup", ".input-field", function() {
	boxOne = $("#name").val();
	boxTwo = $("#favouriteAnimal").val();
	boxThree = $("#favouriteFood").val();
	boxFour = $("#bestFriend").val();
	boxFive = $("#random").val();

	storySectionFour = [
//Type 1
"<br><br>It was at this moment " + boxOne + " realised, due to their extensive studies, that this could only mean one thing. It was the start of the zombie apocalypse. This may seem strange to a layman but to any keen scholar of zombiography it makes total sense. " + boxOne + " and " + boxFour + " immediately started preparing. Boarding off windows, locking doors, stashing away all of the " + boxFive +". If anyone could survive the zombie apocalypse, it would be these two. But if that happened, would it really be an apocalypse? #Deepman"
, //Type 2
"4.1Coming Soon"
, //Type 3
"4.2Coming Soon"
, //Type 4
"4.3Coming Soon"
, //Type 5
"4.4Coming Soon"
];
})

//Fith Section Of The Story
$(document).on("keyup", ".input-field", function() {
	boxOne = $("#name").val();
	boxTwo = $("#favouriteAnimal").val();
	boxThree = $("#favouriteFood").val();
	boxFour = $("#bestFriend").val();
	boxFive = $("#random").val();

	storySectionFive = [
//Type 1
"5.0Coming Soon"
, //Type 2
"5.1Coming Soon"
, //Type 3
"5.2Coming Soon"
, //Type 4
"5.3Coming Soon"
, //Type 5
"5.4Coming Soon"
];
})









//Converts entered text into numbers 0-4. My friend wrote this and I dont fully understand it yet 09/03/2017
var alphaStore = {}; for (var i = 65; i <= 90; i++) { alphaStore[String.fromCharCode(i)] = i % 5; }; for (var i = 97; i <= 122; i++) { alphaStore[String.fromCharCode(i)] = (i - 2) % 5; }

//Restricts what can be entered into an input box to letters
function checkLetters() {
  this.event.target.value = this.event.target.value.replace(/[^a-zA-Z]+/, '');
}; 

//STORY BASED ON NAME
$(document).on("keyup", "#name", function() {

	list = this.value.split("");
	var numericalValues = [];
	var total = 0;

	for (var ii = 0; ii < list.length; ii++) {
		numericalValues[ii] = alphaStore[list[ii]]
		total = numericalValues[ii] + total
	}
	partOne = total/numericalValues.length
	$('#sectionOne').replaceWith("<span id='sectionOne'>" + storySectionOne[Math.floor(partOne)] + "</span>");
	$('#sectionTwo').replaceWith("<span id='sectionTwo'>" + storySectionTwo[Math.floor(partTwo)] + "</span>");
	$('#sectionThree').replaceWith("<span id='sectionThree'>" + storySectionThree[Math.floor(partThree)] + "</span>");
	$('#sectionFour').replaceWith("<span id='sectionFour'>" + storySectionFour[Math.floor(partFour)] + "</span>");
	$('#sectionFive').replaceWith("<span id='sectionFive'>" + storySectionFive[Math.floor(partFive)] + "</span>");
})

//STORY BASED ON ANIMAL
$(document).on("keyup", "#favouriteAnimal", function() {

	list = this.value.split("");
	var numericalValues = [];
	var total = 0;

	for (var ii = 0; ii < list.length; ii++) {
		numericalValues[ii] = alphaStore[list[ii]]
		total = numericalValues[ii] + total
	}
	partTwo = total/numericalValues.length
	$('#sectionOne').replaceWith("<span id='sectionOne'>" + storySectionOne[Math.floor(partOne)] + "</span>");
	$('#sectionTwo').replaceWith("<span id='sectionTwo'>" + storySectionTwo[Math.floor(partTwo)] + "</span>");
	$('#sectionThree').replaceWith("<span id='sectionThree'>" + storySectionThree[Math.floor(partThree)] + "</span>");
	$('#sectionFour').replaceWith("<span id='sectionFour'>" + storySectionFour[Math.floor(partFour)] + "</span>");
	$('#sectionFive').replaceWith("<span id='sectionFive'>" + storySectionFive[Math.floor(partFive)] + "</span>");
})

//STORY BASED ON FOOD
$(document).on("keyup", "#favouriteFood", function() {

	list = this.value.split("");
	var numericalValues = [];
	var total = 0;

	for (var ii = 0; ii < list.length; ii++) {
		numericalValues[ii] = alphaStore[list[ii]]
		total = numericalValues[ii] + total
	}
	partThree = total/numericalValues.length
	$('#sectionOne').replaceWith("<span id='sectionOne'>" + storySectionOne[Math.floor(partOne)] + "</span>");
	$('#sectionTwo').replaceWith("<span id='sectionTwo'>" + storySectionTwo[Math.floor(partTwo)] + "</span>");
	$('#sectionThree').replaceWith("<span id='sectionThree'>" + storySectionThree[Math.floor(partThree)] + "</span>");
	$('#sectionFour').replaceWith("<span id='sectionFour'>" + storySectionFour[Math.floor(partFour)] + "</span>");
	$('#sectionFive').replaceWith("<span id='sectionFive'>" + storySectionFive[Math.floor(partFive)] + "</span>");
})

//STORY BASED ON FRIEND
$(document).on("keyup", "#bestFriend", function() {

	list = this.value.split("");
	var numericalValues = [];
	var total = 0;

	for (var ii = 0; ii < list.length; ii++) {
		numericalValues[ii] = alphaStore[list[ii]]
		total = numericalValues[ii] + total
	}
	partFour = total/numericalValues.length
	$('#sectionOne').replaceWith("<span id='sectionOne'>" + storySectionOne[Math.floor(partOne)] + "</span>");
	$('#sectionTwo').replaceWith("<span id='sectionTwo'>" + storySectionTwo[Math.floor(partTwo)] + "</span>");
	$('#sectionThree').replaceWith("<span id='sectionThree'>" + storySectionThree[Math.floor(partThree)] + "</span>");
	$('#sectionFour').replaceWith("<span id='sectionFour'>" + storySectionFour[Math.floor(partFour)] + "</span>");
	$('#sectionFive').replaceWith("<span id='sectionFive'>" + storySectionFive[Math.floor(partFive)] + "</span>");
})

//STORY BASED ON ???
$(document).on("keyup", "#random", function() {

	list = this.value.split("");
	var numericalValues = [];
	var total = 0;

	for (var ii = 0; ii < list.length; ii++) {
		numericalValues[ii] = alphaStore[list[ii]]
		total = numericalValues[ii] + total
	}
	partFive = total/numericalValues.length
	$('#sectionOne').replaceWith("<span id='sectionOne'>" + storySectionOne[Math.floor(partOne)] + "</span>");
	$('#sectionTwo').replaceWith("<span id='sectionTwo'>" + storySectionTwo[Math.floor(partTwo)] + "</span>");
	$('#sectionThree').replaceWith("<span id='sectionThree'>" + storySectionThree[Math.floor(partThree)] + "</span>");
	$('#sectionFour').replaceWith("<span id='sectionFour'>" + storySectionFour[Math.floor(partFour)] + "</span>");
	$('#sectionFive').replaceWith("<span id='sectionFive'>" + storySectionFive[Math.floor(partFive)] + "</span>");
})






/*
$(document).on("keyup", "#name", function() {
	list = this.value.split("");
	var numericalValues = [];
	for (var ii = 0; ii < list.length; ii++) {
		numericalValues[ii] = alphaStore[list[ii]]
	storyNumber = numericalValues;
	} 
	console.log(storyNumber);

		if (list[ii] !== NaN) {											
		trueList.push(list[ii]);
	}
})



for (var iii = 0; iii < numericalValues.length; iii++) {								// For the length of animals
	if (numericalValues[iii] !== undefined) {											// if the animals does not = cow
		trueList.push(numericalValues[iii]);	
		total = trueList[iii] + total								// add it to the NEW GLOBAL array of animals
	}																	// AKA
}	

									




*/
