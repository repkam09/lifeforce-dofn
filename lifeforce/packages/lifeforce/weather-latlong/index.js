import fetch from "node-fetch";

const { KEY_OPEN_WEATHER_MAP } = process.env;

export async function main(args) {
    const result = await fetch(build_url(args.zip))
    const json = await result.json();

    return json;
}

function build_url(zip) {
    return `http://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${KEY_OPEN_WEATHER_MAP}`
}