/// <reference path="ProductCategory.ts" />

// In an interface, everything MUST be implemented that is mentioned in the interface
// REMEMBER: Child can implement MULTIPLE interfaces, but can only inherit ONE parent
interface Product { // Implementations CANNOT exist in an interface
  name: string;
  price: number;
  category?: ProductCategory; // If a field has a ? after it, the implementation is optional
}

class Initial implements Product {
  name = "Please sleect a product";
  price = 0;
  // Remember that Product allows for options category, which this default product will not have
}

class CocaCola implements Product {
  name = "Coca-Cola";
  price = 2.30;
  category = new SodaCategory();
}

class LaysPotatoChips implements Product {
  name = "Lays Potato Chips";
  price = 1.50;
  category = new ChipsCategory();
}

class HersheyBar implements Product {
  name = "Hershey Chocolate Bar";
  price = 2.00;
  category = new CandyCategory();
}