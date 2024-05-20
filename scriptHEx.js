let butao = document.querySelector("button")
let span = document.querySelector("#item")
let hexColor = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]


butao.addEventListener("click",()=>{
    let color = "#"
    for(let i = 0; i < 6;i++){
        color += hexColor[generateColor()]
    }
    
    span.innerHTML = color
    document.body.style.backgroundColor = color
})

function generateColor(){
    let totalTypes =  hexColor.length

    return Math.floor(Math.random()*totalTypes)

}