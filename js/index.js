let speech = new SpeechSynthesisUtterance();
speech.lang = "en";
let voices = [];

var trigger = [["hi", "hey", "hello"], ["Ok"]];
var reply = [
  {"question": "Let's start with the questionnaire", "time_duration": 5000, "image": null},
  {"question": "What day is today ?" , "time_duration": 5000, "image": null },
  {"question":  "What is the current month ?", "time_duration": 5000, "image": null },
  {"question":  "What is the current year?", "time_duration": 5000, "image": null },
  {"question":  "What is the current season?" , "time_duration": 5000, "image": null },
  {"question":  "What town you are residing in?", "time_duration": 5000, "image": null },
  {"question":  "What country you are in?", "time_duration": 5000, "image": null },
  {"question":  "In which state you are currently living?", "time_duration": 5000, "image": null },
  {"question":  "what is the name of this current place?", "time_duration": 5000, "image": null },
  {"question":  "I am going to name 3 objects. After I have said them I want you to repeat\
  them back to me. Remember what they are because I will ask you to name\
  them again in a few minutes: Apple, Table, Penny", "time_duration": 5000, "image": null },
  {"question":  "Now I am going to spell a word forward and I want you to spell it backward. The word is world. W O R L D. Please Spell it in Reverse Order.", "time_duration": 5000, "image": null },
  {"question":  " What are the three objects I asked you to remember? ", "time_duration": 5000, "image": null },
  {"question":  "Now, let's start with part 2", "time_duration": 1000, "image": null },
  {"question":  "What is the given image of?", "time_duration": 5000, "image":  "/public/watch.jpg"},
  {"question":  "What is the given image of?", "time_duration": 5000, "image": "/public/pencil.jpg" },
  {"question":  "Please repeat the following: “No Ifs, Ands, or Buts.”", "time_duration": 5000, "image": null },
  {"question":  "Please read the following & Do what it says.", "time_duration": 5000, "image": null },
  {"question":  "Type the sentence in the given image", "time_duration": 5000, "image": null },
  {"question":  "Thank you or your precious time, Please press the end button, to get the results.", "time_duration": 5000, "image": "/public/Paragraph.png" },
  
];
var question_no = 0;
var answers = []
document
  .querySelector("#input")
  .addEventListener("keypress", function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) {
      App.sendMessage();
      output();
    }
  });
function output() {
    var product = App.sendMessage(reply[question_no++]);
    speak(product);
  }


  //*********************voice options**************************** */ 
function speak(string) {
  speech.text = string
  window.speechSynthesis.speak(speech);
}


window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];
  let voiceSelect = document.querySelector("#voices");
  voices.forEach(
    (voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
  );
};

document.querySelector("#volume").addEventListener("input", () => {
  const volume = document.querySelector("#volume").value;
  speech.volume = volume;
  document.querySelector("#volume-label").innerHTML = volume;
});


document.querySelector("#voices").addEventListener("change", () => {
  speech.voice = voices[document.querySelector("#voices").value];
});
