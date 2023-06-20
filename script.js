let sound = new Audio("metal-clang-sound-81634.mp3");
let screen=document.getElementById('screen');
buttons =document.querySelectorAll('button');
let screenValue='';
for(item of buttons) {
    item.addEventListener('click', (e)=> {
        buttonText = e.target.innerText;
        sound.play();

        if(buttonText === 'X') {
            buttonText='*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if(buttonText === "C") {
            screenValue = "";
            screen.value = screenValue;
        }
        else if(buttonText === "=") {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}