// from data.js
var tableData = data;

// Select table body
var tbody = d3.select("tbody");

// Loop Through `data` to add rows, cells and text
data.forEach(function(alienReport) {
    var row = tbody.append("tr");
    Object.entries(alienReport).forEach(function([key, value]) {
        var cell = tbody.append("td");
        cell.text(value);
    });
});

// Define a variable for the filter button
var filter = d3.select("#filter-btn");

// Loop Through `data` to add rows, cells and text
data.forEach(function(alienReport) {
    var row = tbody.append("tr");
    Object.entries(alienReport).forEach(function([key, value]) {
        var cell = tbody.append("td");
        cell.text(value);
    });
});

filter.on("click", function() {
    // Prevent the page from refreshening
    d3.event.preventDefault();
    var inputDate = d3.select("#datetime");
    var inputValue = inputDate.property("value");
    console.log(inputValue);
    var filteredReport = data.filter(sight => sight.datetime === inputValue);
    console.log(filteredReport);

    // Delete previous data
    tbody.de

    // Fill tables with
    data.forEach(function(filteredReport) {
        var row = tbody.append("tr");
        Object.entries(filteredReport).forEach(function([key, value]) {
            var cell = tbody.append("td");
            cell.text(value);
        });
    });

});