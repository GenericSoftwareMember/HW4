/*
Name: Kevin Sree
Email: kevinsree@student.uml.edu
File: script.js
*/

// Only activates if submission button clicked
document.getElementById("multiplicationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get int values
    const minRow = parseInt(document.getElementById("minRow").value);
    const maxRow = parseInt(document.getElementById("maxRow").value);
    const minColumn = parseInt(document.getElementById("minColumn").value);
    const maxColumn = parseInt(document.getElementById("maxColumn").value);

    // Create the error message, clear it if already used
    const errorMessageElement = document.getElementById("errorMessage");
    errorMessageElement.textContent = "";

    // Error checks for if values given are not numbers
    if (isNaN(minRow) || isNaN(maxRow) || isNaN(minColumn) || isNaN(maxColumn)) {
        displayError("errorMessage", "Invalid input. Please enter valid numbers.");
        return;
    }

    // Error checks if values are within acceptable range
    if (minRow < -50 || maxRow > 50 || minColumn < -50 || maxColumn > 50) {
        displayError("errorMessage", "Please enter numbers between -50 and 50.");
        return;
    }

    // Error checks if given values make sense within limit
    if (minRow > maxRow || minColumn > maxColumn) {
        displayError("errorMessage", "The minimum value should not exceed the maximum value.");
        return;
    }
    
    // Create the multiplication table with the user-input values
    generateTable(minRow, maxRow, minColumn, maxColumn);
});

// Function to create the table and populate it with the correct values
function generateTable(minRow, maxRow, minColumn, maxColumn) {

    const tableContainer = document.getElementById("tableContainer");
    tableContainer.innerHTML = "";

    const table = document.createElement("table");

    const topRow = document.createElement("tr");
    topRow.appendChild(document.createElement("th"));

    // For-loop to create header row
    for (let i = minRow; i <= maxRow; i++) {
        const th = document.createElement("th");
        th.textContent = i;
        topRow.appendChild(th);
    }

    // Appends header row to top of table
    table.appendChild(topRow);

    // Nested for-loop to create rows and columns of table
    for (let i = minColumn; i <= maxColumn; i++) {
        const row = document.createElement("tr");

        const th = document.createElement("th");
        th.textContent = i;
        row.appendChild(th);

        // Calculates each value in a row
        for (let j = minRow; j <= maxRow; j++) {
            const td = document.createElement("td");
            td.textContent = i * j;
            row.appendChild(td);
        }

        // Appends each completed row
        table.appendChild(row);
    }

    // Appends table to the container
    tableContainer.appendChild(table);
}

// Function to display the error message
function displayError(elementId, message) {
    const errorMessageElement = document.getElementById(elementId);
    errorMessageElement.textContent = message;
}