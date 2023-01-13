/// <reference path="loans.ts" />
/// <reference path="loan-programs.ts" />

let interestOnlyPayments = LoanPrograms.calculateInterestOnlyLoanPayments({principle: 30000, interestRate: 5});
let conventionalLoanPayments = LoanPrograms.calculateConventionalLoanPayments({principle: 30000, interestRate: 5, months: 180});
console.log(interestOnlyPayments);         //* Returns "The interest only loan payment is 125.00" 
console.log(conventionalLoanPayments);     //* Returns "The conventional loan payment is 237.24"