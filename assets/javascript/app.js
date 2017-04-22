var fs = require("fs");

var reservations =[];
var waitlist = [];


exports.UserReservations= function(name,phone,email,id){
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.id = id;
};




$("#add-btn").on("click", function() {
    var makeReservation = $("#character-search").val().trim();

    makeReservation = makeReservation.replace(/\s+/g, "").toLowerCase();

    // $.get("/api/" + searchedCharacter, function(data) {
        console.log(data);
        if (data) {
            $("#stats").show();
            $("#name").text(data.name);
            $("#phone").text(data.phone);
            $("#email").text(data.email);
            $("#id").text(data.id);
        }
        else {
            $("#name").text("The force is not strong with this one. Your character was not found.");
            $("#stats").hide();
        }
    // });
});
