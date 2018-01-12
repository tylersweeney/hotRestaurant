
var currentURL = window.location.origin;

$.ajax({
  url: currentURL + "/api/tables",
  method: "GET"
}).done(function(response) {

  console.log("URL: " + currentURL + "/api/tables");
  console.log(response);



  for(let i = 0; i < response.length; i++) {

    var table = $("<div>", {
      "class": "table",
     });

    var contents = '<h2><span class="number" id="current-table-' + i + '">'
                     + i+1 + '</span> | ' + response[i].customerID + '<h2>';
    table.append(contents);
    $("#reservations").append(table);
  }
});



// $.ajax({
//   url: "/api/waitlist",
//   method: "GET"
// }).done(function(response) {


// for(let i = 0; i < response.length; i++) {

//   $("#waitlist").append();

// }


// });