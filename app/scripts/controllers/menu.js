'use strict';

/**
 * @ngdoc function
 * @name udaciMealsApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the udaciMealsApp
 */
angular.module('udaciMealsApp')
  .controller('MenuCtrl', function () {
  	// this.id = 'strawberry-pudding';
  	// this.name = 'strawberry Pudding';
  	// this.img = 'strawberry-pudding.jpg';
  	// this.rating = 3.8;

  	this.items = [
	  	{
	  		id: "chicken-pomegranate-salad",
	  		name: "Chicken Pomegranate Salad",
	  		img: "chicken-pomegranate-salad.jpg",
	  		calories: 430,
	  		rating: 4.1
	  	},
	  	{
	  		id: "cstrawberry-pudding",
	  		name: "strawberry Pudding",
	  		img: "strawberry-pudding.jpg",
	  		calories: 280,
	  		rating: 5
	  	},
	  	{
	  		id: "ham-goat-cheese-croissant",
	  		name: "Ham and Goat Cheese Croissant",
	  		img: "ham-goat-cheese-croissant.jpg",
	  		calories: 670,
	  		rating: 3.9
	  	}
  	];

  	this.increment = function(item) {
  		item.rating = ((item.rating * 10) + 1) / 10;
  	};

  	this.decrement = function(item) {
  		item.rating = ((item.rating *10) - 1) / 10;
  	}
  });
