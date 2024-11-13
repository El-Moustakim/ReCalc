function calculate() {
    // Input values
    const homePrice = parseFloat(document.getElementById("homePrice").value);

    // Sample calculations (replace with dynamic calculations and estimated values)
    const estimatedRent = homePrice * 0.01; // Placeholder rent calculation
    const closingCosts = homePrice * 0.02;
    const repairCosts = 5000; // Placeholder repair estimate
    const loanAmount = homePrice * 0.8;
    const cashNeeded = homePrice * 0.2 + closingCosts + repairCosts;

    // Mortgage calculation
    const loanRate = 0.05 / 12;
    const loanTerm = 30 * 12;
    const mortgage = (loanAmount * loanRate) / (1 - Math.pow(1 + loanRate, -loanTerm));

    // Monthly expenses
    const totalMonthlyExpenses = mortgage + estimatedRent * 0.5;

    // Cash flow and returns
    const cashFlow = estimatedRent - totalMonthlyExpenses;
    const CoCROI = (cashFlow * 12) / cashNeeded * 100;

    // Display results
    document.getElementById("results").innerHTML = `
        <p>Estimated Rent: $${estimatedRent.toFixed(2)}</p>
        <p>Total Project Cost: $${(homePrice + closingCosts + repairCosts).toFixed(2)}</p>
        <p>Cash Needed: $${cashNeeded.toFixed(2)}</p>
        <p>Estimated Mortgage Payment: $${mortgage.toFixed(2)}</p>
        <p>Monthly Cash Flow: $${cashFlow.toFixed(2)}</p>
        <p>Cash-on-Cash ROI: ${CoCROI.toFixed(2)}%</p>
        <p>50% Rule Cash Flow: $${(estimatedRent * 0.5 - mortgage).toFixed(2)}</p>
        <p>2% Rule Test: ${(estimatedRent / homePrice * 100).toFixed(2)}% - ${estimatedRent / homePrice >= 0.02 ? 'Pass' : 'Fail'}</p>
    `;
}
