class ShoppingCart {
    constructor() {
        this.products = [];
        this.totalPrice = 0;
    }

    scan(obj) {
        if (this.products.length < 5) {
            this.products.push(obj);
        } else {
            this.products = "Your cart is full";
        }
    }

    remove(number) {
        if (this.products.length > 0) {
            this.products.splice(number, 1);
            //this.products.pop();
        } else {
            this.products = "Your cart is empty";
        }
    }

    discount(number) {
        if (number > 0 && number <= 50 ) {
            let sum = 0;
            for (let i = 0; i < this.products.length; i++) {
                sum = sum + this.products[i].price;
            }
            this.totalPrice = sum - (sum *(number/100));
        }else if(number > 50){
            let sum = 0;
            for (let i = 0; i < this.products.length; i++) {
                sum = sum + this.products[i].price;
            }
            this.totalPrice = sum - (sum *(50/100));
        }
    }

    total() {
        return this.totalPrice;
    }
    
    items() {
        return this.products;
    }
}
