
abstract class ProductCategory { 
  protected imgPath = "assets/";
  name: string;
  abstract get ImageUrl(): string;
}

class SodaCategory extends ProductCategory {
  name = "Soda";
  get ImageUrl(): string {
    return this.imgPath + "soda.png";
  }
}

class ChipsCategory extends ProductCategory {
  name = "Potato Chips";

  get ImageUrl(): string {
    return this.imgPath + "chips.png";
  }
}

class CandyCategory extends ProductCategory {
  name = "Candy Bar";

  get ImageUrl(): string {
    return this.imgPath + "candy.png";
  }
}