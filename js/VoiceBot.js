var SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

var recognition = new SpeechRecognition();
recognition.continuous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;


var StartBtn = document.getElementById("start-button")
var EndBtn = document.getElementById("end-button")
var messages = document.getElementById("input")
StartBtn.addEventListener('click', ()=>{
    recognition.start();
})

EndBtn.addEventListener('click', ()=>{
    recognition.stop();
    console.log(answers)
})

recognition.onresult = async(e) => {
    messages.value = `${await e.results[0][0].transcript}`;
    var input = App.sendMessage()
    answers.push(input);
    output();
    
}

recognition.onspeechend = () => {
    recognition.stop();
}
