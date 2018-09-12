
  

    var queryURL = "https://corsbridge.herokuapp.com/https%3A%2F%2Fmaps.googleapis.com%2Fmaps%2Fapi%2Fplace%2Ftextsearch%2Fxml%3Fquery%3Drestaurants%2Bin%2BTucson%2Bvegetarian%26key%3DAIzaSyCZnAdbKTT8Gcws8MtgoYM3SfAmhkZe_wk";

    // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        console.log(response)
      
    });

