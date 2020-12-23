document.getElementById("coin").onclick = function () {
    if (document.getElementsByClassName("rule-box")[0].style.display == "none") {
        document.getElementsByClassName("rule-box")[0].style.display = "flex"
        document.getElementsByClassName("container")[0].style.display = "none"

    } else {
        document.getElementById("playBtn").style.display = "block"
        document.getElementById("coin").style.display = "none"
        document.getElementsByClassName("rule-box")[0].style.display = "none"
        //document.getElementById("title").style.display = "none"
        document.getElementsByClassName("container")[0].style.display = "flex"
        // document.getElementById("btnContainer").style.display = "flex"

    }
}
/* Creates Tambola Board*/

//creates <div class="box">[data]</div>
function createChildElement(data, checkDig) {
    var tag = document.createElement("div");
    var text = document.createTextNode(data);

    tag.appendChild(text);
    var element = document.getElementById("board-container");
    tag.classList.add("box");
    tag.id = "box" + data;
    //tag.IdList.add("box" + data);
    if (checkDig == 1)
        tag.classList.add("box-single-digit");
    element.appendChild(tag);
    console.log(tag)
}

for (let i = 1; i < 10; i++) {
    createChildElement(i, 1);
}
for (let j = 10; j < 100; j++) {
    createChildElement(j, 2);
}

/*Tambola Board Created*/

const playbtn = document.getElementById('playBtn')
const pausebtn = document.getElementById('pauseBtn')
const stopbtn = document.getElementById('stopBtn')

let array = []
var number
var index

// creates array
for (var i = 1; i < 100; i++) {
    array.push(i);
}


function indexGenerator() {
    index = Math.floor(Math.random() * 100)
}


function numberGenerator() {
    indexGenerator()
    number = array[index]
    array.splice(index, 1)

    return number
}

function playText(text) {

    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate = 1
    speechSynthesis.speak(utterance);

}


playbtn.addEventListener('click', function () {
    // for (let i = 1; i < 100; i++) {
    //     let tambolaNumber = numberGenerator();
    //     playText(tambolaNumber)
    //     document.getElementById("box" + tambolaNumber).style.backgroundColor = "white";
    // }
    let tambolaNumber = numberGenerator();
    playText(tambolaNumber)
    document.getElementById("box" + tambolaNumber).style.backgroundColor = "#FEDCD3";

})


setTimeout(function () {
    document.getElementById('coin').style.display = ('none');
    document.getElementById('coin-back').style.display = ('block');
}, 500);
setTimeout(function () {
    document.getElementById('coin').style.display = ('block');
    document.getElementById('coin').style.animationName = ('rotation3')
    document.getElementById('coin-back').style.display = ('none');
}, 1500);

/*
pausebtn.addEventListener('click', function () {
    if (speechSynthesis.speaking)
        speechSynthesis.pause()

})
*/
/*
setTimeout(function () {
    document.getElementById('title-gif').style.display = ('none');
    document.getElementById('title-png').style.display = ('block');
}, 6000);
*/