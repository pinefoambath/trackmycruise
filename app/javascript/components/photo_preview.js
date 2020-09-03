const previewImageOnFileSelect = () => {
    const trips = document.querySelectorAll('.modal');
    if (trips) {
        trips.forEach(trip => {
            // const input = trip.querySelector('.photo-input');
            const input = trip.querySelector('#trip_photo');
            if (input) {
                // we add a listener to know when a new picture is uploaded
                input.addEventListener('change', () => {
                  // we call the displayPreview function (who retrieve the image url and display it)
                  displayPreview(input, trip);
                })
              }
        } )
    }
    // we select the photo input
  }

  const displayPreview = (input, trip) => {
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        trip.querySelector('.photo-preview').src = event.currentTarget.result;
      }
      reader.readAsDataURL(input.files[0])
      trip.querySelector('.photo-preview').classList.remove('hidden');
    }
  }
  
  export { previewImageOnFileSelect };
