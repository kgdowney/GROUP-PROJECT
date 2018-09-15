    var restaurants = [];
    
    function displayRestaurantInfo(city) {

    //var city = $(this).attr("data-name"); 
    console.log(city)   
    var queryURL = "https://corsbridge.herokuapp.com/https%3A%2F%2Fmaps.googleapis.com%2Fmaps%2Fapi%2Fplace%2Ftextsearch%2Fjson%3Fquery%3Drestaurants%2Bin%2B"+city+"%2Bvegetarian%26key%3DAIzaSyCZnAdbKTT8Gcws8MtgoYM3SfAmhkZe_wk";
    // AJAX call with user search city 
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        console.log(response)
 
        var  restaurantDiv = $("<div class='restaurant'>");
        
        for (var i = 0; i <response.results.length; i++){
            var list =$("<ul></ul>");
            var nameItem =$("<li></li>");
            var addressItem =$("<li></li>");
            var ratingItem =$("<li></li>");
            var priceItem =$("<li></li>");            

            var name = response.results[i].name;
            nameItem.text(name).css("font-weight","Bold");
            list.append(nameItem);
            console.log(nameItem)            
            var address = response.results[i].formatted_address;
            addressItem.text(address);
            list.append(addressItem);
            var rating = response.results[i].rating;
            ratingItem.text("Rating: " + rating);
            list.append(ratingItem);
            var price = response.results[i].price_level;
            priceItem.text("Price Level: " + price);
            list.append(priceItem);
            
            $("#article-section").append(list);
        console.log(name)
            
        }     
 
    });

}

    $("#run-search").on("click", function(event) {
        event.preventDefault();
        
        // This line grabs the input from the textbox
        $( "#article-section" ).empty();
        var cityName = $("#search-input").val().trim();
        console.log(cityName)
        displayRestaurantInfo(cityName);
        // Adding city from the textbox to our array
        restaurants.push(cityName);


    });

   
     
