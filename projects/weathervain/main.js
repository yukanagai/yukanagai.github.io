 $(function() {

  $('#city').keypress(function(event) {
    if (event.which === 13) {
      event.preventDefault();
      var selectedCity = $('#city').val();
      var cityTemp = event.currentTarget.dataset.temp;

      $.ajax({
       url: "http://api.openweathermap.org/data/2.5/weather?q=" + selectedCity,
       method: 'GET',
       data: {temp: cityTemp},
       success: function(data, status, xhr) {
         console.log("Data successful", data.main);
         $('#forecast').text("In " + selectedCity + ", it's " + Math.round(((((data.main.temp - 273) * 1.8) + 32).toFixed(2))) + " degrees F");
       },
       error: function(xhr, status, error) {
         console.log("yikes", error);
       }
      });
    };
  });
      var now = moment().format("dddd, MMMM Do, YYYY, h:MM A");
    $('#date').append(now);
 });

