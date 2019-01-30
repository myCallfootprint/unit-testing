// - Write a function which receives an array of strings.
// It should return the longest string from the array
//ADD COMMENT
function longestString(arr) {
  return arr.reduce(function(acc, item) {
    if (item.length > acc.length) {
      acc = item;
    }
    return acc;
  }, arr[0]);
}

module.exports.longestString = longestString;

// Write a function which receives a string.
// It should replace all instances of letters below with
// corresponding number and return the resulting string
function l337(str) {
  const l337M4p = {
    i: "1",
    l: "1",
    z: "2",
    e: "3",
    a: "4",
    s: "5",
    g: "6",
    t: "7",
    y: "7",
    b: "8",
    q: "9",
    o: "0"
  };

  const newArr = str.split("").map(function(letter) {
    return Object.keys(l337M4p).indexOf(letter) !== -1
      ? l337M4p[letter]
      : letter;
  });
  return newArr.join("");
}

module.exports.l337 = l337;

// Write a function which receives an array of strings.
// It should return an array of unique strings from the input array
function uniqueStrings(arr) {
  const output = [];
  arr.forEach(function(item) {
    if (output.indexOf(item) === -1) {
      output.push(item);
    }
  });
  return output;
}

module.exports.uniqueStrings = uniqueStrings;

// Write a function constructor called `Developer` which
// receives 2 parameters an input string containing name
// and an array of programming languages the developer knows
function Developer(name, progLanguages) {
  this.name = name;
  this.progLanguages = progLanguages;
}

// using prototypal inheritance add a function called learn
// language, which accepts a new language in string format
// and adds it to array of programming languages the developer knows.
// The values in array should be unique
Developer.prototype.learnLanguage = function(newLang) {
  if (this.progLanguages.indexOf(newLang) === -1) {
    this.progLanguages.push(newLang);
  }
};
module.exports.Developer = Developer;

// create a constructor called Garden. It should receive an
// object as input which contains names of plants as keys
// and numbers as corresponding quantities as values
function Garden(plants) {
  Object.keys(plants).forEach(plant => (this[plant] = plants[plant]));
}
// using prototypal inheritance add a method called `plant`
// which receives an object of plants and corresponding
// quantities as keys and adds them to current stock
Garden.prototype.plant = function(newPlantsList) {
  Object.keys(newPlantsList).forEach(item => {
    this[item] = newPlantsList[item];
  });
};

// Using prototypal inheritance add a method called harvest to garden.
// It should receive and object which contains plant names as keys
// and quantities to harvest as values.
// Reduce the quantity of existing plants in garden by the number of
// plants to be harvested. If number of certain plant falls to 0 or below.
// Remove key from corresponding object
Garden.prototype.harvest = function(plantsToHarvest) {
  Object.keys(plantsToHarvest).forEach(plant => {
    if (!this[plant]) {
      console.log(`We are not growing '${plant}' a the moment.`);
      return;
    }
    this[plant] - plantsToHarvest[plant] <= 0
      ? delete this[plant]
      : (this[plant] -= plantsToHarvest[plant]);
  });
};

module.exports.Garden = Garden;

// Write a function which receives an array of strings and numbers.
// The function should concatenate all strings and return the resulting string.
function stringsConcat(arr) {
  return arr
    .filter(function(item) {
      return typeof item === "string";
    })
    .join(" ");
}

module.exports.stringsConcat = stringsConcat;

// `negativeOnly` - Write a function which receives one array
// of positive and negative numbers. It should return an array
// containing only the negative numbers

function negativeOnly(arr) {
  return arr.filter(item => item < 0);
}

module.exports.negativeOnly = negativeOnly;

// `camelise` - Write a function which receive a
// string of lower case, space separated words.
// It should convert the string to camel case.
// That is capitalise the first letter of every
// word except the first and remove all spaces

// String method
function camelise(str) {
  return str.replace(/\s\S/gi, function(match) {
    return match.trim().toUpperCase();
  });
}

// Array method
// function camelise(str) {
//   const counter = 0;

//   str.split(" ").map(function(item, index) {
//     if () {
//       console.log(item);
//       const firstLetter = item.split("");
//       firstLetter.toUpperCase();
//     }
//   });
// }
module.exports.camelise = camelise;
// camelise("function which receive a string of lower case");
