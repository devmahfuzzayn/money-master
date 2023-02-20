document.getElementById("btn-calculate").addEventListener("click", function () {
    const income = getInputFieldValueById("income-input-field");
    const totalExpenses = getTotalExpensesById(
        "food-input-field",
        "rent-input-field",
        "clothes-input-field"
    );
    const balance = getBalanceById(income, totalExpenses);
    if (balance !== 0) {
        setElementValueById("total-expenses", totalExpenses);
        setElementValueById("balance", balance);
    }
});

document.getElementById("btn-save").addEventListener("click", function () {
    const income = getInputFieldValueById("income-input-field");
    const balance = getElementValueById("balance");
    const saveAmount = getSaveValueById(income, balance, "save-input-field");
    const remainingBalance = getRemainingValue(balance, saveAmount);

    setElementValueById("saving-amount", saveAmount);
    setElementValueById("remaining-balance", remainingBalance);
});
