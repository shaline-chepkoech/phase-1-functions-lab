// Code your solution in this file!
function distanceFromHqInBlocks(pickUp){
let scuberHQ = 42;
let distance = Math.abs(pickUp - scuberHQ);
return distance; 
}
function distanceFromHqInFeet (someValue) {
    const blocks = distanceFromHqInBlocks(someValue);
    const feet = blocks * 264;
    return feet;
};
function distanceTravelledInFeet(start, destination) {
    const distanceInFeet = Math.abs(destination - start);
    return distanceInFeet * 264;
    }

function calculatesFarePrice(start, destination) {
    const distanceTravelled = distanceTravelledInFeet(start, destination)
if(distanceTravelled > 2500){
    return 'cannot travel that far';
}
if (distanceTravelled > 2000){
return 25;
}
if (distanceTravelled <= 400) {
    return 0;
}
return (distanceTravelled - 400) * 0.02;

}
    

