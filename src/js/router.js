app.config(function($routeProvider) {
    
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main.html',
        controller: 'mainController'
      })
      
      .when('/checkout', {
        templateUrl: 'partials/checkout.html',
        controller: 'checkoutController'
      })
      
      .otherwise('/');
      
});
