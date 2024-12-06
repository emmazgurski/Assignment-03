//The sounds. 
var landing = document.getElementById("landing")
var click = document.getElementById("click")
var munch = document.getElementById("munch")
var fill = document.getElementById("fill")
var slurp = document.getElementById("slurp")
var pour = document.getElementById("pour")
var scribble = document.getElementById("scribble")
var light = document.getElementById("light")
var blow = document.getElementById("blow")
var eraser = document.getElementById("eraser")
var shuffle = document.getElementById("shuffle")
var music = document.getElementById("music")


//The timer.
const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {

    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function stop() {
    if (isRunning) {

        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}

function reset() {
    clearInterval(timer);

    startTime = 0;
    elapsedTime = 0;
    isRunning = false;

    display.textContent = "00:00:00:00";
}

function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / 1000 % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milliseconds = String(milliseconds).padStart(2, "0");

    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}

$("#Candle").on("click", function () {
    console.log("Clicked on candle.")
    $("#Candle").hide()
    $("#LitCandle").show()
    light.play()
})

$("#LitCandle").on("click", function () {
    console.log("Clicked on lit candle.")
    $("#Candle").fadeIn()
    $("#LitCandle").fadeOut()
    blow.play()
})

$("#Mug").on("click", function () {
    console.log("Clicked on mug.")
    $("#EmptyMug").show()
    $("#Mug").hide()
    slurp.play()
})

$("#EmptyMug").on("click", function () {
    console.log("Clicked on empty mug.")
    $("#EmptyMug").hide()
    $("#Mug").show()
    pour.play()
})

$("#Snacks").on("click", function () {
    console.log("Clicked on snacks.")
    $("#EmptySnacks").show()
    $("#Snacks").hide()
    munch.play()
})

$("#EmptySnacks").on("click", function () {
    console.log("Clicked on empty snacks.")
    $("#EmptySnacks").hide()
    $("#Snacks").show()
    fill.play()
})

$("#BlankNotes").on("click", function () {
    console.log("Clicked on blank notes.")
    $("#ScribbledNotes").show()
    $("#BlankNotes").hide()
    scribble.play()
})

$("#ScribbledNotes").on("click", function () {
    console.log("Clicked on scribbled notes.")
    $("#ScribbledNotes").hide()
    $("#BlankNotes").show()
    eraser.play()
})

$("#OffComputer").on("click", function () {
    console.log("Clicked on off computer.")
    $("#OnComputer").show()
    $("#OffComputer").hide()
    click.play()
})

$("#OnComputer").on("click", function () {
    console.log("Clicked on on computer.")
    $("#OnComputer").hide()
    $("#OffComputer").show()
    click.play()
})

$("#Dino").on("click", function () {
    console.log("Clicked on dino.")
    $("#FallenDino").fadeIn()
    $("#Dino").fadeOut()
    landing.play()
})

$("#FallenDino").on("click", function () {
    console.log("Clicked on fallen dino.")
    $("#FallenDino").fadeOut()
    $("#Dino").fadeIn()
    shuffle.play()
})

$("#PlayButton").on("click", function () {
    console.log("Clicked on play button.")
    $("#PauseButton").show()
    $("#PlayButton").hide()
    music.play()
})

$("#PauseButton").on("click", function () {
    console.log("Clicked on pause button.")
    $("#PauseButton").hide()
    $("#PlayButton").show()
    music.pause()
})

