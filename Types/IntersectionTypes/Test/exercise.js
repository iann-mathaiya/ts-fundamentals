"use strict";
exports.__esModule = true;
exports.calculateConventionalLoanPayment = exports.calculateInterestOnlyLoanPayment = void 0;
/*  TODO: Update the calculateInterestOnlyLoanPayment function. */
function calculateInterestOnlyLoanPayment(loanItems) {
    // Calculates the monthly payment of an interest only loan
    var interest = loanItems.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    var payment;
    payment = loanItems.principal * interest;
    return 'The interest only loan payment is ' + payment.toFixed(2);
}
exports.calculateInterestOnlyLoanPayment = calculateInterestOnlyLoanPayment;
/*  TODO: Update the calculateConventionalLoanPayment function. */
function calculateConventionalLoanPayment(loanTerms) {
    // Calculates the monthly payment of a conventional loan
    var interest = loanTerms.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    var payment;
    payment = loanTerms.principal * interest / (1 - (Math.pow(1 / (1 + interest), loanTerms.months)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
}
exports.calculateConventionalLoanPayment = calculateConventionalLoanPayment;
var interestOnlyPayment = calculateInterestOnlyLoanPayment({ principal: 30000, interestRate: 5 });
var conventionalPayment = calculateConventionalLoanPayment({ principal: 30000, interestRate: 5, months: 180 });
console.log(interestOnlyPayment); //* Returns "The interest only loan payment is 125.00" 
console.log(conventionalPayment); //* Returns "The conventional loan payment is 237.24" 
// TODO: Search for more use cases for interfaces -> This was fun!
