app.factory('shoppingCartServices', function () {
  
  return { 
    
    items : inventory,
    
    categories : [],
    
    details : [],
    
    shoppingCart : [{price: 1540, quantity: 1, name: "Bayard stew"}, {price: 4991, quantity: 3, name: "Flexner white tea"}, {price: 2445,
quantity: 7, name: "Flexner veggie tea"}],
    
    // *** Checkout Page Services *** //
    
    // Function to return the grand total of all of the items in the shopping cart
    getTotal : function() {
      return this.shoppingCart.reduce(function (prev, curr){
        return prev + curr.quantity * curr.price;
      }, 0);
    },
    
    // Function to update the quantity in the cart
    increment : function(direction, position) {
      if (direction === 'up') {
        this.shoppingCart[position].quantity = this.shoppingCart[position].quantity + 1;
      } else if (direction === 'down') {
        this.shoppingCart[position].quantity = this.shoppingCart[position].quantity - 1;
      }
    },
    
    // Function to find an item in the cart and remove it
    removeFromCart : function(item) {
      // Find the index of the item selected for removal
      var index = this.shoppingCart.some(function(element, index){
        if (element.name == item){ return index; }
      });
      // Remove the item from the cart
      this.shoppingCart.splice(index,1);
    },
    
    // Function to find more info for the checkout page
    findDetails : function(tea) {
      this.details.pop();
      var position;
      
      this.items.some(function(element, index) {
        if (element.name === tea){ position = index; return index; }
      });
      this.details.push(this.items[position]);
    },
    
    // *** Inventory Page Services *** //
    
    // Function to add items to the cart and store them in an array
    addToCart : function (tea, price, quantity) {
      //Check and see if the item is already in the cart
      var position = -1;
      this.shoppingCart.forEach(function(element, index){
        if (element.name === tea){ position = index; }
      });

      // If this tea isn't already in the cart, add it to the cart
      // If the tea is already in the cart, update the quantity
      if (position === -1) {
        var obj = {name : tea, price : price, quantity : quantity};
        this.shoppingCart.push(obj);
      } else if (position >= 0) {
        this.shoppingCart[position].quantity = this.shoppingCart[position].quantity + quantity;
      }
      
    },
        
    // Create a unique list of categories from the data
    findCategories : function(inventory) {      
      var self = this;
      // Loop through the data and find the categories
      inventory.forEach(function(el){
      	el.categories.forEach(function(element){
        	// Push unique categories to the categories array
      		if(self.categories.indexOf(element) == -1) {
      			 self.categories.push(element);
      		}
      	});
      });        
    }
    
  };

});