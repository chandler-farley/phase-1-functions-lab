// Code your solution in this file!
function distanceFromHqInBlocks(pickUpLoc) {
    return Math.abs(42 - pickUpLoc);
}

function distanceFromHqInFeet(pickUpLoc) {
    return 264 * distanceFromHqInBlocks(pickUpLoc);
}

function distanceTravelledInFeet(start, destination) {
    let blocks = Math.abs(start - destination);
    return blocks * 264;
}

function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    if (distance < 400) {
        return 0;
    } else if (distance <= 2000) {
        return ((distance - 400) * 0.02);
    } else if (distance < 2500) {
        return 25;
    } else if (distance > 2500) {
        return 'cannot travel that far';
    }
}