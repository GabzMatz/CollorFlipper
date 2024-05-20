let butao = document.querySelector("button")
let span = document.querySelector("#item")

butao.addEventListener("click",()=>{
    let cor = [Math.floor(Math.random()*256),Math.floor(Math.random()*256),Math.floor(Math.random()*256)]
    span.innerHTML = `rgb(${String(cor[0])},${String(cor[1])},${String(cor[2])})`
    document.body.style.backgroundColor = `rgb(${String(cor[0])},${String(cor[1])},${String(cor[2])})`

})