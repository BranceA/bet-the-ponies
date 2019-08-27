var startButton = document.getElementById('start');
var testHorse = document.getElementById('test-horse');

// $("#start").click(function () {
//     $("#test-horse").animate({left: "200px"}, 1000);
// });

$("button").click(function(){
    console.log("this works");
    var firstInterval = Math.floor(Math.random() * (2000 - 100 +1));
    var secondInterval = Math.floor(Math.random() * (2000 - 100 +1));
    var thirdInterval = Math.floor(Math.random() * (2000 - 100 +1));
    var fourthInterval = Math.floor(Math.random() * (2000 - 100 +1));
    var fifthInterval = Math.floor(Math.random() * (2000 - 100 +1));
    $("#test-horse").animate({left: "+=20%"}, firstInterval);
    $("#test-horse").animate({left: "+=20%"}, secondInterval);
    $("#test-horse").animate({left: "+=20%"}, thirdInterval);
    $("#test-horse").animate({left: "+=20%"}, fourthInterval);
    $("#test-horse").animate({left: "+=20%"}, fifthInterval);
});

