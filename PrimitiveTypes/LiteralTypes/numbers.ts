let x: number;
let y = 0;
let z: number = 123.456;
let big: bigint = 100n;

console.log(big);

type dice = 1 | 2 | 3 | 4 | 5 | 6;
let diceRoll: dice;
diceRoll = 1;    //* Valid
diceRoll = 2;    //* Valid
// diceRoll = 7;    //* Invalid -> Assignment unavailable in dice assignments