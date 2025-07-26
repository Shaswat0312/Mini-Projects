const start = document.querySelector(".start")
const content = document.querySelector(".content")
const input = document.querySelector('.input')
const know = document.querySelector('.dontknow')
function reload(){

async function call(){
const response = await fetch('https://official-joke-api.appspot.com/random_joke')
const data = await response.json()


console.log(data)
const joke = document.querySelector('.joke')
joke.innerHTML = data.setup
const btn = document.querySelector(".btn")

start.innerHTML = "Next Joke 🤭"
btn.addEventListener('click',() =>{
    if(input.value ===String(data.punchline))
    {
        content.innerHTML = `${data.punchline}😂` 
    }
    else{
         content.innerHTML = `${data.punchline}😂`
    }


})
}
call()
}




start.addEventListener('click',() =>{
    reload()
    input.placeholder ="Guess Guess.."
    content.innerHTML = ""
    input.value = ""
    
})







