function findMatching(drivers, string){
   return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase());
}

function fuzzyMatch(names, string1){
    let lengthOfName = string1.length;
    return names.filter(function (driverName){
        return driverName.slice(0, lengthOfName) === string1;
    });
}    

function matchName (obj, name) {
    return obj.filter(function (driver) {
      return driver.name.toLowerCase() === name.toLowerCase();
    });
  }