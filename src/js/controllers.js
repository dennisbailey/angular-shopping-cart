app.controller('mainController', ['$scope', 'shoppingCartServices', function($scope, shoppingCartServices) {
  
  // Default values
  $scope.categories = shoppingCartServices.categories;
  $scope.quantities = [1,2,3,4,5,6,7,8,9,10];
  $scope.shoppingCartCount = 0;
  
  // Accces the inventory
  $scope.inventory = inventory;
  
  // Update the shopping cart based on the total quantity of items
  $scope.shoppingCartCountUpdate = function () {
    $scope.shoppingCartCount = shoppingCartServices.shoppingCart.reduce(function(prev, curr) {
      return prev + curr.quantity;
    }, 0);
  };
  
  // Function to update the filter if the user selects a category filter
  $scope.categoryFilter = function(category) {
    $scope.categorySearch = category;
  };
  
  // Function to add items to the cart
  $scope.addToCart = function(tea, price, quantity) {
    shoppingCartServices.addToCart(tea, price, quantity);
  };
  
  // Invoke the function to prepopulate the categories filter dropdown
  shoppingCartServices.findCategories(inventory);
  
  // Invoke the shopping cart count function to accurately reflect seed data
  $scope.shoppingCartCountUpdate();

}]);

app.controller('checkoutController', ['$scope', 'shoppingCartServices', function($scope, shoppingCartServices) {
  // Get the cart from the service
  $scope.cart = shoppingCartServices.shoppingCart;
  
  $scope.hide = true;
  
  $scope.details = shoppingCartServices.details;
  
  $scope.showMore = function(tea){
    shoppingCartServices.findDetails(tea);
    $scope.details = shoppingCartServices.details;
    $scope.hide = false;
  };
  
  // Function to update the Grand Total
  $scope.getTotal = function() {
    $scope.total = shoppingCartServices.getTotal();
  };
  
  // Function to call the increment service
  // Update the total after incrementing
  $scope.increment = function(direction, position) {
    shoppingCartServices.increment(direction, position);
    $scope.getTotal();
  };
  
  // Function to remove an item from the shopping cart
  $scope.remove = function(item) {
    shoppingCartServices.removeFromCart(item);
    $scope.getTotal();
  };
  
  // Invoke the function to generate the Grand Total on page load
  $scope.getTotal();

}]);