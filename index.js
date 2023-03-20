function main() {

    // HTML Elements
    const astroImageEl = document.querySelector("#astro-image");
    const latitudeEl = document.querySelector("#latitude");
    const longitudeEl = document.querySelector("#longitude");
    const sunriseEl = document.querySelector("#sunrise");
    const sunsetEl = document.querySelector("#sunset");

    // URLS to fetch from
    // 'https://go-apod.herokuapp.com/apod'
    // 'https://api.sunrise-sunset.org/json'


    // Astronomical Image

    /*
    
    1. fetch
    2. response.json
    3. use the data


    */

    // Fetch for the astronomical image here
    
    // const fetchPromise = fetch('https://go-apod.herokuapp.com/apod');
    // fetch returns a Promise object
    // console.log(fetchPromise); // prints [object Promise] { ... }
    // fetchPromise.then(response =>{
    //     const dataPromise = response.json();
    //     return dataPromise 
    // })
    
    // dataPromise.then((data) => {
    //     console.log(data);
    // })

    fetch('https://go-apod.herokuapp.com/apod')
        .then(response => response.json())
        .then(data => {
            console.log(data.hdurl);
            astroImageEl.src = data.hdurl
        })

    // Sunset/Sunrise 

    latitudeEl.innerText = `Latitude: Loading...`;
    longitudeEl.innerText = `Longitude: Loading...`;
    sunriseEl.innerText = `Sunrise: Loading...`;
    sunsetEl.innerText = `Sunrise: Loading...`;

    // use the navigator API to get your device's current location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            console.log('My General Position:', position);
            let long = position.coords.longitude;
            let lat = position.coords.latitude;

            // Fetch sunrise/sunset data here

        })
    }

    
}

main()