var startButton = document.getElementById('start');
var testHorse = document.getElementById('test-horse');

$("button").click(function(){
    console.log("this works");
    var firstInterval = Math.floor(Math.random() * (2000 - 800) + 800);
    var secondInterval = Math.floor(Math.random() * (2000 - 800) + 800);
    var thirdInterval = Math.floor(Math.random() * (2000 - 800) + 800);
    var fourthInterval = Math.floor(Math.random() * (2000 - 800) + 800);
    var fifthInterval = Math.floor(Math.random() * (2000 - 800) + 800);
    var intervalTotal = firstInterval + secondInterval + thirdInterval + fourthInterval + fifthInterval;
    $("#test-horse").animate({left: "+=19vw"}, firstInterval);
    $("#test-horse").animate({left: "+=19vw"}, secondInterval);
    $("#test-horse").animate({left: "+=19vw"}, thirdInterval);
    $("#test-horse").animate({left: "+=19vw"}, fourthInterval);
    $("#test-horse").animate({left: "+=19vw"}, fifthInterval);
    var timeoutId = setTimeout(function () {
        $("footer").append("<p>WE DID IT!!!</p><p>" + intervalTotal + "</p>");
    }, intervalTotal)

    console.log("this works");
    var firstIntervalTwo = Math.floor(Math.random() * (2200 - 1000 ) + 1000);
    var secondIntervalTwo = Math.floor(Math.random() * (2200 - 1000 ) + 1000);
    var thirdIntervalTwo = Math.floor(Math.random() * (2200 - 1000 ) + 1000);
    var fourthIntervalTwo = Math.floor(Math.random() * (2200 - 1000 ) + 1000);
    var fifthIntervalTwo = Math.floor(Math.random() * (2200 - 1000 ) + 1000);
    var intervalTotalTwo = firstIntervalTwo + secondIntervalTwo + thirdIntervalTwo + fourthIntervalTwo + fifthIntervalTwo;
    $("#test-horse-two").animate({left: "+=19vw"}, firstIntervalTwo);
    $("#test-horse-two").animate({left: "+=19vw"}, secondIntervalTwo);
    $("#test-horse-two").animate({left: "+=19vw"}, thirdIntervalTwo);
    $("#test-horse-two").animate({left: "+=19vw"}, fourthIntervalTwo);
    $("#test-horse-two").animate({left: "+=19vw"}, fifthIntervalTwo);
    var timeoutId = setTimeout(function () {
        $("footer").append("<p>WE DID IT TWO!!!</p><p>" + intervalTotalTwo + "</p>");
    }, intervalTotalTwo)
});

var horseNumberOne = {
    name: "David Bowie",
    minInterval: 1000,
    maxInterval: 2000,
    odds: 1
};

var horseNumberTwo = {
    name: "Warren Zevon",
    minInterval: 800,
    maxInterval: 2000,
    odds: 2
};

var horseNumberThree = {
    name: "Pete Townshend",
    minInterval: 1000,
    maxInterval: 2300,
    odds: 2
};

var horseNumberFour = {
    name: "Keith Richards",
    minInterval: 1000,
    maxInterval: 2000,
    odds: 2
};

var horseNumberFive = {
    name: "Billy Joel",
    minInterval: 1000,
    maxInterval: 2000,
    odds: 2
};

var horseNumberSix = {
    name: "Neil Peart",
    minInterval: 1000,
    maxInterval: 2500,
    odds: 2
};

var horseNumberSeven = {
    name: "Freddie Mercury",
    minInterval: 1000,
    maxInterval: 2000,
    odds: 2
};

var horseNumberEight = {
    name: "Jimi Hendrix",
    minInterval: 1000,
    maxInterval: 2000,
    odds: 2
};

var horseNumberNine = {
    name: "Gene Simmons",
    minInterval: 1000,
    maxInterval: 2000,
    odds: 2
};

var horseNumberTen = {
    name: "Ted Nugent",
    minInterval: 1000,
    maxInterval: 2000,
    odds: 2
};

var horseNumberEleven = {
    name: "Daryl Hall",
    minInterval: 1000,
    maxInterval: 2000,
    odds: 2
};

var horseNumberTwelve = {
    name: "John Oates",
    minInterval: 1000,
    maxInterval: 2000,
    odds: 2
};

var horseNumberThirteen = {
    name: "Meatloaf",
    minInterval: 1000,
    maxInterval: 2000,
    odds: 2
};

var horseNumberFourteen = {
    name: "Stevie Nicks",
    minInterval: 1000,
    maxInterval: 2000,
    odds: 2
};

var horseNumberFifteen = {
    name: "Eddie Van Halen",
    minInterval: 1000,
    maxInterval: 2000,
    odds: 2
};

var horseNumberSixteen = {
    name: "Tom Petty",
    minInterval: 1000,
    maxInterval: 2000,
    odds: 2
};

var horseNumberSeventeen = {
    name: "Jim Morrison",
    minInterval: 1000,
    maxInterval: 2000,
    odds: 2
};

var horseNumberEighteen = {
    name: "Ringo Starr",
    minInterval: 1000,
    maxInterval: 2000,
    odds: 2
};

var horseNumberNineteen = {
    name: "Lars Ulrich",
    minInterval: 1000,
    maxInterval: 2000,
    odds: 2
};

var horseNumberTwenty = {
    name: "Sammy Hagar",
    minInterval: 1000,
    maxInterval: 2000,
    odds: 2
};

var horseArray = [horseNumberOne, horseNumberTwo, horseNumberThree, horseNumberFour, horseNumberFive, horseNumberSix, horseNumberSeven, horseNumberEight, horseNumberNine, horseNumberTen, horseNumberEleven, horseNumberTwelve, horseNumberThirteen, horseNumberFourteen, horseNumberFifteen, horseNumberSixteen, horseNumberSeventeen, horseNumberEighteen, horseNumberNineteen, horseNumberTwenty];