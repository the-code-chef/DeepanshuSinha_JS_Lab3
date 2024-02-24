class WeatherUtils {

    static convertResponse(responseJSON) {
        return {
            LOCATION: `${responseJSON.name}, ${responseJSON.sys.country}`,
            DATE: WeatherUtils.getTodayDate(),
            TEMPERATURE: `${Math.floor(responseJSON.main.temp)}°c`,
            TEMPERATURE_TYPE: responseJSON.weather[0].main,
            MIN_TEMPERATURE: `${Math.floor(responseJSON.main.temp_min)}°c`,
            MAX_TEMPERATURE: `${Math.floor(responseJSON.main.temp_max)}°c`
        };
    }

    static getTodayDate() {
        const today = new Date();
        return today.toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    }
}

export {WeatherUtils}
