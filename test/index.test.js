const { longestString } = require("../src/index.js");

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
