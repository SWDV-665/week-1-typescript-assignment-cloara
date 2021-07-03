class Grocery {
    name : string;
    quantity : number;

    constructor(name : string, quantity : number) {
        this.name = name;
        this.quantity = quantity;
    }

    getName() : string {
        return this.name;
    }

    getQuantity() : number {
        return this.quantity;
    }
}
let grocery_one = new Grocery('milk', 1);
let grocery_two = new Grocery('bread', 7);
let grocery_three = new Grocery('egg', 12);
let grocery_list: Array<Grocery> = [grocery_one, grocery_two, grocery_three ];
document.body.innerHTML = grocery_list[0].getName() + " " + grocery_list[0].getQuantity().toString() 
                          + " and " + grocery_list[1].getName() + " " + grocery_list[1].getQuantity().toString()
                          + " and " + grocery_list[2].getName() + " " + grocery_list[2].getQuantity().toString();
