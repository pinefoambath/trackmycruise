import $ from 'jquery';
dotenv.loadEnv();


const displayinfo = (data) => {
  const wave_height = document.getElementById('trip_wave_height');
  const wave_length = document.getElementById('trip_wave_length');
  const wind_speed = document.getElementById('trip_wind_speed');
  const wind_gusts = document.getElementById('trip_wind_gusts');
  const air_temperature = document.getElementById('trip_air_temperature');
  const sea_temperature = document.getElementById('trip_sea_temperature');



  wave_height.value = data.hours[0].waveHeight.noaa;
  wave_length.value = data.hours[0].wavePeriod.noaa;
  wind_speed.value = data.hours[0].windSpeed.noaa;
  wind_gusts.value = data.hours[0].gust.noaa;
  air_temperature.value = data.hours[0].airTemperature.noaa;
  sea_temperature.value = data.hours[0].waterTemperature.noaa;

};

const getweatherdata = () => {
  const latitude = 48.000000;
  const longitude = -11.000000;
  const day = document.getElementById('trip_date_3i');
  const month = document.getElementById('trip_date_2i');
  const year = document.getElementById('trip_date_1i');
  const hour = document.getElementById('trip_time_4i');
  const unixtime = new Date(`${year.value}-${month.value}-${day.value} ${hour.value}:00:00`).getTime()/1000;
  // debugger
  // var unixtime = Date.parse(`${day.value}-${month.value}-${year.value} ${hour.value}:00:00`).getTime()/1000;
  fetch(`https://api.stormglass.io/v2/weather/point?lat=${latitude}&lng=${longitude}&params=waveHeight,wavePeriod,windSpeed,gust,airTemperature,waterTemperature&start=${unixtime}&end=${unixtime}&key=${process.env.STORMGLASS_API_KEY}`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      displayinfo(data);
      });
};

console.log(process.env);


export {displayinfo, getweatherdata};
