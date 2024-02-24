const appId = "0545aa215f225aa5937adf9ccc67410c";
const units = "metric";
const baseUrl = "https://api.openweathermap.org/data/2.5/weather";

class WeatherAPI {

    constructor() {
        this.url = new URL(baseUrl);
        this.url.searchParams.append("appid", appId);
        this.url.searchParams.append("units", units);
    }

    constructUrl(locationName) {
        this.url.searchParams.append("q", locationName);
        console.log(this.url.toString());
    }

    async invokeUrl1() {
        const responseObj = await fetch(this.url.toString());
        return await responseObj.json();
    }

    invokeUrl2() {
        return fetch(this.url.toString())
            .then((response) => {
                return response.json();
            })
            .then((responseJson) => {
                return responseJson;
            })
            .catch((error) => {
                console.log(error.message);
            });
    }
}

export {WeatherAPI}
