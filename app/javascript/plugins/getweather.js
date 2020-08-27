import $ from 'jquery';



const displayinfo = (data) => {
  const wave_height = document.getElementById('trip_wave_height');
  const wave_length = document.getElementById('trip_wave_length');
  const wind_speed = document.getElementById('trip_wind_speed');
  const wind_gusts = document.getElementById('trip_wind_gusts');
  const air_temperature = document.getElementById('trip_air_temperature');
  const sea_temperature = document.getElementById('trip_sea_temperature');
  const long = document.getElementById('trip_longitude');
  const lat = document.getElementById('trip_latitude');



  wave_height.value = data.hours[0].waveHeight.noaa;
  wave_length.value = data.hours[0].wavePeriod.noaa;
  wind_speed.value = data.hours[0].windSpeed.noaa;
  wind_gusts.value = data.hours[0].gust.noaa;
  air_temperature.value = data.hours[0].airTemperature.noaa;
  sea_temperature.value = data.hours[0].waterTemperature.noaa;
  lat.value = localStorage.latitude;
  long.value = localStorage.longitude;
};

const getweatherdata = () => {
  console.log('hello');
  const stormglassid = document.getElementById('getweather');
  if (stormglassid) {
    stormglassid.addEventListener('click', (event) => {
      console.log(stormglassid.dataset.stormglassApiKey);
      console.log(event.currentTarget);
      const latitude = localStorage.latitude
      const longitude = localStorage.longitude
      const day = document.getElementById('trip_date_3i');
      const month = document.getElementById('trip_date_2i');
      const year = document.getElementById('trip_date_1i');
      const hour = document.getElementById('trip_time_4i');
      const unixtime = new Date(`${year.value}-${month.value}-${day.value} ${hour.value}:00:00`).getTime()/1000;
      // debugger
      // var unixtime = Date.parse(`${day.value}-${month.value}-${year.value} ${hour.value}:00:00`).getTime()/1000;
      fetch(`https://api.stormglass.io/v2/weather/point?lat=${latitude}&lng=${longitude}&params=waveHeight,wavePeriod,windSpeed,gust,airTemperature,waterTemperature&start=${unixtime}&end=${unixtime}&key=${stormglassid.dataset.stormglassApiKey}`)
      .then(response => response.json())
      .then((data) => {
        // console.log(data);
        displayinfo(data);
        });
      })
  }

};

export {displayinfo, getweatherdata};
