
// Namespaces are good to prevent overlapping naming of classes in the global namespace
// Larger projects would use this
// Keyword "export" before all the classes in the namespace make them referenceable outside this namespace
export abstract class Coin { // You can no longer instantiate this class with keyword ABSTRACT

  constructor(protected value: number) { // Works like private - only accessible within the class AND children
    // Private are NOT available in children
    this.value = value;
  }
  abstract get ImageUrl(): string

  public get Value() { // So the VendingMachine class can access this
    return this.value;
  }
}

// This is inheritance, which takes all non-private fields/functions from the parent
export class Quarter extends Coin {
  constructor() {
    super(0.25); // Calls the parent constructor, as we called constructor() from the child
    // This can be used for other methods implemented in the parent
    // Ex: super.parentMethod();
  }

  get ImageUrl(): string {
    return "assets/quarter.png";
  }

  get Value(): number { // When called, the get keyword will allow the call to omit parenthesis
    return this.value; // Ex call: myCoin.Value;
  }
}

export class Dime extends Coin {
  constructor() {
    super(0.10);
  }

  get Value() {
    return this.value;
  }

  get ImageUrl(): string {
    return "assets/dime.png";
  }
}

export class Nickel extends Coin {
  constructor() {
    super(0.05);
  }

  get Value() {
    return this.value;
  }

  get ImageUrl(): string {
    return "assets/nickel.png";
  }
}

export class Penny extends Coin {
  constructor() {
    super(0.01);
  }

  get Value() {
    return this.value;
  }

  get ImageUrl(): string {
    return "assets/penny.png";
  }
}
