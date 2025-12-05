// Typing Effect
let text = "Web Developer";
let index = 0;

function typing(){
    document.querySelector(".typing").innerText = text.slice(0, index);
    index++;

    if(index <= text.length){
        setTimeout(typing, 120);
    }
}

typing();
