import $ from 'jquery';
import flatpickr from "flatpickr";

const fp = flatpickr("#trip_date", {
}); // flatpickr

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
  wind_speed.value = Math.round(data.hours[0].windSpeed.noaa*3.6);
  wind_gusts.value = Math.round(data.hours[0].gust.noaa*3.6);
  air_temperature.value = data.hours[0].airTemperature.noaa;
  sea_temperature.value = data.hours[0].waterTemperature.noaa;
  lat.value = localStorage.latitude;
  long.value = localStorage.longitude;
};

// Useful event listener for testing and making adjustments (comment in if needed):
// const map = document.getElementById('map')
// map.addEventListener('click', (event) => {
//   console.log(fp.currentYear);
//   console.log(fp.selectedDates[0].getDate());
//   console.log(fp)
// })

const getweatherdata = () => {
  console.log('hello');
  const stormglassid = document.getElementById('getweather');
  if (stormglassid) {
    stormglassid.addEventListener('click', (event) => {
      console.log(stormglassid.dataset.stormglassApiKey);
      console.log(event.currentTarget);
      const latitude = localStorage.latitude;
      const longitude = localStorage.longitude;
      const dateObject = fp.selectedDates[0]
      const day = dateObject.getDate();
      const month = fp.currentMonth;
      const year = fp.currentYear;
      console.log(fp)
      const hour = document.getElementById('trip_time_4i');
      const unixtime = new Date(`${year}-${month}-${day} ${hour.value}:00:00`).getTime()/1000;
      const log_button =document.getElementById('log_button');
      const row_test = document.getElementById('row_test');
      const row_test_two = document.getElementById('row_test_two');
      const row_test_three = document.getElementById('row_test_three');
      // debugger
      // var unixtime = Date.parse(`${day.value}-${month.value}-${year.value} ${hour.value}:00:00`).getTime()/1000;
      fetch(`https://api.stormglass.io/v2/weather/point?lat=${latitude}&lng=${longitude}&params=waveHeight,wavePeriod,windSpeed,gust,airTemperature,waterTemperature&start=${unixtime}&end=${unixtime}&key=${stormglassid.dataset.stormglassApiKey}`)
      .then(response => response.json())
      .then((data) => {
        // console.log(data);
        displayinfo(data);
        log_button.classList.remove('d-none');
        log_button.classList.add('animated');
        log_button.classList.add('rubberBand');
        row_test.classList.add('animated');
        row_test.classList.add('rubberBand');
        row_test_two.classList.add('animated');
        row_test_two.classList.add('rubberBand');
        row_test_three.classList.add('animated');
        row_test_three.classList.add('rubberBand');
        document.querySelector('.text-muted').classList.remove('d-none');
        document.getElementById('trip_description').classList.remove('d-none');
        // document.getElementById()
        });
      })
  }

};

export {displayinfo, getweatherdata};
