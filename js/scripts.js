//UI Logic
window.onload = function() {
  let form = document.querySelector("form")
  form.onsubmit = function(event) {
    
    const shoutWords = document.getElementById("shoutingInput").value;

    document.querySelector("span#shout").innerText = shoutWords;

    document.querySelector("div#convert").removeAttribute("class");

    event.preventDefault();
  }
}












//Business Logic
