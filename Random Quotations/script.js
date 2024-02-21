  var button=document.getElementById("quote-btn");
var textShow=document.getElementById("text");
var author=document.getElementById("author")
var category = document.getElementById("category")
generateRandom()
button.addEventListener('click',generateRandom)

function generateRandom(){
    fetch("https://api.quotable.io/random")
    .then(res =>{
        if(!res.ok){
            throw new error('network error');
        }
        return res.json();
    })
    .then(result =>{
        console.log(result);
        console.log(result.content);
        console.log(result.author);
        console.log(result.tags[0]);
        textShow.innerText=result.content;
        author.innerText=result.author;
        category.innerText=result.tags[0];
    })
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


