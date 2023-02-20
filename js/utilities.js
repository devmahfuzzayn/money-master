function getInputFieldValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValueString = element.value;
    const elementValue = parseFloat(elementValueString);
    if (elementValueString === "") {
        alert(elementId + " value cannot be empty");
        return 0;
    } else if (isNaN(elementValue) === true) {
        alert(elementId + " value should be in number");
        return 0;
    } else if (elementValue < 0) {
        alert(elementId + " value cannot be in negative number");
        return 0;
    }
    return elementValue;
}

function getBalanceById(incomeValue, totalExpensesValue) {
    if (totalExpensesValue > incomeValue) {
        alert("income-input-field value is less than total expenses");
        return 0;
    }
    const balance = incomeValue - totalExpensesValue;
    return balance;
}

function getTotalExpensesById(
    expenseOneElementId,
    expenseTwoElementId,
    expenseThreeElementId
) {
    const expenseOneElement = document.getElementById(expenseOneElementId);
    const expenseTwoElement = document.getElementById(expenseTwoElementId);
    const expenseThreeElement = document.getElementById(expenseThreeElementId);
    const expenseOneValueString = expenseOneElement.value;
    const expenseTwoValueString = expenseTwoElement.value;
    const expenseThreeValueString = expenseThreeElement.value;
    const expenseOneValue = parseFloat(expenseOneValueString);
    const expenseTwoValue = parseFloat(expenseTwoValueString);
    const expenseThreeValue = parseFloat(expenseThreeValueString);
    if (
        isNaN(expenseOneValue) === true ||
        isNaN(expenseTwoValue) === true ||
        isNaN(expenseThreeValue) === true
    ) {
        alert("total-expenses input field values should be in numbers");
        return 0;
    } else if (
        expenseOneValue < 0 ||
        expenseTwoValue < 0 ||
        expenseThreeValue < 0
    ) {
        alert(
            "total-expenses input field values cannot be in negative numbers"
        );
        return 0;
    } else if (
        expenseOneValueString === "" ||
        expenseTwoValueString === "" ||
        expenseThreeValueString === ""
    ) {
        alert("total-expenses input field values cannot be empty");
        return 0;
    }
    const totalExpenses = expenseOneValue + expenseTwoValue + expenseThreeValue;
    return totalExpenses;
}

function getSaveValueById(incomeValue, balanceValue, elementId) {
    const element = document.getElementById(elementId);
    const elementValueString = element.value;
    const elementValue = parseFloat(elementValueString);
    const saveAmount = incomeValue * (elementValue / 100);
    if (elementValueString === "") {
        alert(elementId + " value cannot be empty");
        return 0;
    } else if (isNaN(elementValue) === true) {
        alert(elementId + " value should be in number");
        return 0;
    } else if (elementValue < 0) {
        alert(elementId + " value cannot be in negative number");
        return 0;
    } else if (elementValue > 100) {
        alert(elementId + " value cannot be higher than 100%");
        return 0;
    } else if (saveAmount > balanceValue) {
        alert("You cannot save more than your balance");
        return 0;
    }
    return parseFloat(saveAmount.toFixed(2));
}

function getRemainingValue(balanceValue, saveValue) {
    const remainingBalance = balanceValue - saveValue;
    return remainingBalance;
}

function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementValue = element.innerText;
    return elementValue;
}

function setElementValueById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}
