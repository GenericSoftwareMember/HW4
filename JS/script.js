/*
Name: Kevin Sree
Email: kevinsree@student.uml.edu
File: script.js
*/

$(document).ready(function() {
    // Initialize form validation
    $('#multiplicationForm').validate({
      // Specify validation rules
      rules: {
        minRow: {
          required: true,
          number: true
        },
        maxRow: {
          required: true,
          number: true
        },
        minColumn: {
          required: true,
          number: true
        },
        maxColumn: {
          required: true,
          number: true
        }
      },
      // Specify validation error messages
      messages: {
        minRow: {
          required: "Please enter a minimum row value.",
          number: "Please enter a valid number."
        },
        maxRow: {
          required: "Please enter a maximum row value.",
          number: "Please enter a valid number."
        },
        minColumn: {
          required: "Please enter a minimum column value.",
          number: "Please enter a valid number."
        },
        maxColumn: {
          required: "Please enter a maximum column value.",
          number: "Please enter a valid number."
        }
      },
      // Handle form submission if validation passes
      submitHandler: function(form) {
        // Get values
        const minRow = parseInt($('#minRow').val());
        const maxRow = parseInt($('#maxRow').val());
        const minColumn = parseInt($('#minColumn').val());
        const maxColumn = parseInt($('#maxColumn').val());
  
        // Validate and generate table
        if (!isNaN(minRow) && !isNaN(maxRow) && !isNaN(minColumn) && !isNaN(maxColumn)) {
          if (minRow <= maxRow && minColumn <= maxColumn) {
            if (minRow >= -50 && maxRow <= 50 && minColumn >= -50 && maxColumn <= 50) {
              generateTable(minRow, maxRow, minColumn, maxColumn);
            } else {
              displayError("errorMessage", "Please enter numbers between -50 and 50.");
            }
          } else {
            displayError("errorMessage", "The minimum value should not exceed the maximum value.");
          }
        } else {
          displayError("errorMessage", "Invalid input. Please enter valid numbers.");
        }
      }
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
});