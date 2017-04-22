$("#add-btn").on("click", function(event) {
  event.preventDefault();

  var newReservation = {
    name: $("#name").val().trim(),
    role: $("#phone").val().trim(),
    age: $("#email").val().trim(),
    id: $("#id").val().trim()
  };

  // Question: What does this code do??
  $.post("/api/tables", newReservation)
  .done(function(data) {
    console.log(data);
    alert("Adding reservation...");
  });

});
