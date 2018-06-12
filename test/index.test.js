const { longestString, l337, uniqueStrings } = require("../src/index.js");

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

test.only("uniqueStrings", function() {
  const expected = ["one", "two", "three", "four"];
  const result = uniqueStrings(["one", "two", "one", "two", "three", "four"]);
  expect(result).toEqual(expected);
});
