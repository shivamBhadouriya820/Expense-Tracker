// JavaScript to handle adding expenses and updating the total expense

const addExpenseButton = document.getElementById('add-expense');
const expenseList = document.getElementById('expense-list');
const totalExpense = document.getElementById('total-expense');

let total = 0;

addExpenseButton.addEventListener('click', function() {
    // Get input values
    const expenseName = document.getElementById('expense-name').value;
    const expenseAmount = parseFloat(document.getElementById('expense-amount').value);

    if (expenseName === '' || isNaN(expenseAmount) || expenseAmount <= 0) {
        alert('Please enter a valid expense detail and amount.');
        return;
    }

    // Add expense to the list
    const expenseItem = document.createElement('li');
    expenseItem.innerHTML = `
        <span>${expenseName}</span>
        <span>$${expenseAmount.toFixed(2)}</span>
    `;
    expenseList.appendChild(expenseItem);

    // Update total expense
    total += expenseAmount;
    totalExpense.textContent = total.toFixed(2);

    // Clear input fields
    document.getElementById('expense-name').value = '';
    document.getElementById('expense-amount').value = '';
});
