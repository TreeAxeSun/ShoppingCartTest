describe('shoppingCart', () =>{
        
    it('should add an item', () =>{
        let shoppingCart = new ShoppingCart();
        let apple ={name: "Apple", itemId: 1, price: 3.00};
        let banana = {name: "Banana", itemId: 2, price: 5.00};
        
        shoppingCart.scan(apple);
        shoppingCart.scan(banana);

        expect(shoppingCart.items()).toEqual([apple, banana])
    });

    it('should return that the "Your cart is full, when items are five in your cart and you try to add an item.', () =>{
        let shoppingCart = new ShoppingCart();
        
        shoppingCart.scan(apple = {name: "Apple", itemId: 1, price: 3.00});
        shoppingCart.scan(banana = {name: "Banana", itemId: 2, price: 5.00});
        shoppingCart.scan(mango = {name: "Mango", itemId: 3, price: 7.00});
        shoppingCart.scan(pear = {name: "Pear", itemId: 4, price: 6.00});
        shoppingCart.scan(tomato = {name: "Tomato", itemId: 5, price: 4.00});
        shoppingCart.scan(melon = {name: "Melon", itemId: 6, price: 8.00});
      
        expect(shoppingCart.items()).toBe("Your cart is full");
    });

  
    it('should remove an item.', () =>{
        let shoppingCart = new ShoppingCart();
        let apple ={name: "Apple", itemId: 1, price: 3.00};
        let banana = {name: "Banana", itemId: 2, price: 5.00};

        shoppingCart.scan(apple);
        shoppingCart.scan(banana);
        shoppingCart.remove(0);
        shoppingCart.remove(0);
        expect(shoppingCart.items()).toEqual([]);
    });

    it('should return that the "Your cart is empty", when your cart is empty and you try to remove an item.', () =>{
        let shoppingCart = new ShoppingCart();
        let apple ={name: "Apple", itemId: 1, price: 3.00};
        let banana = {name: "Banana", itemId: 2, price: 5.00};
        let mango = {name: "Mango", itemId: 3, price: 7.00};

        shoppingCart.scan(apple);
        shoppingCart.scan(banana);
        shoppingCart.scan(mango);
        shoppingCart.remove(2);
        shoppingCart.remove(0);
        shoppingCart.remove(0);
        shoppingCart.remove(0);
        expect(shoppingCart.items()).toBe("Your cart is empty");
    });

    it('should return total price after discount', () =>{
        let shoppingCart = new ShoppingCart();
        let apple ={name: "Apple", itemId: 1, price: 3.00};
        let banana = {name: "Banana", itemId: 2, price: 5.00};
        let mango = {name: "Mango", itemId: 3, price: 7.00};

        shoppingCart.scan(apple);
        shoppingCart.scan(banana);
        shoppingCart.scan(mango);
        shoppingCart.discount(10);
        expect(shoppingCart.total()).toBe(13.5);
    });

    it('should return total price after discount 50%', () =>{
        let shoppingCart = new ShoppingCart();
        let apple ={name: "Apple", itemId: 1, price: 3.00};
        let banana = {name: "Banana", itemId: 2, price: 5.00};
        let mango = {name: "Mango", itemId: 3, price: 7.00};

        shoppingCart.scan(apple);
        shoppingCart.scan(banana);
        shoppingCart.scan(mango);
        shoppingCart.discount(50);
        expect(shoppingCart.total()).toBe(7.5);
    });

    it('should return total price that discount only 50%, even though you attempt to discount items more than 50%.', () =>{
        let shoppingCart = new ShoppingCart();
        let apple ={name: "Apple", itemId: 1, price: 3.00};
        let banana = {name: "Banana", itemId: 2, price: 5.00};
        let mango = {name: "Mango", itemId: 3, price: 7.00};

        shoppingCart.scan(apple);
        shoppingCart.scan(banana);
        shoppingCart.scan(mango);
        shoppingCart.discount(70);
        expect(shoppingCart.total()).toBe(7.5);
    });
});