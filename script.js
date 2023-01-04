var info = [];
var boxExist = 0;
var newCityName = "";
fetch("https://api.openweathermap.org/data/2.5/weather?q=stockholm&units=metric&appid=ec67bac8f241d2912184c94ed73cccb0")
.then(result => result.json())
.then(json => info.push(json.main.temp, json.main.feels_like, json.name, json.main.temp_max, json.main.temp_min, json.wind.speed, json.weather[0].icon, json.weather[0].description, json.wind.deg)) 
 
function createBox() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + newCityName +"&units=metric&appid=ec67bac8f241d2912184c94ed73cccb0")
    .then(result => result.json())
    .then(json => info.push(json.main.temp, json.main.feels_like, json.name, json.main.temp_max, json.main.temp_min, json.wind.speed, json.weather[0].icon, json.weather[0].description, json.wind.deg)) 
                if (boxExist = 1) {
                    var divcard = document.getElementsByTagName("div");
                    for (var i = 0; i < divcard.length; i++) {
                        divcard[i].parentNode.removeChild(divcard[i]);
                    }
                }



                var divcard = document.createElement("div");
                divcard.setAttribute("class", "card");
                divcard.setAttribute("style", "width: 48rem");

                var cardbody = document.createElement("div");
                cardbody.setAttribute("class", "card-body");
                divcard.appendChild(cardbody);

                var divwind = document.createElement("div");
                divwind.setAttribute("class", "row")
                divwind.setAttribute("style", "margin-top: -25px")
                divcard.appendChild(divwind);

                var windspeed = document.createElement("p")
                windspeed.setAttribute("class", "card-text p-3 mb-2 col");
                windspeed.innerText = "Wind speed:" + info[5];
                divwind.appendChild(windspeed);

                var cardtitle = document.createElement("h5");
                cardtitle.setAttribute("class", "card-title text-center fs-2 p-3 mb-2 col");
                cardtitle.setAttribute("style", "margin-top: -2rem");
                cardtitle.innerText = info[2];
                divwind.appendChild(cardtitle);

                var windangle = document.createElement("p")
                windangle.setAttribute("class", "card-text p-3 mb-2 col text-end");
                windangle.innerText = "Wind speed:" + info[8];
                divwind.appendChild(windangle);

                var cardtextWeather = document.createElement("p");
                cardtextWeather.setAttribute("class", "card-text text-center fs-2");
                cardtextWeather.innerText = info[0] + "°C";
                divcard.appendChild(cardtextWeather);

                var cardtextFeel = document.createElement("p");
                cardtextFeel.setAttribute("class", "card-text text-center fs-7");
                cardtextFeel.setAttribute("style", "margin-top: -0.8rem");
                cardtextFeel.innerText = "Feels like: " +  info[1] + "°C";
                divcard.appendChild(cardtextFeel);

                var divminmax = document.createElement("div");
                divminmax.setAttribute("class", "row")
                divminmax.setAttribute("style", "margin-top: 6rem")
                divcard.appendChild(divminmax);
              
                var cardtextMin = document.createElement("p");
                cardtextMin.setAttribute("class", "card-text p-3 mb-2 col");
                cardtextMin.innerText = "Min temp: " + info[4] + "°C";
                divminmax.appendChild(cardtextMin);

                var wicon = document.createElement("img");
                wicon.setAttribute("src", "http://openweathermap.org/img/wn/" + info[6] + "@4x.png");
                wicon.setAttribute("class", "card-img-top col");
                wicon.setAttribute("style", "margin-top: -10rem")
                wicon.setAttribute("alt", info[7]);
                divminmax.appendChild(wicon);
                console.log(info[9])
                
                var cardtextMax = document.createElement("p");
                cardtextMax.setAttribute("class", "card-text p-3 mb-2 col text-end");
                cardtextMax.innerText = "Max temp: " + info[3] + "°C";
                divminmax.appendChild(cardtextMax);

                var card = document.body.appendChild(divcard);
                divcard.style.padding = "3%";
                divcard.style.borderRadius = "4rem";
                divcard.style.backgroundColor = "lightblue";
                var boxExist = 1;
                return card
            }
function submitValue() 
    {
        var newCityName = document.getElementById("iName").value;
        return newCityName
    }