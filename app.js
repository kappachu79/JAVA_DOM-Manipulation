
// from data.js
var tableData = data;

//  tbody 
tbody = d3.select("tbody")
console.log("hello")

// loop through table 
function displayData(something){ 
    tbody.text("")
    something.forEach(function(et_sighting){
    new_tr = tbody.append("tr")
    Object.entries(et_sighting).forEach(function([key, value]){
        new_td = new_tr.append("td").text(value)	
    })
})}

displayData(tableData)

console.log("hello2")


// submit button
var submit = d3.select("#submit");

submit.on("click", function() {
    console.log("hello3")

  
  d3.event.preventDefault();

  // Select the input element 
  var dateInput = d3.select("#datetime");
  var cityInput = d3.select("#city");
  var stateInput = d3.select("#state");
  var countryInput = d3.select("#country");
  var shapeInput = d3.select("#shape");

  //  value of the input element
  console.log(dateInput.property("value"));
  console.log(cityInput.property("value"));
  console.log(stateInput.property("value"));
  console.log(countryInput.property("value"));
  console.log(shapeInput.property("value"));

  // variable filters for the table 
 var filtered = tableData.filter(et_sighting =>{
  return (et_sighting.datetime===dateInput.property("value") || !dateInput.property("value") ) && 
            (et_sighting.city===cityInput.property("value") || !cityInput.property("value")) &&
            (et_sighting.state===stateInput.property("value") || !stateInput.property("value")) &&
            (et_sighting.country===countryInput.property("value") || !countryInput.property("value")) &&
            (et_sighting.shape===shapeInput.property("value") || !shapeInput.property("value"))
 })

 //display the filtered entries 
 displayData(filtered);


});

var filterInputs = d3.selectAll('.form-control');

// Clears input fields 
function clearEntries() {
    filters = {};

    // Sets every input field to empty
    filterInputs._groups[0].forEach(entry => {
        if (entry.value != 0) {
            d3.select('#' + entry.id).node().value = "";
        }
    });
};

var clearButton = d3.select("#clear");
// click clears fields
clearButton.on('click', function () {

    // perform table refresh
    d3.event.preventDefault();
    // Clears input fields
    clearEntries()
});

