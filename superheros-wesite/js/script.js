$("#addHero-form").submit(function (event) {

    $("#addHero-Alert").addClass("hide")   // hiding the alert after clicking the submit

    if ($("#heroInput").val() == "") {
        $("#addHero-Alert").removeClass("hide")
        $("#addHero-Alert").text("You didn't enter anything.") // displaying the alert if value is not entered.
    } else {
        $("#hero-list").append("<li class='list-group-item'>" + $("#heroInput").val() + "</li>") // Adding the list
        $("#heroInput").val("")   // clearing the field if any previous value.
    }

    event.preventDefault();
});


$("#vote-form").submit(function (event) {           // get the already voted numbers for each movie
    var movie1Votes = $("#movieVotes1").text()
    var movie2Votes = $("#movieVotes2").text()
    var movie3Votes = $("#movieVotes3").text()
    var movie4Votes = $("#movieVotes4").text()
    var movie5Votes = $("#movieVotes5").text()

    $("#vote-form").addClass("hide")                // hiding the voting options once clicked the submit
    $("#vote-alert").removeClass("hide")             // displaying the alert , remove class will remove the class hide.

    if ($("#heroMovieRadio1").is(":checked")) {
        movie1Votes = parseInt(movie1Votes) + 1
        $("#movieVotes1").text(movie1Votes)
    } else if ($("#heroMovieRadio2").is(":checked")) {
        movie2Votes = parseInt(movie2Votes) + 1
        $("#movieVotes2").text(movie2Votes)
    } else if ($("#heroMovieRadio3").is(":checked")) {
        movie3Votes = parseInt(movie3Votes) + 1
        $("#movieVotes3").text(movie3Votes)
    } else if ($("#heroMovieRadio4").is(":checked")) {
        movie4Votes = parseInt(movie4Votes) + 1
        $("#movieVotes4").text(movie4Votes)
    } else if ($("#heroMovieRadio5").is(":checked")) {
        movie5Votes = parseInt(movie5Votes) + 1
        $("#movieVotes5").text(movie5Votes)
    }

    event.preventDefault();
});

$("#search-form").submit(function (event) {

    if ($("#search-box").val() == "") {      // if search bix is empty and user clicks on submit then nothing happens

    } else if ($("#search-box").val().toLowerCase() == "wolverine") {       // covert the Wolverine in lowercase and show the alert
        alert("Wolverine is awesome")
    } else {
        alert("Your search for " + $("#search-box").val() + " returned 0 results. Try something else.") // alert if search is not wolverine
    }

    event.preventDefault();
});

$("#form-login").submit(function (event) {
    $("#login-alert").addClass("hide")

    if ($("#loginEmail").val() == "" || $("#loginPassword").val() == "") {
        $("#login-alert").removeClass("hide")
    } else {
        if ($("#rememberLoginChk").is(":checked")) {
            var email = $("#loginEmail").text()
            var password = $("#loginPassword").text()
        } else {
            $("#loginEmail").val("")
            $("#loginPassword").val("")

        }
        $("#overlay").addClass("hide")
    }
    event.preventDefault();
});

function logout() {
    $("#overlay").removeClass("hide")
    $("#loginEmail").val(email)
    $("#loginPassword").val(password)
};
