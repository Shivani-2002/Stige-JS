var numberOfButtons = document.querySelectorAll(".button").length;
console.log(document.querySelectorAll(".button"));
console.log(numberOfButtons);

for(var i=0; i<numberOfButtons; i++)
{
document.querySelectorAll(".button")[i].addEventListener("click", function() {
    var buttonInner  =  this.innerHTML;
    console.log(buttonInner);
    sound(buttonInner);
    animation(buttonInner);
});
}

document.addEventListener('keypress', (event)=>{
    sound(event.key);
    animation(event.key);
    console.log(event.key);
});

function sound(key)
{
    switch(key)
    {
        case "w":
            var sound1 = new Audio("./sounds_crash.mp3");
            sound1.play();
            break;

        case "a":
            var sound2 = new Audio("sounds_kick-bass.mp3");
            sound2.play();
            break;

         case "s":
            var sound3 = new Audio("./sounds_snare.mp3");
            sound3.play();
            break;

        case "d":
            var sound4 = new Audio("./sounds_tom-1.mp3");
            sound4.play();
            break;

        case "j":
            var sound5 = new Audio("./sounds_tom-2.mp3");
            sound5.play();
            break;

        case "k":
            var sound6 = new Audio("./sounds_tom-3.mp3");
            sound6.play();
            break;

        case "l":
            var sound7 = new Audio("./sounds_tom-4.mp3");
            sound7.play();
            break;

        default:
            console.log(key);

    }
}

function animation(key)
{
        var activeButton = document.querySelector("." + key);
        
        activeButton.classList.add("animation");
        
        setTimeout(function() {
            activeButton.classList.remove("animation");
        }, 100);
}