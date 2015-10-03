jQuery(function() {
  var addTaskButton = $("button"); // grabbing the button element
  var inputTask = $("#task"); // grabbing the input field with id task

  addTaskButton.on("click", function(event) {
    event.preventDefault();

    // Create new li + checkbox:
    var newTask = $("<li>");
    var checkbox = $("<input>", {type: "checkbox", class: "toggled-checked"});

    //  Grab the value of the input with the id `task`
    var theTask = inputTask.val();

    if (inputTask.val() == '') {
      alert("You didn't add anything!");
    } else {

    // Append the checkbox and the task into the <li> element
    newTask.append(checkbox);
    newTask.append(theTask);

    // Prepend the <li> with content into the ul
    $("#task-list").prepend(newTask);

    // Clear the <input type="text">
    inputTask.val("");

    // When a click occurs on a checkbox toggleClass did-it to apply a strike through style to the completed task
    checkbox.on('click', function() {
      newTask.toggleClass("did-it");
    });

    // random quotes:
    var quotes = new Array(
      "What you do today can improve all your tomorrows.  - Ralph Marston",
      "Always do your best. What you plant now, you will harvest later.  - Og Mandino",
      "With the new day comes new strength and new thoughts.  - Eleanor Roosevelt",
      "You are never too old to set another goal or to dream a new dream.  - C. S. Lewis",
      "It does not matter how slowly you go as long as you do not stop.  - Confucius",
      "The secret of getting ahead is getting started.  - Mark Twain",
      "We may encounter many defeats but we must not be defeated.  - Maya Angelou",
      "Start where you are. Use what you have. Do what you can.  - Arthur Ashe",
      "Keep your eyes on the stars, and your feet on the ground.  - Theodore Roosevelt",
      "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.  - Samuel Beckett",
      "The key is to keep company only with people who uplift you, whose presence calls forth your best.  - Epictetus",
      "Setting goals is the first step in turning the invisible into the visible.  - Tony Robbins",
      "If you wish to travel far and fast, travel light. Take off all your envies, jealousies, unforgiveness, selfishness, and fears."
    );
    
    random = quotes[Math.floor(Math.random() * quotes.length )];
    $('#quote').text(random);

  };

  // Add an event listener for the keydown event on the <input type="text" id="task">
  // which is currently stored in the inputTask variable
  inputTask.on('keydown', function(event) {

    // Check if event is 49, which is equivalent to the key `1`
    if(event.which == 49) {

      // If it is key `1` then prevent the default behavior (printing `1` on screen)
      event.preventDefault();

      // Simulate button click which will run all the necessary code to add a new
      // task item to the list.
      addTaskButton.click();
    }
  });
  });


});