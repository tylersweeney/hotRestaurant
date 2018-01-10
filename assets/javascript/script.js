$('#tables').click(function() {
    window.location = "http://localhost:3000/" + this.id;
 });
 $('#home').click(function() {
    window.location = "http://localhost:3000/";
 });
 
     $("#submit").on("click", function(event) {
       event.preventDefault();
       var tables = {
         name: $("#name").val(),
         phone: $("#phone").val(),
         email: $("#email").val(),
         id: $("#id").val()
       };
       alert("Adding Reservation...");
       $('#form').trigger("reset");
 
       $.post("/api/tables", tables)
       .then(function(data) {
         console.log(data);
         alert("Adding Reservation...");
       });
       if (tables.length<5){
            var newTable = $("<div>", {
             "class": "table",
             "id" : "current-table"
            });
       } else {
        var newTable = $("<div>", {
            "class": "table",
            "id" : "wait-table"
         });
       }
     });