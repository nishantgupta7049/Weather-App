let apiKey="15380ebebbbe38a332a3ce013441db70";

let searchBtn=document.querySelector("#search-btn");
let result=document.querySelector("#result");

searchBtn.addEventListener("click", async ()=>{
    let cityName=document.querySelector("#city-name").value.trim();

    if (cityName===""){
        result.classList.remove("hidden");
        result.innerHTML="<h3 class=>Please enter a city name</h3>";
        return;
    
}
try{
}catch(error){
    console.error(error);
    result.innerHTML=`<h3> Error in Fetching Weather Data...</h3>`;
}});
