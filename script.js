const copyButton = document.querySelector(".copy-button");
const copyText = document.querySelector(".copy-text");
const textarea = document.querySelector(".testTextArea");
const voiceButton = document.querySelector(".voice-button")

copyButton.addEventListener("click", () => {
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    copyButton.classList.toggle("success");
    copyButton.innerHTML = "Copied!";

    setTimeout(function () {
        copyButton.classList.toggle("success");
        copyButton.innerHTML = "Copy";
    }, 2000);
});

voiceButton.addEventListener("click",()=>{
     const voice =  new SpeechSynthesisUtterance (textarea.value)
     speechSynthesis.speak(voice);
})