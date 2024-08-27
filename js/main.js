const text = document.querySelector(".card-advice-text")
const btn = document.querySelector(".main-card-button")
const span = document.querySelector(".card-counter span")
let counter = localStorage.getItem("counter") || 0;
const url = "https://api.adviceslip.com/advice"
const request = new XMLHttpRequest();
span.innerHTML = counter
if(window.location.reload){
    counter++
    localStorage.setItem("counter", counter);
}
request.open("GET", url, true)
request.responseType = "json";
request.send();
request.addEventListener("load", ()=>{
    let advice = request.response.slip.advice
    if(request.status === 200){
       text.textContent = `“${advice}”`
       span.textContent = counter 
    }
})
btn.addEventListener("click", ()=>{
    counter++
    localStorage.setItem("counter", counter);
    window.location.reload()
})