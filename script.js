const copyButton = document.querySelector(".copy-button");
const copyText = document.querySelector(".copy-text");
const textarea = document.querySelector(".testTextArea");

copyButton.addEventListener("click", () => {
    copyText.select();
    copyText.setSelectionRange(0, 99999);
 
    // Copy text into clipboard and textarea.
    navigator.clipboard.writeText(copyText.value);
    textarea.value = copyText.value;

    copyButton.classList.toggle("success");
    copyButton.innerHTML = "Copied!";

    setTimeout(function () {
        copyButton.classList.toggle("success");
        copyButton.innerHTML = "Copy";
    }, 2000);
});