

var newsLinks = ['<a href="https://www.foodnetwork.com/restaurants/az/tucson/renees-organic-oven-restaurant">Food Network</a>' 
+ '<br><a href="https://www.tucsonweekly.com/TheRange/archives/2015/03/02/check-out-the-new-breakfast-menu-at-renees-organic-oven">Tucson Weekly</a>' 
+ '<br><a href="https://tucsonfoodie.com/2016/08/10/happy-hour-of-the-week-renees-organic-oven/">Tucson Foodie</a>' 
+ '<br><a href="http://ediblebajaarizona.com/renees-organic-oven">Edible Baja Arizona Magazine</a>' 
+ '<br><a href="https://www.insidetucsonbusiness.com/on_the_menu/renee-s-organic-oven-brings-breakfast-pizza-to-tucson/article_2f7265ea-c9b3-11e4-a2cd-8b0db898802b.html">Inside Tucson Business</a>']   
$("#run-search").on("click", function(event) {
     // event.preventDefault();
    
       
// $("#search-restaurant").on("click", function(event) {
//        // event.preventDefault();
//         // This line grabs the input from the textbox
//         var searchResults = 0
//         //$("#restaurant-input").val().trim();
// console.log(searchResults);
// var newsLinks = ['<a href="https://www.foodnetwork.com/restaurants/az/tucson/renees-organic-oven-restaurant">Food Network</a>']
 });

        
       $("#article-section").append(newsLinks);
       $( "#article-section" ).append();
        
// var queryURL = "https://contextualwebsearch-news-search-v1.p.mashape.com/api/Search/NewsSearchAPIWithPagination?q&count=5&" + searchResults + "GHH12Fn5aXmshTrY5Eu95PwcR6AYp1t6OqGjsn1tCzqGRaLi1P"
// $.ajax({
//           url: queryURL,
//           method: "GET",
//           headers: {
//             "X-Mashape-Key": "GHH12Fn5aXmshTrY5Eu95PwcR6AYp1t6OqGjsn1tCzqGRaLi1P"
//           }
//         }).then(function(response) {
//             console.log(response)
//             var list = $("<ul></ul>");
//             for (var i = 0; i <response.length; i++){
//                 console.log(response[i].title)
//                 var urlItem = $("<li></li>");
//                 var aTag = $('<a>');
//                 aTag.attr(response[i].url);
//                 aTag.html(response[i].title);
//                 urlItem.append(aTag);
//                 list.append(urlItem);
//             }
//             $('body').append(list);
//         });
   
