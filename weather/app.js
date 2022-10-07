
window.addEventListener('load', () => {
    let long;
    let lat;
    const temperature = document.querySelector('.degree__number');
    const timezone    = document.querySelector('.location__timezone')
    const description = document.querySelector('.temperature__description');
    const temperatureSection = document.querySelector('.temperature__degree')
    const temperatureSectionSpan = document.querySelector('.degree__symbol')
    console.log(temperatureSection)

    function tradutor(word){
      var translatedStr;
      fetch(`https://api.mymemory.translated.net/get?q=${word}&langpair=en-GB|pt-BR`)
      .then((response) => response.json())
      .then((data) => {
        return translatedStr = data.responseData.translatedText; 
      })
    }

    if(navigator.geolocation){
      
      navigator.geolocation.getCurrentPosition(position => {
        
        long = position.coords.longitude
        lat  = position.coords.latitude;
        const API_KEY = "ccaff6d29bc919681f1bb9c611c763e0"
        console.log(long);
        console.log(lat)
        const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`;
        
        fetch(api)
        .then(response =>{
          return response.json()
          
        })
        .then(data =>{
          console.log(data)
          const{temp} = data.main
          const CelsiusToFahren = Math.ceil(temp * 1.8 + 32);
          const tempRounded = Math.ceil(temp);
          const desc = data.weather
          const timezoneName = data.name
          const iconApi = desc[0].icon
          description.textContent = desc[0].description
          temperature.textContent = tempRounded;
          timezone.textContent = timezoneName;
          setIcons(iconApi, document.querySelector('.icon'))
          

          temperatureSection.addEventListener("click", () => {
            if(temperatureSectionSpan.textContent === 'C'){
                temperatureSectionSpan.textContent = 'F'
                temperature.textContent = CelsiusToFahren;
            }else{
              temperatureSectionSpan.textContent = 'C'
              temperature.textContent = tempRounded
            }
          })
          
        })

      })
    }

    function replaceIconName(icon){
      let nameReplaced;
      if(icon == '01d'){
        nameReplaced = 'CLEAR_DAY'
      } else if(icon == '01n'){
        nameReplaced = 'CLEAR_NIGHT'
      } else if(icon == '04n'){
        nameReplaced = 'PARTLY_CLOUDY_NIGH'        
      }else if(icon == '04d'){
        nameReplaced = 'PARTLY_CLOUDY_DAY'
      } else if(icon == '03n'){
        nameReplaced = 'CLOUDY'
      }else if(icon == '03d'){
        nameReplaced = 'CLOUDY'
      }else if(icon == '09n'){
        nameReplaced = 'SHOWERS_NIGHT'
      }else if(icon == '09d'){
        nameReplaced = 'SHOWERS_DAY'
      } else if(icon == '10d'){
        nameReplaced == 'RAIN'
      }else if(icon == '10n'){
        nameReplaced = 'RAIN'
      } else if(icon == '11d'){
        nameReplaced = 'THUNDER'
      } else if(icon == '11n'){
        nameReplaced = 'THUNDER'
      } else if(icon == '13d'){
        nameReplaced = 'SNOW'
      } else if(icon == '13n'){
        nameReplaced = 'SNOW'
      }
      return nameReplaced;
    }

    function setIcons(icon, iconId){
      const skycons = new Skycons({"color": "#c4f6ff"});
      let currentIcon = replaceIconName('10n');
      skycons.play();
      return skycons.set(iconId, Skycons[currentIcon])
    }
});