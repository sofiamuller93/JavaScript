// from data.js
var tableData = data;

// Select table body
var tbody = d3.select("tbody");

// Loop Through `data` to add rows, cells and text
data.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
        var cell = tbody.append("td");
        cell.text(value);
    });
});

// Define a variable for the filter button
var filter = d3.select("#filter-btn");

filter.on("click", function() {
    // Prevent the page from refreshening
    d3.event.preventDefault();

    var inputDate = d3.select("#datetime");
    var inputValue = inputDate.property("value");
    console.log(inputValue);
    var filteredReport = data.filter(sighting => sighting.datetime === inputValue);
    console.log(filteredReport);

    // If they enter without putting anything in the search button, rebuild the table;
    // If they input a date not found in the table, let them know; otherwise build the table from filterdata.
    
    if (filteredReport.length > 0) {
        tbody.html("");
        filteredReport.forEach((sighting) => {
            var row = tbody.append("tr");
            Object.entries(sighting).forEach(([key, value]) => {
                var cell = tbody.append("td");
                cell.text(value);
            });
        });
    }
    else {
        alert(`${inputValue} not found.`);
        data.forEach(function(sighting) {
            var row = tbody.append("tr");
            Object.entries(sighting).forEach(([key, value]) => {
                var cell = tbody.append("td");
                cell.text(value);
            });
        });
    }
});