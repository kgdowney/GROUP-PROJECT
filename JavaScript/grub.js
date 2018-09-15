$("#run-search").on("click", function(event) {
      
      var newsLinks = ['<a href="https://www.foodnetwork.com/restaurants/az/tucson/renees-organic-oven-restaurant">Food Network</a>'
      + '<br><a href="https://www.tucsonweekly.com/TheRange/archives/2015/03/02/check-out-the-new-breakfast-menu-at-renees-organic-oven">Tucson Weekly</a>'
      + '<br><a href="https://tucsonfoodie.com/2016/08/10/happy-hour-of-the-week-renees-organic-oven/">Tucson Foodie</a>'
      + '<br><a href="http://ediblebajaarizona.com/renees-organic-oven">Edible Baja Arizona Magazine</a>'
      + '<br><a href="https://www.insidetucsonbusiness.com/on_the_menu/renee-s-organic-oven-brings-breakfast-pizza-to-tucson/article_2f7265ea-c9b3-11e4-a2cd-8b0db898802b.html">Inside Tucson Business</a>']
  
  $(".card-body").append(newsLinks);
  });