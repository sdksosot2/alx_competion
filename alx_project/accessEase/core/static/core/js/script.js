function speak() {
    let text = document.getElementById("text").value;
    let speech = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(speech);
}

function startSTT() {
    let recognition = new webkitSpeechRecognition();
    recognition.lang = "en-US";

    recognition.onresult = function(event) {
        document.getElementById("output").innerText = event.results[0][0].transcript;
    };

    recognition.start();
}

function toggleContrast() {
    document.body.classList.toggle("contrast");
}

function bigger() {
    document.body.style.fontSize = "larger";
}

function smaller() {
    document.body.style.fontSize = "smaller";
}
