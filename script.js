const copyButton = document.querySelector(".copy-button");
const copyText = document.querySelector(".copy-text");
const textarea = document.querySelector(".testTextArea");
const voiceButton = document.querySelector(".voice-button");

copyButton.addEventListener("click", () => {
    const inputValue = copyText.value;
    textarea.value = inputValue;
    textarea.select();
    document.execCommand("copy");

    copyButton.classList.toggle("success");
    copyButton.innerHTML = "Copied!";

    setTimeout(function () {
        copyButton.classList.toggle("success");
        copyButton.innerHTML = "Copy";
    }, 2000);
});

voiceButton.addEventListener("click", () => {
    const textToSpeak = textarea.value.trim();
    
    if ('speechSynthesis' in window) {
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        
        synth.speak(utterance);
    } else {
        alert('Speech synthesis is not supported in this browser.');
    }
});

