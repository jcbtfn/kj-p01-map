const citiesList = document.querySelector('.cities-list');
const endpoint = 'https://gist.githubusercontent.com/jcbtfn/688cb35c398469b682168b5bd2513007/raw/61b087a27d8030ba78fdb615fdff04b42d69ee12/testcities.json';

const cities = [];

fetch(endpoint)
    .then(response => { return response.json() })
    .then(data => cities.push(...data))
    .then(showCities)

function showCities() {

    const html = cities.map(city => {
        return `
                <li>
                    <span class="name">${city.name}</span>
                </li>
                `;
    }).join('');

    citieslist.innerHTML = html;

    const allCitiesList = document.querySelectorAll('.name');
    allCitiesList.forEach(cityInTheList => {
        cityInTheList.addEventListener('click', showInfo);
    });

};

function showInfo(e) {

    const cityToShow = cities.find(cityInArray => cityInArray.name === e.target.textContent);
    citiesinfo.innerHTML = `
                            <li>
                                <span><b>Name:</b> ${cityToShow.name}</span>
                            </li>
                            <li>
                                <span><b>Country code:</b> ${cityToShow.country}</span>
                            </li>
                            <li>
                                <span><b>Lat:</b> ${cityToShow.lat}</span>
                            </li>
                            <li>
                                <span><b>Lng:</b> ${cityToShow.lng}</span>
                            </li>
                            `;

    const position = new google.maps.LatLng(cityToShow.lat, cityToShow.lng);
    initMap(position);

};

const citieslist = document.querySelector('.cities-list');
const citiesinfo = document.querySelector('.cities-info');