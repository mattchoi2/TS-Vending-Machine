/// <reference path="./Product.ts" />


class ProductFactory {
  static GetProduct(): Product { // This allows for 
    let rand = Math.floor(Math.random() * 3);
    switch(rand) {
      case 0: return new CocaCola();
      case 1: return new LaysPotatoChips();
      case 2: return new HersheyBar();
    }
  }
}