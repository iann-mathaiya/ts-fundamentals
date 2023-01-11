import * as LoanPrograms from 'Types/IntersectionTypes/Test/exercise'

let interestOnlyPayment = LoanPrograms.calculateInterestOnlyLoanPayment({principal: 30000, interestRate: 5});
let conventionalLoanPayment = LoanPrograms.calculateConventionalLoanPayment({principal: 30000, interestRate: 5, months: 180});

console.log(`The total payable amount is $${interestOnlyPayment + conventionalLoanPayment}`);
