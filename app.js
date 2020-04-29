$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "https://randomuser.me/api/?nat=gb",
        dataType: "json",

    }).then(function (response) {
        console.log(response);
        var image = response.results[0].picture.large
        var name = response.results[0].name.first + " " + response.results[0].name.last
        var user = response.results[0].login.username
        var city = response.results[0].location.city
        $("#pic").attr("src", image);
        $("#name").text(name);
        $("#userName").text(user);
        $("#city").text(city);

    })
})







    // < img src = "" alt = "" id = "pic" >
    //     <h1 id="name"></h1>
    //     <h1 id="userName"></h1>
    //     <p id="city"></p>