var Grocery = /** @class */ (function () {
    function Grocery(name, quantity) {
        this.name = name;
        this.quantity = quantity;
    }
    Grocery.prototype.getName = function () {
        return this.name;
    };
    Grocery.prototype.getQuantity = function () {
        return this.quantity;
    };
    return Grocery;
}());
var grocery_one = new Grocery('milk', 1);
var grocery_two = new Grocery('bread', 7);
var grocery_three = new Grocery('egg', 12);
var grocery_list = [grocery_one, grocery_two, grocery_three];
document.body.innerHTML = grocery_list[0].getName() + " " + grocery_list[0].getQuantity().toString()
    + " and " + grocery_list[1].getName() + " " + grocery_list[1].getQuantity().toString()
    + " and " + grocery_list[2].getName() + " " + grocery_list[2].getQuantity().toString();
