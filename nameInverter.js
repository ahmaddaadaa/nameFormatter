const nameInverter = function(name) {
  let fullName = name;
  let honorifics = ["Mr.", "Mrs.", "Ms.", "Dr."];
  let nameArray = [];
try{
  if (fullName === undefined) {
    throw new Error("inputNotDefined");
  } 

  // if the name is empty returns empty:
  if (fullName === '') {
    return '';
  }

  // removes all the spaces and store the output in nameArray
  if (fullName.includes(" ")) {
    nameArray = fullName.split(" ");

  }
  // 
  if (nameArray.length === 0) {
    nameArray.push(fullName);
  }





  // removes any additional spaces:
  const filteredArray = nameArray.filter(x => x.trim() !== '');

  if (filteredArray.length === 1) {
    for (var honorific of honorifics) {
      if (filteredArray[0] === honorific) {
        return '';
      }
    }
    return filteredArray[0];
  }

  if (filteredArray.length === 2 && filteredArray[0] !== honorifics[3]) {
    return filteredArray[1] + ", " + filteredArray[0];
  }

  if (filteredArray.length === 2 && filteredArray[0] === honorifics[3]) {
    return filteredArray[0] + " " + filteredArray[1];
  }

  if (filteredArray.length === 3 && filteredArray[0] === honorifics[3]) {
    return filteredArray[0] + " " + filteredArray[2] + ", " + filteredArray[1];
  }

}catch (error) {
  return 'Error';
}

};

console.log(nameInverter("Dr. Ahmad"));


module.exports = nameInverter;