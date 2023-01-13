/// <reference path="loans.ts" />

namespace LoanPrograms {
    // Calculates the monthly payment of an interest only loan
    export function calculateInterestOnlyLoanPayments(loanTerms: Loans.Loan): string {
        let payment: number;
        payment = loanTerms.principle * calculateInterestRates(loanTerms.interestRate);
        return 'The interest only loan payment is ' + payment.toFixed(2);
    }
    // Calculates the monthly payment of a conventional loan      
    export function calculateConventionalLoanPayments(loanTerms: Loans.ConventionalLoan): string {
        let interest: number = calculateInterestRates(loanTerms.interestRate);
        let payment: number;
        payment = loanTerms.principle * interest / (1 - (Math.pow(1/(1 + interest), loanTerms.months)));
        return 'The conventional loan payment is ' + payment.toFixed(2);
    }
    function calculateInterestRates (interestRate: number): number {
        let interest: number = interestRate / 1200;
        return interest
    }
}