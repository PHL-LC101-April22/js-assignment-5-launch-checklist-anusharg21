// Write your JavaScript code here!

window.addEventListener("load", function(event) {
    let itemsList = document.getElementById("faultyItems");
    let formSubmitButton = document.getElementById("formSubmit");
    formSubmitButton.addEventListener("click",function(event){
        event.preventDefault();
        let pilotName = document.querySelector("input[name=pilotName]").value;
        let coPilotName = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoMass = document.querySelector("input[name=cargoMass").value;
        formSubmission(document,itemsList,pilotName,coPilotName,fuelLevel,cargoMass);
        });
        itemsList.style.visibility="hidden";
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse=myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let planet=pickPlanet(listedPlanets);
       addDestinationInfo(document,planet['name'],planet['diameter'],planet['star'],planet['distance'],planet['moons'],planet['image']);
      
   
    })
   
});