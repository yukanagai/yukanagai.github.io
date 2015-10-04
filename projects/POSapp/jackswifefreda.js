jQuery(function() {

	// MENU ITEMS

	var menuItems = {
		breakfast: [
			{name: "Soft Boiled Eggs with Sliders", price: 7},
			{name: "Grapefruit and Yogurt", price: 8},
			{name: "Rosewater Waffle", price: 10},
			{name: "Madame Freda", price: 13},
			{name: "Green Shakshuka", price: 12},
			{name: "Mediterranean Breakfast", price: 13},
			{name: "Poached Eggs with Tomato", price: 12},
			{name: "Jack's Breakfast", price: 19},
			{name: "Toasted Baguette", price: 5}
		],

		sides: [
			{name: "Couscous", price: 6},
			{name: "French Fries", price: 6},
			{name: "Chopped Salad", price: 6},
			{name: "Arugula Salad", price: 6}
		],

		entrees: [
			{name: "Chicken Kebab", price: 13},
			{name: "Fish a la Plancha", price: 17},
			{name: "Mustard Seed Crusted Tofu", price: 13},
			{name: "Freda's Matzo Ball Soup", price: 7}
		],

		dessert: [
			{name: "Flourless Chipotle Chocolate Cake", price: 7},
			{name: "Baked Fruit Crips", price: 7},
			{name: "Homemade Spiced Cheesecake", price: 7},
			{name: "Malva Pudding", price: 7}
		],

		drinks: [
			{name: "Mint Lemonade", price: 5},
			{name: "Fresh Cantaloupe Juice", price: 5},
			{name: "Bottomless Drip Coffee", price: 3},
			{name: "Espresso", price: 3},
			{name: "Au Lait", price: 3.5},
			{name: "Latte", price: 4},
			{name: "Cappucino", price: 4},
			{name: "Cold Brew", price: 3.5},
			{name: "Nana Tea", price: 4}
		]
	};


//==========================================================

	// CREATING BUTTONS FOR MENU CATEGORIES

	var menuCategories = $('.menuCategories');
	var ulMenu = $('<ul></ul>');
	var liMenu = $('<li></li>');

	for(var category in menuItems) {
		var newButton = $('<button>').append(category);
		liMenu.append(newButton);
		ulMenu.append(liMenu);
		menuCategories.append(ulMenu);
	}


	// DISPLAY ONLY ACTIVE MENU CATEGORY WHEN CLICKED 

	$('.menuCategories ul li button').click(function() {
	    $('.menuItemsHide').hide("slow");
	});


	// CREATING BUTTONS FOR EACH MENU CATEOGRY, AND APPENDING CORRESPONDING ITEMS TO THE BUTTON

	var breakfastButton = $('.menuCategories button:nth-child(1)');
	var breakfastUL = $('<ul>');

	for(var breakfastItem in menuItems.breakfast) {	
		var breakfastLI = $('<li>');
		var breakfastName = $('<span class="name">');
		var breakfastPrice = $('<span class="price">');

	// Split each menu item LI's into <span name> + <span price>

		breakfastName.text(menuItems.breakfast[breakfastItem].name);
		breakfastPrice.text(menuItems.breakfast[breakfastItem].price);
		breakfastLI.append(breakfastName).append(breakfastPrice);
		breakfastUL.append(breakfastLI);
	}
		menuCategories.append(breakfastUL);


	// HIDE THE ITEMS LISTS 

	breakfastUL.addClass('menuItemsHide').addClass('breakfast');

	// SHOW THE ITEMS LIST ONLY WHEN IT'S CLICKED ON

	breakfastButton.on('click', function() {
		breakfastUL.toggle(function() {
		});
	});


	// ADD EACH MENU (BREAKFAST) ITEM TO RECEIPT WHEN SELECTED 

	var receipt = $('.rightColumn .receipt');
	var receiptUL = $('<ul>').attr('id', 'receiptUL'); 
	receipt.append(receiptUL); 	

	$('.breakfast > li').on('click', function() { 
		$(this).clone().appendTo($('#receiptUL'));

	// fires the cal function everytime item gets added to the receipt
		calculate();
	});
	 

//==========================================================

	// Automatically clear current receipt when an order has been saved

	var clearReceipt = function() {

		// Clear receipt items
		$('#receiptUL > li > span').parent().remove();

		// Clear calulator inputs
		$("#calculations")[0].reset();
	}

// =========================================================


	// DELETE RECEIPT ITEMS when clicked on
	// + recalculate the final total

	var deletingItems = function() { 
		$(document).on('click', "#receiptUL > li", function() { 
		$(this).remove();
		calculate();
		}); 
	};

//==========================================================


	// THE CALCULATOR

	var calculate = function() {

		deletingItems();

		// Grabbing the price from receipt UL
		var pricesArray = $("#receiptUL .price"); 

		// Creating a new array	
		var calPrice = [];

		// Looping through the array.. use eq(i) for jQuery
		for(var i=0; i<pricesArray.length; i++) {
			var prices = parseFloat(pricesArray[i].textContent);
			calPrice.push(prices);
		}
		
		// Adding the sum of the entire array to get Total	
		var sumBeforeTotal = 0;
		for (i = 0;i<calPrice.length;i++) {
			sumBeforeTotal += calPrice[i];
		}

		// TOTAL BEFORE TAX
		$('#totalBeforeTax').val("$ " + sumBeforeTotal);

		// NYC SALES TAX (8%)
		var salesTax = sumBeforeTotal * 0.08875;
		var shorthandTax = salesTax.toFixed(2);
		$('#salesTax').val("$ " + shorthandTax);

		// TOTAL WITH TAX
   		var totalBeforeTax = $('#totalBeforeTax').val();
		var totalWithTax = totalBeforeTax + shorthandTax;

		// FINAL TOTAL WITH TIP OPTIONS
		$('#tip12').on('click', function(event) {
			event.preventDefault();
			var tipTotal = (sumBeforeTotal* 0.12);
			var finalTotal = sumBeforeTotal + tipTotal + salesTax;
			var stringTotal = finalTotal.toFixed(2);
			$('#finalTotal').val("$ " + stringTotal);
		});

		$('#tip15').on('click', function(event) {
			event.preventDefault();
			var tipTotal = (sumBeforeTotal* 0.15);
			var finalTotal = sumBeforeTotal + tipTotal + salesTax;
			var stringTotal = finalTotal.toFixed(2);
			$('#finalTotal').val("$ " + stringTotal);
		});

		$('#tip20').on('click', function(event) {
			event.preventDefault();
			var tipTotal = (sumBeforeTotal* 0.20);
			var finalTotal = sumBeforeTotal + tipTotal + salesTax;
			var finalTotalNumber = parseInt(sumBeforeTotal + tipTotal + salesTax);
			console.log(finalTotalNumber);
			var stringTotal = finalTotal.toFixed(2);
			$('#finalTotal').val("$ " + stringTotal);
		});


//==========================================================


	// CLEAR RECEIPT ITEMS OFF THE ORDER
	$('#clearButton').on('click', function() {
		$('#receiptUL > li > span').parent().remove();
		});
	};

	// ORDER FORM AUTOMATICALLY GETS RESET VIA HTML CODING


// ==========================================================

	/// TRACKING MULTIPLE ORDERS

	// Create an empty orders array that will hold all individual customer orders
	// Customer orders will be stored as an object with the data: name, items [], + price[]

	var saveOrder = $('#saveOrder');	
	var multipleOrders = $('.multipleOrders'); 	
	var orderListUL = $('<ul></ul>');
	var ordersArray = [];			

	// When user clicks "save order"... store  order into customer name buttons as an object:

	saveOrder.on('click', function() { 
		event.preventDefault();

	// Alert if customer's name on the order is empty!
		if ($('#customerName').val() === '') {
			alert("Please provide customer's name.");
			return false;
		} else {

	// grab customer name + append it to the new button
		var customerNameButton = $('<button></button>'); 
		var customerName = $('#customerName').val();	
		customerNameButton.append(customerName);		
		var orderListLI = $('<li></li>');	

	// add an indexed ID to each customer name LI 
	// that corresponds to their order in the ordersArray
		orderListLI.attr('id', ordersArray.length);	
	// add the Button to the LI > UL > div
		orderListLI.append(customerNameButton); 	
		orderListUL.append(orderListLI);
		multipleOrders.append(orderListUL); 			
		
	// create new object that includes customer name, items, + price
		var newObject = { name: customerName, 
						items: [], 
						price:[]
						};

	// push receipt items (price) into new Object
		$('#receiptUL li span.price').each(function () {
			var receiptPriceList = $(this).text();
			newObject.price.push(receiptPriceList);
		});

	// push receipt items (names) into new Object
		$('#receiptUL li span.name').each(function () {
			var receiptItemList = $(this).text();
			newObject.items.push(receiptItemList);
		});	

	// push new object (contains name, items, + price) 
	// into the  ordersArray
		ordersArray.push(newObject);
		console.log(newObject);
		console.log(ordersArray);

	// When a new order gets saved, fire the clear receipt function
		clearReceipt();

		}

	});

//==========================================================

	// CALLING THE TRACKED ORDER (NOT WORKING)

	$('.multipleOrders > ul > li > button').on('click', function() {
		for (var i=0; i<ordersArray.length; i++) {
			for (var name in ordersArray[i]) {
				if (ordersArray[i].name === $(this).text()) {
					
				};
			};
		};
	});

// ==========================================================


	// SIDES

	var sidesButton = $('.menuCategories button:nth-child(2)');
	var sidesUL = $('<ul></ul>');

	for(var sidesItem in menuItems.sides) {
		var sidesLI = $('<li></li>');
		var sidesName = $('<span class="name"></span>');
		var sidesPrice = $('<span class="price"></span>');

		sidesName.text(menuItems.sides[sidesItem].name);
		sidesPrice.text(menuItems.sides[sidesItem].price);
		sidesLI.append(sidesName).append(sidesPrice);
		sidesUL.append(sidesLI);
	}
		menuCategories.append(sidesUL);

	sidesUL.addClass('menuItemsHide').addClass('sides');

	sidesButton.on('click', function() {
		sidesUL.toggle(function() {
		});
	});

	$('.sides > li').on('click', function() { 
		$(this).clone().appendTo($('#receiptUL'));
		calculate();
	}); 


	// ENTREES

	var entreesButton = $('.menuCategories button:nth-child(3)');
	var entreesUL = $('<ul></ul>');

	for(var entreesItem in menuItems.entrees) {
		var entreesLI = $('<li></li>');
		var entreesName = $('<span class="name"></span>');
		var entreesPrice = $('<span class="price"></span>');

		entreesName.text(menuItems.entrees[entreesItem].name);
		entreesPrice.text(menuItems.entrees[entreesItem].price);
		entreesLI.append(entreesName).append(entreesPrice);
		entreesUL.append(entreesLI);
	}
	menuCategories.append(entreesUL);

	entreesUL.addClass('menuItemsHide').addClass('entrees');

	entreesButton.on('click', function() {
		entreesUL.toggle(function() {
		});
	});

	$('.entrees > li').on('click', function() { 
		$(this).clone().appendTo($('#receiptUL'));
		calculate();
	}); 


	// DESSERT

	var dessertButton = $('.menuCategories button:nth-child(4)');
	var dessertUL = $('<ul></ul>');

	for(var dessertItem in menuItems.dessert) {
		var dessertLI = $('<li></li>');
		var dessertName = $('<span class="name"></span>');
		var dessertPrice = $('<span class="price"></span>');

		dessertName.text(menuItems.dessert[dessertItem].name);
		dessertPrice.text(menuItems.dessert[dessertItem].price);
		dessertLI.append(dessertName).append(dessertPrice);
		dessertUL.append(dessertLI);
	}
		menuCategories.append(dessertUL);

	dessertUL.addClass('menuItemsHide').addClass('dessert');

	dessertButton.on('click', function() {
		dessertUL.toggle(function() {
		});
	});

	$('.dessert > li').on('click', function() { 
		$(this).clone().appendTo($('#receiptUL'));
		calculate();
	}); 


	// DRINKS

	var drinksButton = $('.menuCategories button:nth-child(5)');
	var drinksUL = $('<ul></ul>');

	for(var drinksItem in menuItems.drinks) {
		var drinksLI = $('<li></li>');
		var drinksName = $('<span class="name"></span>');
		var drinksPrice = $('<span class="price"></span>');

		drinksName.text(menuItems.drinks[drinksItem].name);
		drinksPrice.text(menuItems.drinks[drinksItem].price);
		drinksLI.append(drinksName).append(drinksPrice);
		drinksUL.append(drinksLI);
	}

	menuCategories.append(drinksUL);

	drinksUL.addClass('menuItemsHide').addClass('drinks');

	drinksButton.on('click', function() {
		drinksUL.toggle(function() {
		});
	});

	$('.drinks > li').on('click', function() { 
		$(this).clone().appendTo($('#receiptUL'));	
		calculate();
	}); 

});

