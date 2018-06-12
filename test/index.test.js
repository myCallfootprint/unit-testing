const {
  longestString,
  l337,
  uniqueStrings,
  Developer,
  Garden,
  stringsConcat
} = require("../src/index.js");

// test('Addition', function(){
//   const expected = 5;
//   const result = functions.add(2, 3);
//   expect(result).toBe(expected);
// });

test("longestString", function() {
  const expected = "longest";
  const result = longestString(["longest", "longes", "longe", "long"]);
  expect(result).toBe(expected);
});

test("l337", function() {
  const expected = "h4pp7";
  const result = l337("happy");
  expect(result).toBe(expected);
});

test("uniqueStrings", function() {
  const expected = ["one", "two", "three", "four"];
  const result = uniqueStrings(["one", "two", "one", "two", "three", "four"]);
  expect(result).toEqual(expected);
});

// test("Developer", function() {
//   const developer = new Developer("ralph", ["html", "css", "javascript"]);
//   const expected = {
//     name: "ralph",
//     progLanguages: ["html", "css", "javascript"]
//   };
//   const result = developer;
//   expect(result).toEqual(expected);
// });

test("Developer", function() {
  const developer = new Developer("ralph", ["html", "css", "javascript"]);
  developer.learnLanguage("python");
  developer.learnLanguage("css");
  const expected = {
    name: "ralph",
    progLanguages: ["html", "css", "javascript", "python"]
  };
  const result = developer;
  expect(result).toEqual(expected);
});

test("Garden", function() {
  const garden = new Garden({ rose: 3, poppy: 2, tulip: 1 });
  garden.plant({ violet: 7, "english rose": 4 });
  const expected = {
    rose: 3,
    poppy: 2,
    tulip: 1,
    violet: 7,
    "english rose": 4
  };
  const result = garden;
  expect(result).toEqual(expected);
});

test("Garden", function() {
  const garden = new Garden({ rose: 3, poppy: 6, tulip: 1 });
  garden.harvest({ poppy: 4, rose: 3 });
  const expected = { poppy: 2, tulip: 1 };
  const result = garden;
  expect(result).toEqual(expected);
});

test.only("stringsConcat", function() {
  const expected = "This is a concatenated string";
  const result = stringsConcat([
    "This",
    9.78,
    "is",
    99,
    "a",
    79,
    "concatenated",
    "string"
  ]);
  expect(result).toEqual(expected);
});
