
function findCity() {
    const cityName = document.getElementById('city-name');
    if (cityName.value) {
        let splitCityName = cityName.value.toLowerCase().split(" ");
        for (let i = 0; i < splitCityName.length; i++) {
            splitCityName[i] = splitCityName[i].charAt(0).toUpperCase() + splitCityName[i].substring(1);
        }
        return splitCityName.join(" ");
    }
}

module.exports = findCity;