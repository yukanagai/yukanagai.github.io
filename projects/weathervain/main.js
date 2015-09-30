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


   });



 });