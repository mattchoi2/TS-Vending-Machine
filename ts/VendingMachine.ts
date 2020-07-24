/// <reference path="./Product.ts" />

import * as Coins from "./Coin";

export enum VendingMachineSize { // Enumerable, this is a new type will help us determine how many cells are in a VM 
  // This allows for contraint in the list of preset sizes (only 6, 9, and 12)
  // Makes the code more maintainable, all references of large can be changed here (1 location)
  // Adds readability to code
  small = 6,
  med = 9,
  large = 12
}

class Cell {
  constructor(public product: Product) {
    // Keyword public makes the product variable a CLASS LEVEL property that is public, with the same name (product)
  }

  stock = ko.observable(3);
  sold = ko.observable(false); // Becomes true when stock is 0
}

export class VendingMachine {
  private paid = ko.observable(0); // This makes this property able to be data binded to an HTML element
    // Look in bootstrapper.ts to see how we connect bindings between HTML tags and TS objects

  public selectedCell = ko.observable(new Cell(new Initial()));
  public cells = ko.observableArray([]);
  // This conditional will rerun everytime ANY operator/field changes in value
  public canPay = ko.pureComputed(() => this.paid() - this.selectedCell().product.price >= 0);
  public acceptedCoins: Coins.Coin[] = [new Coins.Quarter(), new Coins.Dime(), new Coins.Nickel(), new Coins.Penny()];
    // This does not need to be the value of ko.observable()
    // because the UI will NOT update from array changes

  set size(givenSize: VendingMachineSize) {
    this.cells([]); // This will reset the value of the array to be empty

    for (let i = 0; i < givenSize; i++) {
      let product = ProductFactory.GetProduct();
      this.cells.push(new Cell(product));
    }
  }

  select = (cell: Cell): void => {
    cell.sold(false);
    this.selectedCell(cell);
  }

  acceptCoin = (coin: Coins.Coin): void => {
    // Because this is an arrow function, we don't need the "this" keyword
      // arrow functions ALWAYS refer this to the object the function is INSIDE of
    let oldTotal = this.paid();
    this.paid(oldTotal + coin.Value);
  }

  pay = (): void => {
    if (this.selectedCell().stock() < 1) {
      alert("Sorry we are out of " + this.selectedCell().product.name);
      return;
    }
    // Update the amount the user paid by deducting cost of product
    let currentPaid = this.paid();
    this.paid(Math.round(((currentPaid - this.selectedCell().product.price) * 100)) / 100);
    // Update the stock after purchase
    this.selectedCell().stock(this.selectedCell().stock() - 1);
    this.selectedCell().sold(true);
  }

  get Paid(): number {
    return this.paid();
  }
}

// Data Types

/*

  - boolean
  - string
  - number
  - any (this will use the opt-out )

  CUSTOM:
  - enum
  - array
  - interface
  - class

*/