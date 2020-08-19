/*
async function weatherAPI(address) {
  try {
    const result = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,
          +Mountain+View,+CA&key=AIzaSyD1Gxt9irjoAYzRDvCbs_DYgKJtATYAmnA`);
    const data = await result.json();
    console.log(data);
    const lat = data.results[0].geometry.location.lat;
    const lon = data.results[0].geometry.location.lng;
    const result2 = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=27cb6d460482e895ae4d104c55c13c09`
    );
    const data2 = await result2.json();
    console.log(data2);
    return data2;
  } catch (error) {
    console.log(error);
  }
}

let weatherData;

document
  .getElementById("submit")
  .addEventListener("click", convertLocationIntoString);

function convertLocationIntoString() {
  var address = document.getElementById("address").value;
  var city = document.getElementById("city").value;
  var state = document.getElementById("state").value;
  var fullAddress = `${address} ${city} ${state}`.split(" ").join("+");
  //return fullAddress;
  weatherAPI(fullAddress).then((data2) => {
    weatherData = data2;
  });
}

var d = new Date(1597723741 * 1000);

export default weatherData;
*/
