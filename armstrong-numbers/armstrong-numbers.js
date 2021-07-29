export const isArmstrongNumber = (n) => {

  let len = Math.floor(Math.log(n) / Math.LN10);
  let sum = 0;
  let aux = n;
  while (aux > 0) {
    let digit = aux%10;
    sum += Math.pow(digit, len+1);
    aux = Math.floor(aux / 10);
  }
  return sum === n;
};
