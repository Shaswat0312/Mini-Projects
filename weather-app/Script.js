const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const API_KEY = "c5a3bf33bf78a3b7d75a45529598b42c";


const cit = document.querySelector(".City");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".Wind");
const btn = document.querySelector(".btn");
const val =  document.querySelector(".box")

async function checkfunction(cityName){
   const response = await fetch(`${apiUrl}&appid=${API_KEY}&q=${cityName}`);
    let data = await response.json()

    cit.innerHTML = data.name +","+data.sys.country;
    temp.innerHTML = data.main.temp + "°C";
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + "Km/hr";
    val.value=""
    val.placeholder="City.."

    console.log(data.sys.country)

}


btn.addEventListener('click',() =>{checkfunction(val.value)})