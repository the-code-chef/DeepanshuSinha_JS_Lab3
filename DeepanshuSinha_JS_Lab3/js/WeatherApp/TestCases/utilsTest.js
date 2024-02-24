import {WeatherUtils} from "../utils.js"
import {WeatherAPI} from "../api.js";

async function testConvertResponse() {

    const weatherAPIObj = new WeatherAPI();
    weatherAPIObj.constructUrl("Brazil");
    const responseJSON = await weatherAPIObj.invokeUrl1();
    console.log(responseJSON);

    const outcome = WeatherUtils.convertResponse(responseJSON);

    console.log("Converted Response");
    console.log(outcome);
}

testConvertResponse().then(r => console.log("Test completed"));
