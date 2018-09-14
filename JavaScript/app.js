
    var restaurants = [];
    
    function displayRestaurantInfo() {

    var city = $(this).attr("data-name");    
    var queryURL = "https://corsbridge.herokuapp.com/https%3A%2F%2Fmaps.googleapis.com%2Fmaps%2Fapi%2Fplace%2Ftextsearch%2Fxml%3Fquery%3Drestaurants%2Bin%2BTucson%2Bvegetarian%26key%3DAIzaSyCZnAdbKTT8Gcws8MtgoYM3SfAmhkZe_wk";

    // AJAX call with user search city 
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        console.log(response)
 
        var  restaurantDiv = $("<div class='restaurant'>");
 
        var name = response.name
        console.log(name);
 
        var pOne = $("<p>").text("Name: " + name);
 
        var address = response.formatted_address;
 
        var pTwo = $("<p>").text("Address: " + address);
 
        var rating = response.rating;
 
        var pThree = $("<p>").text("Rating: " + rating);
 
        var price = response.price_level;
 
        var pFour= $("<p>").text("Price Level: " + price);
 
    });

}

    $("#search-input").on("click", function(event) {
        event.preventDefault();
        // This line grabs the input from the textbox
        var cityName = $("#search-input").val().trim();

        // Adding city from the textbox to our array
        restaurants.push(cityName);

      });

    //   // Adding a click event listener to all elements with a class of "movie-btn"
    // $(document).on("click", displayRestaurantInfo);