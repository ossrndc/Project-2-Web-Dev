const copyButton = document.querySelector(".copy-button");
const copyText = document.querySelector(".copy-text");
const textarea = document.querySelector(".testTextArea");

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
