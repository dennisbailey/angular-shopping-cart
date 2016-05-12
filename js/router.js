app.config(function($routeProvider) 
// $locationProvider) 
{
    $routeProvider
      .when('/', {
        templateUrl: '../partials/main.html',
        controller: 'mainController'
      })
      
      .when('/checkout', {
        templateUrl: '../partials/checkout.html',
        controller: 'checkoutController'
      })
      
      .otherwise('/');
      
    // use the HTML5 History API
//     $locationProvider.html5Mode(true);
});
