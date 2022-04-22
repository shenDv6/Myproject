function test(num1:number, num2:number, str:string): number[] {
  let array = [];
  for (let n of arguments) {
    array.push(Number(n));
  }
  return array;
}

console.log(test(1,2,'444'))