// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   document.getElementById("missionTarget").innerHTML=
               `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter:${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth:${distance} </li>
                    <li>Number of Moons:${moons} </li>
                </ol>
                <img src="${imageUrl}">`
   
}

function validateInput(testInput) {
  if(testInput===""){
    return "Empty";
  }if(isNaN(testInput)){
    return "Not a Number";
  }
  return  "Is a Number";
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    if(validateInput(pilot)==="Empty"||validateInput(copilot)==="Empty"||validateInput(fuelLevel)==="Empty"||validateInput(cargoLevel)==="Empty"){
        alert("All fields are required!"); 
        list.style.visibilty="hidden";
       }
       else if(validateInput(pilot)==="Is a Number"||validateInput(copilot)==="Is a Number"||validateInput(fuelLevel)==="Not a Number"||validateInput(cargoLevel)==="Not a Number"){
        alert("Invalid input,pilot and copilot name must be text type and fuel and cargo mass must be number type");
        list.style.visibilty="hidden";
       }else{
        list.style.visibility="visible";
        list.childNodes[1].childNodes[1].textContent=`pilot ${pilot}is ready for launch`;
        list.childNodes[1].childNodes[3].textContent=`co-piot ${copilot} is ready for launch`;
        list.childNodes[1].childNodes[5].textContent=`Fuel level ${Number (fuelLevel) < 10000 ? "too low": "high enough"} for launch`;
        list.childNodes[1].childNodes[7].textContent=`Cargo mass ${Number (cargoLevel) > 10000 ? "too heavy":"low enough"} for launch`;
        if(Number(fuelLevel) < 10000 || Number(cargoLevel) > 10000){
          list.parentNode.childNodes[1].style.color="rgb(199,37,78)";
          list.parentNode.childNodes[1].textContent="Shuttle Not Ready for Launch";
          }else{
            list.parentNode.childNodes[1].style.color="rgb(65,159,106)";
            list.parentNode.childNodes[1].textContent="Shuttle is Ready for Launch";
            }
      }

    }  
  
async function myFetch() {
    let planetsReturned;

    planetsReturned = await (await fetch("https://handlers.education.launchcode.org/static/planets.json")).json();

    return planetsReturned;
}

function pickPlanet(planets) {
  let index = Math.floor(Math.random()*planets.length);
  return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
