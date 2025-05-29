var drumButtons = document.querySelectorAll(".drum");
// handle click
for(var i=0; i<drumButtons.length; i++) {
    drumButtons[i].addEventListener("click", function() {
        
        var key = this.innerHTML;
        playSound(key);
        animateButton(key);
    });
}
// handle key press
document.addEventListener("keydown", function(event){
    playSound(event.key);
    animateButton(event.key);
})

function playSound(key) {
    switch (key) {
        case 'w':
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

        case 'a':
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case 's':
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case 'd':
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        case 'j':
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case 'k':
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

        case 'l':
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
    }
}

function animateButton(key) {
    var activeButton = document.getElementsByClassName(key)[0];

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}