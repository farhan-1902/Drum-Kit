var drumButtonsLength = document.querySelectorAll(".button").length;

for(var i = 0;i < drumButtonsLength;i++) {
    document.querySelectorAll(".button")[i].addEventListener("click", handleClick);
}

function handleClick() {
   var buttonInnerHTML = this.innerHTML;
   Animation(buttonInnerHTML);

   switch(buttonInnerHTML) {
       case "w":
            var sound = new Audio('sounds/tom-1.mp3');
            sound.play();
            break;

       case "a":
            var sound = new Audio('sounds/tom-2.mp3');
            sound.play();
            break;
       
       case "s":
            var sound = new Audio('sounds/tom-3.mp3');
            sound.play();
            break;

       case "d":
            var sound = new Audio('sounds/tom-4.mp3');
            sound.play();
            break; 

       case "j":
            var sound = new Audio('sounds/snare.mp3');
            sound.play();
            break;
        
       case "k":
            var sound = new Audio('sounds/crash.mp3');
            sound.play();
            break;
     
       case "l":
            var sound = new Audio('sounds/kick-bass.mp3');
            sound.play();
            break;    

       default:
            console.log(buttonInnerHTML);
   }
    
}

document.addEventListener("keydown", function (event){
    buttonPressed = event.key;
    Animation(event.key.toLowerCase() || event.key.toUpperCase());

    switch(buttonPressed.toLowerCase() || buttonPressed.toUpperCase()) {
        case "w":
             var sound = new Audio('sounds/tom-1.mp3');
             sound.play();
             break;
 
        case "a":
             var sound = new Audio('sounds/tom-2.mp3');
             sound.play();
             break;
        
        case "s":
             var sound = new Audio('sounds/tom-3.mp3');
             sound.play();
             break;
 
        case "d":
             var sound = new Audio('sounds/tom-4.mp3');
             sound.play();
             break; 
 
        case "j":
             var sound = new Audio('sounds/snare.mp3');
             sound.play();
             break;
         
        case "k":
             var sound = new Audio('sounds/crash.mp3');
             sound.play();
             break;
      
        case "l":
             var sound = new Audio('sounds/kick-bass.mp3');
             sound.play();
             break;    
 
        default:
             console.log(buttonPressed);
    }

});

function Animation(key) {
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add('pressed');

    setTimeout(function (){
        activeButton.classList.remove('pressed');
    }, 150);
}