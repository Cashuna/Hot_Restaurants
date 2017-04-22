var fs = require("fs");

var reservations =[];
var waitlist = [];

function UserReservations(name,phone,email,id){
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.id = id;
}




$("#search-btn").on("click", function() {
    var makeResevation = $("#character-search").val().trim();

    makeResevation = makeResevation.replace(/\s+/g, "").toLowerCase();

    // $.get("/api/" + searchedCharacter, function(data) {
        console.log(data);
        if (data) {
            $("#stats").show();
            $("#name").text(data.name);
            $("#role").text(data.role);
            $("#age").text(data.age);
            $("#force-points").text(data.forcePoints);
        }
        else {
            $("#name").text("The force is not strong with this one. Your character was not found.");
            $("#stats").hide();
        }
    // });
});