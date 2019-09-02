var startButton = document.getElementById('start');
var testHorse = document.getElementById('test-horse');

var horseNumberOne = {
    name: "David Bowie",
    minInterval: 1000,
    maxInterval: 2000,
    odds: 1,
    color: "blue",
    number: 0
};

var horseNumberTwo = {
    name: "Warren Zevon",
    minInterval: 1000,
    maxInterval: 2050,
    odds: 2,
    color: "green",
    number: 1
};

var horseNumberThree = {
    name: "Pete Townshend",
    minInterval: 1000,
    maxInterval: 2100,
    odds: 2,
    color: "yellow",
    number: 2
};

var horseNumberFour = {
    name: "Keith Richards",
    minInterval: 1000,
    maxInterval: 2150,
    odds: 2,
    color: "orange",
    number: 3
};

var horseNumberFive = {
    name: "Billy Joel",
    minInterval: 1000,
    maxInterval: 2200,
    odds: 2,
    color: "pink",
    number: 4
};

var horseNumberSix = {
    name: "Neil Peart",
    minInterval: 1000,
    maxInterval: 2250,
    odds: 2,
    color: "purple",
    number: 5
};

var horseNumberSeven = {
    name: "Freddie Mercury",
    minInterval: 1000,
    maxInterval: 2300,
    odds: 2,
    color: "red"
};

var horseNumberEight = {
    name: "Jimi Hendrix",
    minInterval: 1000,
    maxInterval: 2350,
    odds: 2,
    color: "gray"
};

var horseNumberNine = {
    name: "Gene Simmons",
    minInterval: 1000,
    maxInterval: 2400,
    odds: 2,
    color: "darkorange"
};

var horseNumberTen = {
    name: "Ted Nugent",
    minInterval: 1000,
    maxInterval: 2450,
    odds: 2,
    color: "darkslategray"
};

var horseNumberEleven = {
    name: "Daryl Hall",
    minInterval: 1000,
    maxInterval: 2500,
    odds: 2,
    color: "deeppink"
};

var horseNumberTwelve = {
    name: "John Oates",
    minInterval: 1000,
    maxInterval: 2550,
    odds: 2,
    color: "lightgreen"
};

var horseNumberThirteen = {
    name: "Meatloaf",
    minInterval: 1000,
    maxInterval: 2600,
    odds: 2,
    color: "steelblue"
};

var horseNumberFourteen = {
    name: "Stevie Nicks",
    minInterval: 1000,
    maxInterval: 2650,
    odds: 2,
    color: "papayawhip"
};

var horseNumberFifteen = {
    name: "Eddie Van Halen",
    minInterval: 1000,
    maxInterval: 2700,
    odds: 2,
    color: "maroon"
};

var horseNumberSixteen = {
    name: "Tom Petty",
    minInterval: 1000,
    maxInterval: 2750,
    odds: 2,
    color: "lime"
};

var horseNumberSeventeen = {
    name: "Jim Morrison",
    minInterval: 1000,
    maxInterval: 2800,
    odds: 2,
    color: "mediumpurple"
};

var horseNumberEighteen = {
    name: "Ringo Starr",
    minInterval: 1000,
    maxInterval: 2850,
    odds: 2,
    color: "teal"
};

var horseNumberNineteen = {
    name: "Lars Ulrich",
    minInterval: 1000,
    maxInterval: 2900,
    odds: 2,
    color: "darkseagreen"
};

var horseNumberTwenty = {
    name: "Sammy Hagar",
    minInterval: 1000,
    maxInterval: 2950,
    odds: 2,
    color: "chartreuse"
};

var horseArray = [horseNumberOne, horseNumberTwo, horseNumberThree, horseNumberFour, horseNumberFive, horseNumberSix, horseNumberSeven, horseNumberEight, horseNumberNine, horseNumberTen, horseNumberEleven, horseNumberTwelve, horseNumberThirteen, horseNumberFourteen, horseNumberFifteen, horseNumberSixteen, horseNumberSeventeen, horseNumberEighteen, horseNumberNineteen, horseNumberTwenty];

var laneOneHorse;
var laneTwoHorse;
var laneThreeHorse;
var laneFourHorse;
var laneFiveHorse;
var laneSixHorse;

function pickRandomHorses () {
    laneOneHorse = horseArray[Math.floor(Math.random() * 20)];

    do {
        laneTwoHorse = horseArray[Math.floor(Math.random() * 20)];
    } while (laneOneHorse === laneTwoHorse);

    do {
        laneThreeHorse = horseArray[Math.floor(Math.random() * 20)];
    } while (laneTwoHorse === laneThreeHorse || laneOneHorse === laneThreeHorse);

    do {
        laneFourHorse = horseArray[Math.floor(Math.random() * 20)];
    } while (laneFourHorse === laneOneHorse || laneFourHorse === laneTwoHorse || laneFourHorse === laneThreeHorse);

    do {
        laneFiveHorse = horseArray[Math.floor(Math.random() * 20)];
    } while (laneFiveHorse === laneOneHorse || laneFiveHorse === laneTwoHorse || laneFiveHorse === laneThreeHorse || laneFiveHorse === laneFourHorse);

    do {
        laneSixHorse = horseArray[Math.floor(Math.random() * 20)];
    } while (laneSixHorse === laneOneHorse || laneSixHorse === laneTwoHorse || laneSixHorse === laneThreeHorse || laneSixHorse === laneFourHorse || laneSixHorse === laneFiveHorse);

    $("#horse-1-li").text(laneOneHorse.name);
    $("#horse-2-li").text(laneTwoHorse.name);
    $("#horse-3-li").text(laneThreeHorse.name);
    $("#horse-4-li").text(laneFourHorse.name);
    $("#horse-5-li").text(laneFiveHorse.name);
    $("#horse-6-li").text(laneSixHorse.name);

    $("#horse-one-box").css("background-color", laneOneHorse.color);
    $("#horse-two-box").css("background-color", laneTwoHorse.color);
    $("#horse-three-box").css("background-color", laneThreeHorse.color);
    $("#horse-four-box").css("background-color", laneFourHorse.color);
    $("#horse-five-box").css("background-color", laneFiveHorse.color);
    $("#horse-six-box").css("background-color", laneSixHorse.color);
}

pickRandomHorses();

$("button").click(function(){
    console.log(laneOneHorse);
    console.log(laneTwoHorse);
    console.log(laneThreeHorse);
    console.log(laneFourHorse);
    console.log(laneFiveHorse);
    console.log(laneSixHorse);
    var firstInterval = Math.floor(Math.random() * (laneOneHorse.maxInterval - laneOneHorse.minInterval) + laneOneHorse.minInterval);
    var secondInterval = Math.floor(Math.random() * (laneOneHorse.maxInterval - laneOneHorse.minInterval) + laneOneHorse.minInterval);
    var thirdInterval = Math.floor(Math.random() * (laneOneHorse.maxInterval - laneOneHorse.minInterval) + laneOneHorse.minInterval);
    var fourthInterval = Math.floor(Math.random() * (laneOneHorse.maxInterval - laneOneHorse.minInterval) + laneOneHorse.minInterval);
    var fifthInterval = Math.floor(Math.random() * (laneOneHorse.maxInterval - laneOneHorse.minInterval) + laneOneHorse.minInterval);
    var intervalTotal = firstInterval + secondInterval + thirdInterval + fourthInterval + fifthInterval;
    $("#horse-one-box").animate({left: "+=19vw"}, firstInterval);
    $("#horse-one-box").animate({left: "+=19vw"}, secondInterval);
    $("#horse-one-box").animate({left: "+=19vw"}, thirdInterval);
    $("#horse-one-box").animate({left: "+=19vw"}, fourthInterval);
    $("#horse-one-box").animate({left: "+=19vw"}, fifthInterval);
    var timeoutId = setTimeout(function () {
        $("ol").append("<li>" + intervalTotal + laneOneHorse.name +"</li>");
    }, intervalTotal);

    console.log("this works");
    var firstIntervalTwo = Math.floor(Math.random() * (laneTwoHorse.maxInterval - laneTwoHorse.minInterval) + laneTwoHorse.minInterval);
    var secondIntervalTwo = Math.floor(Math.random() * (laneTwoHorse.maxInterval - laneTwoHorse.minInterval) + laneTwoHorse.minInterval);
    var thirdIntervalTwo = Math.floor(Math.random() * (laneTwoHorse.maxInterval - laneTwoHorse.minInterval) + laneTwoHorse.minInterval);
    var fourthIntervalTwo = Math.floor(Math.random() * (laneTwoHorse.maxInterval - laneTwoHorse.minInterval) + laneTwoHorse.minInterval);
    var fifthIntervalTwo = Math.floor(Math.random() * (laneTwoHorse.maxInterval - laneTwoHorse.minInterval) + laneTwoHorse.minInterval);
    var intervalTotalTwo = firstIntervalTwo + secondIntervalTwo + thirdIntervalTwo + fourthIntervalTwo + fifthIntervalTwo;
    $("#horse-two-box").animate({left: "+=19vw"}, firstIntervalTwo);
    $("#horse-two-box").animate({left: "+=19vw"}, secondIntervalTwo);
    $("#horse-two-box").animate({left: "+=19vw"}, thirdIntervalTwo);
    $("#horse-two-box").animate({left: "+=19vw"}, fourthIntervalTwo);
    $("#horse-two-box").animate({left: "+=19vw"}, fifthIntervalTwo);
    var timeoutId = setTimeout(function () {
        $("ol").append("<li>" + intervalTotalTwo + laneTwoHorse.name + "</li>");
    }, intervalTotalTwo);

    var firstIntervalThree = Math.floor(Math.random() * (laneThreeHorse.maxInterval - laneThreeHorse.minInterval) + laneThreeHorse.minInterval);
    var secondIntervalThree = Math.floor(Math.random() * (laneThreeHorse.maxInterval - laneThreeHorse.minInterval) + laneThreeHorse.minInterval);
    var thirdIntervalThree = Math.floor(Math.random() * (laneThreeHorse.maxInterval - laneThreeHorse.minInterval) + laneThreeHorse.minInterval);
    var fourthIntervalThree = Math.floor(Math.random() * (laneThreeHorse.maxInterval - laneThreeHorse.minInterval) + laneThreeHorse.minInterval);
    var fifthIntervalThree = Math.floor(Math.random() * (laneThreeHorse.maxInterval - laneThreeHorse.minInterval) + laneThreeHorse.minInterval);
    var intervalTotalThree = firstIntervalThree + secondIntervalThree + thirdIntervalThree + fourthIntervalThree + fifthIntervalThree;
    $("#horse-three-box").animate({left: "+=19vw"}, firstIntervalThree);
    $("#horse-three-box").animate({left: "+=19vw"}, secondIntervalThree);
    $("#horse-three-box").animate({left: "+=19vw"}, thirdIntervalThree);
    $("#horse-three-box").animate({left: "+=19vw"}, fourthIntervalThree);
    $("#horse-three-box").animate({left: "+=19vw"}, fifthIntervalThree);
    var timeoutId = setTimeout(function () {
        $("ol").append("<li>" + intervalTotalThree + laneThreeHorse.name + "</li>");
    }, intervalTotalThree);

    var firstIntervalFour = Math.floor(Math.random() * (laneFourHorse.maxInterval - laneFourHorse.minInterval) + laneFourHorse.minInterval);
    var secondIntervalFour = Math.floor(Math.random() * (laneFourHorse.maxInterval - laneFourHorse.minInterval) + laneFourHorse.minInterval);
    var thirdIntervalFour = Math.floor(Math.random() * (laneFourHorse.maxInterval - laneFourHorse.minInterval) + laneFourHorse.minInterval);
    var fourthIntervalFour = Math.floor(Math.random() * (laneFourHorse.maxInterval - laneFourHorse.minInterval) + laneFourHorse.minInterval);
    var fifthIntervalFour = Math.floor(Math.random() * (laneFourHorse.maxInterval - laneFourHorse.minInterval) + laneFourHorse.minInterval);
    var intervalTotalFour = firstIntervalFour + secondIntervalFour + thirdIntervalFour + fourthIntervalFour + fifthIntervalFour;
    $("#horse-four-box").animate({left: "+=19vw"}, firstIntervalFour);
    $("#horse-four-box").animate({left: "+=19vw"}, secondIntervalFour);
    $("#horse-four-box").animate({left: "+=19vw"}, thirdIntervalFour);
    $("#horse-four-box").animate({left: "+=19vw"}, fourthIntervalFour);
    $("#horse-four-box").animate({left: "+=19vw"}, fifthIntervalFour);
    var timeoutId = setTimeout(function () {
        $("ol").append("<li>" + intervalTotalFour + laneFourHorse.name + "</li>");
    }, intervalTotalFour);

    var firstIntervalFive = Math.floor(Math.random() * (laneFiveHorse.maxInterval - laneFiveHorse.minInterval) + laneFiveHorse.minInterval);
    var secondIntervalFive = Math.floor(Math.random() * (laneFiveHorse.maxInterval - laneFiveHorse.minInterval) + laneFiveHorse.minInterval);
    var thirdIntervalFive = Math.floor(Math.random() * (laneFiveHorse.maxInterval - laneFiveHorse.minInterval) + laneFiveHorse.minInterval);
    var fourthIntervalFive = Math.floor(Math.random() * (laneFiveHorse.maxInterval - laneFiveHorse.minInterval) + laneFiveHorse.minInterval);
    var fifthIntervalFive = Math.floor(Math.random() * (laneFiveHorse.maxInterval - laneFiveHorse.minInterval) + laneFiveHorse.minInterval);
    var intervalTotalFive = firstIntervalFive + secondIntervalFive + thirdIntervalFive + fourthIntervalFive + fifthIntervalFive;
    $("#horse-five-box").animate({left: "+=19vw"}, firstIntervalFive);
    $("#horse-five-box").animate({left: "+=19vw"}, secondIntervalFive);
    $("#horse-five-box").animate({left: "+=19vw"}, thirdIntervalFive);
    $("#horse-five-box").animate({left: "+=19vw"}, fourthIntervalFive);
    $("#horse-five-box").animate({left: "+=19vw"}, fifthIntervalFive);
    var timeoutId = setTimeout(function () {
        $("ol").append("<li>" + intervalTotalFive + laneFiveHorse.name + "</li>");
    }, intervalTotalFive);

    var firstIntervalSix = Math.floor(Math.random() * (laneSixHorse.maxInterval - laneSixHorse.minInterval) + laneSixHorse.minInterval);
    var secondIntervalSix = Math.floor(Math.random() * (laneSixHorse.maxInterval - laneSixHorse.minInterval) + laneSixHorse.minInterval);
    var thirdIntervalSix = Math.floor(Math.random() * (laneSixHorse.maxInterval - laneSixHorse.minInterval) + laneSixHorse.minInterval);
    var fourthIntervalSix = Math.floor(Math.random() * (laneSixHorse.maxInterval - laneSixHorse.minInterval) + laneSixHorse.minInterval);
    var fifthIntervalSix = Math.floor(Math.random() * (laneSixHorse.maxInterval - laneSixHorse.minInterval) + laneSixHorse.minInterval);
    var intervalTotalSix = firstIntervalSix + secondIntervalSix + thirdIntervalSix + fourthIntervalSix + fifthIntervalSix;
    $("#horse-six-box").animate({left: "+=19vw"}, firstIntervalSix);
    $("#horse-six-box").animate({left: "+=19vw"}, secondIntervalSix);
    $("#horse-six-box").animate({left: "+=19vw"}, thirdIntervalSix);
    $("#horse-six-box").animate({left: "+=19vw"}, fourthIntervalSix);
    $("#horse-six-box").animate({left: "+=19vw"}, fifthIntervalSix);
    var timeoutId = setTimeout(function () {
        $("ol").append("<li>" + intervalTotalSix + laneSixHorse.name + "</li>");
    }, intervalTotalSix);
});


