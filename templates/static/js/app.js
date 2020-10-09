var tbody = d3.select ("tbody")

d3.csv("Raw Data/all_nc.csv", function(data) {
    console.log(data)

    data.forEach(function(bars_data){
        var row = tbody.append("tr");
        // use append method to insert table data for each row
        Object.entries(bars_data).forEach(function([key,value]){
            console.log(key, value)
            // use append to insert a cell for each value
            // use text to insert data to each cell
            var cell = row.append("td").text(value);
        });
    });

})

var button = d3.select("filter_btn");

button.on("click", function(){
    // select the input element and get the html node
    var inputElement = d3.select(".form-control");
    // get the value property of the input element
    var inputName = inputElement.property("value");
    //console.log(inputDate)
    // filter data for the date value to get data that is searched for
    var filteredData = data.filter(ufo => bars_data.name === inputName);
    //console.log(filteredData);

    // select the table body to insert table rows and cells
    var tbody = d3.select("tbody")
    // clean the table body to insert selected date values
    tbody.html("");

    // loop through filtered data to insert rows and cells for each object
    filteredData.forEach(function(bars_data){
        var row = tbody.append("tr");
        Object.entries(bars_data).forEach(function([key, value]){
            var cell = row.append("td").text(value);
        })
    })
});