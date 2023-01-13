/// <reference path="loans.ts" />
var LoanPrograms;
(function (LoanPrograms) {
    // Calculates the monthly payment of an interest only loan
    function calculateInterestOnlyLoanPayments(loanTerms) {
        var payment;
        payment = loanTerms.principle * calculateInterestRates(loanTerms.interestRate);
        return 'The interest only loan payment is ' + payment.toFixed(2);
    }
    LoanPrograms.calculateInterestOnlyLoanPayments = calculateInterestOnlyLoanPayments;
    // Calculates the monthly payment of a conventional loan      
    function calculateConventionalLoanPayments(loanTerms) {
        var interest = calculateInterestRates(loanTerms.interestRate);
        var payment;
        payment = loanTerms.principle * interest / (1 - (Math.pow(1 / (1 + interest), loanTerms.months)));
        return 'The conventional loan payment is ' + payment.toFixed(2);
    }
    LoanPrograms.calculateConventionalLoanPayments = calculateConventionalLoanPayments;
    function calculateInterestRates(interestRate) {
        var interest = interestRate / 1200;
        return interest;
    }
})(LoanPrograms || (LoanPrograms = {}));
/// <reference path="loans.ts" />
/// <reference path="loan-programs.ts" />
var interestOnlyPayments = LoanPrograms.calculateInterestOnlyLoanPayments({ principle: 30000, interestRate: 5 });
var conventionalLoanPayments = LoanPrograms.calculateConventionalLoanPayments({ principle: 30000, interestRate: 5, months: 180 });
console.log(interestOnlyPayments); //* Returns "The interest only loan payment is 125.00" 
console.log(conventionalLoanPayments); //* Returns "The conventional loan payment is 237.24"
