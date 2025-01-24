

//function for converting the given text into the voice
function textToSpeech() {
    const textInput = document.getElementById('text-input').value;
    const selectedLanguage = document.getElementById('text-language').value;

    const utterance = new SpeechSynthesisUtterance(textInput);   //it will create a  speech object
    utterance.lang = selectedLanguage;
    window.speechSynthesis.speak(utterance);

    return false;
}



//function to convert the voice into text
function speechToText() {


    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();  //it will create a recognition object
    const selectedLanguage = document.getElementById('speech-language').value;

    recognition.lang = selectedLanguage;

    //events
    recognition.onresult = function (event) {
        const result = event.results[0][0].transcript;
        document.getElementById('result').innerText = result;
    };

    recognition.onerror = function (event) {
        console.error('Speech recognition error:', event.error);
    };

    recognition.onend = function () {
        console.log('Speech recognition ended.');
    };

    recognition.start();

    return false;
}


//clearing the data fields
function clrText() {
    document.getElementById('text-input').value = '';
    return false;
}

function clrResult() {
    document.getElementById('result').innerText = '';
    return false;
}

