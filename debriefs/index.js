window.onload = function() {
    let buttons = document.querySelectorAll("button")
    for (let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", function() {
            buttonClick(i +1)
        })
            

        
    }


}



let h1 = document.querySelector("h1")
function logText(eventFromDocument){
    if (eventFromDocument.key === "Enter"){
    h1.innerText = eventFromDocument.target.value

    }
    
}

function getcolor(eventdata) {
    h1.style.color = eventdata.target.value
}


function buttonClick (counter) {
    console.log(counter)
}

    
