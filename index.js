// Code your solution in this file!

// returns number of blocks from hq to pickup location
function distanceFromHqInBlocks(pickupLocation){
    if (pickupLocation > 42){
        return pickupLocation -42
    } else {
        return 42 - pickupLocation
    }
}

//returns number of blocks but in feet
function distanceFromHqInFeet(pickupLocation){
    return distanceFromHqInBlocks(pickupLocation) * 264
}

//a block = 264 feet long 
function distanceTravelledInFeet(start, destination){
    if (start > destination){
        return (start - destination) * 264;
    } else {
        return (destination - start) * 264;
    }
}

//fare price 
function calculatesFarePrice(start, destination){
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return (0);
  } 
  else if (distance > 400 && distance <= 2000) {
    return (.02 * (distance - 400));
  } 
  else if (distance > 2000 && distance < 2500) {
    return (25);
  } 
  else {
    return 'cannot travel that far';
  }
}