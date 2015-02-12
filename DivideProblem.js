function DivideProblem(num) {
  var result = "";

  if (num % 3 === 0)
    result += "First";
  if (num % 5 === 0)
    result += " Second";

  if (!result)
    result += num;

  return result.trim();
}

for (var i = 1; i < 101; i++) {
  console.log(DivideProblem(i));
}