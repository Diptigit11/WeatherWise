const apiKey="ae486ddb18f053003e72b6baecd587a0";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchbox=document.querySelector(".search input")
const searchbtn=document.querySelector(".search button")
const weathericon=document.querySelector(".weather-icon")

async function checkWeather(city){
    const response=await fetch (apiUrl + city + `&appid=${apiKey}`)
    let data=await response.json();

    if(response.status==404){
 document.querySelector(".error").style.display="block"   
    }else{
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.floor(data.main.temp )+ "°c";
    document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
    document.querySelector(".Wind").innerHTML=data.wind.speed + "km/hr";

    if(data.weather[0].main== "Clouds"){
        weathericon.src="clouds.png"
    } else if(data.weather[0].main== "Clear"){
        weathericon.src="clear.png"
    }else if(data.weather[0].main== "Rain","Thunderstorm"){
        weathericon.src="rain.png"
    }else if(data.weather[0].main== "Drizzle"){
        weathericon.src="drizzle.png"
    }else if(data.weather[0].main== "Mist"){
        weathericon.src="mist.png"
    }else if(data.weather[0].main== "Snow"){
        weathericon.src="snow.png"
    }
    
    document.querySelector(".weather").style.display="block"
    document.querySelector(".error").style.display="none"  
}}
searchbtn.addEventListener("click",function(){
    checkWeather(searchbox.value)
})
