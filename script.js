var button = document.getElementById("quote-btn");
var textShow = document.getElementById("text");
var author = document.getElementById("author");
var category = document.getElementById("category");

generateRandom();
button.addEventListener('click', generateRandom);

function generateRandom() {
  fetch("https://api.quotable.io/random")
    .then(res => {
      if (!res.ok) throw new Error('Network error');
      return res.json();
    })
    .then(result => {
      console.log(result);
      textShow.innerText = result.content;
      author.innerText = result.author;
      category.innerText = result.tags[0];
    })
    .catch(err => {
      console.error("Fetch failed:", err);
      textShow.innerText = "Could not load a quote. Try again!";
      author.innerText = "";
      category.innerText = "";
    });
}

// Speech synthesis setup
var voices = [];
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
};

function speakText() {
  var textToSpeak = document.getElementById('text').textContent;
  var utterance = new SpeechSynthesisUtterance(textToSpeak);
  utterance.voice = voices.length > 0 ? voices[0] : null;
  window.speechSynthesis.speak(utterance);
}

// Event listeners
document.getElementById('speak-button').addEventListener('click', speakText);

document.getElementById('speak_icon').addEventListener('click', function() {
  this.style.opacity = "1";
});

/*
complete

  var button=document.getElementById("quote-btn");
var textShow=document.getElementById("text");
var author=document.getElementById("author")
var category = document.getElementById("category")
generateRandom()
button.addEventListener('click',generateRandom)

function generateRandom(){
   fetch("https://api.quotable.io/random")
  .then(res => {
    if (!res.ok) throw new Error('Network error');
    return res.json();
  })
  .then(result => {
    textShow.innerText = result.content;
    author.innerText = result.author;
    category.innerText = result.tags[0];
  })
  .catch(err => {
    console.error("Fetch failed:", err);
    textShow.innerText = "Could not load a quote. Try again!";
    author.innerText = "";
    category.innerText = "";
  });

}

 // Function to speak the text within the <p> tag
 function speakText() {

    var textToSpeak = document.getElementById('text').textContent;
    var utterance = new SpeechSynthesisUtterance(textToSpeak);

    // Use the default voice
    var voices = window.speechSynthesis.getVoices();
    utterance.voice = voices[0];

    // Speak the text
    window.speechSynthesis.speak(utterance);
   
}

// Add event listener to the button
document.getElementById('speak-button').addEventListener('click', function () {
    speakText()
});

document.getElementById('speak_icon').addEventListener('click', function() {
    this.style.opacity = "1";
});
*/
