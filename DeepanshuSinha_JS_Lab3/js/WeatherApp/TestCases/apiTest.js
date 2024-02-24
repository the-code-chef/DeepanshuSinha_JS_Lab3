import {WeatherAPI} from "../api.js"

function testConstructUrl() {

    const weatherAPIObj = new WeatherAPI();
    weatherAPIObj.constructUrl("New Delhi");

}

async function testInvokeUrl1() {

    const weatherAPIObj = new WeatherAPI();
    weatherAPIObj.constructUrl("London");
    const responseJSON = await weatherAPIObj.invokeUrl1();
    console.log(responseJSON);

}

async function testInvokeUrl2() {

    const weatherAPIObj = new WeatherAPI();
    weatherAPIObj.constructUrl("France");
    const responseJSON = await weatherAPIObj.invokeUrl2();
    console.log(responseJSON);

}

testConstructUrl();
testInvokeUrl1().then(r => console.log(r));
testInvokeUrl2().then(r => console.log(r));
