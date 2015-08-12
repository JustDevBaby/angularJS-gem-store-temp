(function () {
'use strict';

// Declare app level module which depends on views, and components
 var app = angular.module('gemStore', [ 'store-products' ]);



//CONTROLLERS
app.controller('StoreController',  function(){
    this.products = gems;
    
    
  });
    
app.controller('ReviewController', function(){
  this.review = {};
    
  this.addReview = function(product) {
    this.review.createdOn = Date.now();
    product.reviews.push(this.review);

    this.review = {};
  };
});
    
app.directive('productDescription', function(){
     return {
        restrict: 'E',
        templateUrl: 'product-description.html'
    };   
});

    //CUSTOM DIRECTIVES
    app.directive("productReviews", function() {
        return {
          restrict: 'E',
          templateUrl: "product-reviews.html"
        };
    });

    app.directive("productSpecs", function() {
        return {
          restrict:"A",
          templateUrl: "product-specs.html"
        };
    });


    
  var gems = [
    { name: 'Azurite', 
      price: 110.50,
      description: 'Excellent',
      shine: 9,
      rarity: 6,
      color: 'Purple',
      face: 12,
      images: [
          
             'gem-01-full.jpg'
            
          ],
      reviews: [
          {
            stars: 5,
            body: "I love this product!",
            author: "joe@thomas.com",
            createdOn: 1397490980837
          },
          {
            stars: 1,
            body: "This product sucks",
            author: "tim@hater.com",
            createdOn: 1397490980837
          },
      ]
    },{ 
        name: 'Bloodstone',
        price: 22.90,
        description: 'Very Good',
        shine: 9,
        rarity: 6,
        color: 'Purple',
        face: 12,
        images: [
            
             'gem-01-full.jpg'
             
        ]
    },{
        name: 'Zircon', price: 1100,
        price: 22.90,
        description: '. . .',
        shine: 9,
        rarity: 6,
        color: '#Purple',
        face: 12,
        images: [
             'gem-01-full.jpg'
            
        ],
        reviews: [{
        stars: 3,
        body: "I think this gem was just OK, could honestly use more shine, IMO.",
        author: "JimmyDean@example.org"
      }, {
        stars: 4,
        body: "Any gem with 12 faces is for me!",
        author: "gemsRock@example.org"
      }]
    },{
        name: 'Zircon',
        description: "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
        shine: 70,
        price: 1100,
        rarity: 2,
        color: 'Purple',
        faces: 6,
        images: [
          'gem-01-full.jpg'
         
        ],
        reviews: [{
          stars: 1,
          body: "This gem is WAY too expensive for its rarity value.",
          author: "turtleguyy@example.org"
        }, {
          stars: 1,
          body: "BBW: High Shine != High Quality.",
          author: "LouisW407@example.org"
        }, {
          stars: 1,
          body: "Don't waste your rubles!",
          author: "nat@example.org"
        }]
    }
  ];





   
 
     
    
}());
