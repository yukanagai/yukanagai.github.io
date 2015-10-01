 $(function() {

   $('button').click(function(event) {
     event.preventDefault();
     var city = $(".pure-input-rounded").val();
     var cityTemp = event.currentTarget.dataset.temp;

     $.ajax({
       url: "http://api.openweathermap.org/data/2.5/weather?q=" + city,
       method: 'GET',
       data: {temp: cityTemp},
       success: function(data, status, xhr) {
         console.log("Data successful", data.main);
         $('#forecast').text("In " + city + ", it's " + ((((data.main.temp - 273) * 1.8) + 32).toFixed(2)) + " degrees F");
       },
       error: function(xhr, status, error) {
         console.log("yikes", error);
       }
     });

    var bgimgs = [
      'https://images.unsplash.com/reserve/nLOrZieVR5OWjjIo11ZY_final11.jpg?q=80&fm=jpg&s=d167329f8b1c07812fea3500f84e4549', 
      'https://images.unsplash.com/photo-1421081177127-339f586c9b49?q=80&fm=jpg&s=36a427925803fdc3ba3038b6134d6372', 
      'https://unsplash.com/photos/gHtB1alGIWg/download'
      ];

    var randImg = bgimgs[Math.floor(Math.random()*bgimgs.length)];
    $('body').css({'background-image' : "url("randImg")")};

    });f
});



 // });