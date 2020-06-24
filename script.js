
const playbtn = document.getElementById('playBtn')
const pausebtn = document.getElementById('pauseBtn')
const stopbtn = document.getElementById('stopBtn')
//const textinput = "hey raksha"
// const speedinput = document.getElementById('speed')

let array = []
var number
var index
//var textinput
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

playbtn.addEventListener('click', function () {
    //alert(numberGenerator())
    for (var i = 1; i < 100; i++) {
        var numberinput = numberGenerator()
        playText(numberinput)
    }
})


function playText(text) {
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.rate = 1
    speechSynthesis.speak(utterance);

}