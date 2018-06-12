// - Write a function which receives an array of strings.
// It should return the longest string from the array
function longestString(arr) {
  return arr.reduce(function(acc, item) {
    if (item.length > acc) {
      return item;
    }
    return acc;
  }, 0);
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

function Developer(name, progLanguages) {
  this.name = name;
  this.progLanguages = progLanguages;
}

module.exports.Developer = Developer;

Developer.prototype.learnLanguage = function(newLang) {
  if (this.progLanguages.indexOf(newLang) === -1) {
    this.progLanguages.push(newLang);
  }
};

function Garden(plants) {
  this.plants = plants;
}

module.exports.Garden = Garden;
