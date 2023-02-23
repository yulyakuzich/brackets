module.exports = function check(expr, bracketsConfig) {

  const openBrackets = bracketsConfig.map(el => el[0]);
  const closedBrackets = bracketsConfig.map(el => el[1]);

  let allStuff = expr.split('')
  function checkAndRemovePairOfBrackets () {
    for (let index = 0; index < allStuff.length - 1; index++) {
      const element = allStuff[index];
      const elementIndex = openBrackets.indexOf(element);
      const nextElement = closedBrackets[elementIndex]
      if (allStuff[index + 1] === nextElement) {
        allStuff = [...allStuff.slice(0, index), ...allStuff.slice(index + 2, allStuff.length)]
        break;
      }
    }
  }
  for (let i = 0; i < ( expr.length / 2); i++) {
    checkAndRemovePairOfBrackets();
  }
  return allStuff.length == 0
}
