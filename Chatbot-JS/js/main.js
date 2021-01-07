let mic = document.getElementById("mic");
let processing = document.getElementById("processing");
let chatareamain =document.querySelector('.chatarea-main');
let chatareaouter =document.querySelector('.chatarea-outer');


let intro = ['hi','hey','hello','Hi. Im a javascript chatbox.'];
let who= [ 'hey. im a chatbot', 'hey, im just a simple chatbot'];
let help = ['how can i help you', 'what can i do for you'];
let thank = ['thanks','its a pleasure talk with you'];




const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

 
function showusermsg(usermsg) {
    let output = '';
    output += `<div class="chatarea-inner user">${usermsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}
function showchatbotmsg(chatbotmsg) {
    let output = '';
    output += `<div class="chatarea-inner chatbot">${chatbotmsg}</div>`;
    chatareaouter.innerHTML += output;
    return chatareaouter;
}


function chatbotvoice(message) {
    const speech= new SpeechSynthesisUtterance();
    speech.text = "I dont want to talk with you, bye ,its my rest time.";
    if (message.includes('hello')) {
        // speech.text="I'm a Javascript chatbot";
        let finalresult = intro[Math.floor(Math.random()*intro.length)];
        speech.text= finalresult;
    }
    if (message.includes('who are you')) {
        // speech.text="I'm a Javascript chatbot";
        let finalresult = who[Math.floor(Math.random()*who.length)];
        speech.text= finalresult;
    }
    if (message.includes(' help')) {
        // speech.text="I'm a Javascript chatbot";
        let finalresult = help[Math.floor(Math.random()*help.length)];
        speech.text= finalresult;
    }
    if (message.includes('thanks')) {
        // speech.text="I'm a Javascript chatbot";
        let finalresult = thank[Math.floor(Math.random()*thank.length)];
        speech.text= finalresult;
    }

    window.speechSynthesis.speak(speech);
    chatareamain.appendChild(showchatbotmsg(speech.text));
}

//webspeech api functions

recognition.onstart = function(e) {
    console.log("Chatbot is listening. Try speaking into the microphone.");
    processing.innerText="Chatbot is listening........";
};

recognition.onspeechend = function() {
    // when user is done speaking
    recognition.stop();
    console.log("Chatbot stopped Listening ");
    processing.innerText=" ";
    mic.style.background='#ff3b3b';
};

recognition.onresult = function(event) {
    var transcript = event.results[0][0].transcript;
    // var confidence = event.results[0][0].confidence;
    console.log(transcript);
    // console.log(confidence);
    chatareamain.appendChild(showusermsg(transcript));
    chatbotvoice(transcript);
};

//listening to audio when mic icon clicked 
mic.addEventListener('click',function(e) {
    mic.style.background='#3bff41';
    recognition.start();    // start recognition
    console.log("mic pressed");
});