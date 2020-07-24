var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
System.register("Coin", [], function (exports_1, context_1) {
    "use strict";
    var Coin, Quarter, Dime, Nickel, Penny;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            // Namespaces are good to prevent overlapping naming of classes in the global namespace
            // Larger projects would use this
            // Keyword "export" before all the classes in the namespace make them referenceable outside this namespace
            Coin = /** @class */ (function () {
                function Coin(value) {
                    this.value = value;
                    // Private are NOT available in children
                    this.value = value;
                }
                Object.defineProperty(Coin.prototype, "Value", {
                    get: function () {
                        return this.value;
                    },
                    enumerable: true,
                    configurable: true
                });
                return Coin;
            }());
            exports_1("Coin", Coin);
            // This is inheritance, which takes all non-private fields/functions from the parent
            Quarter = /** @class */ (function (_super) {
                __extends(Quarter, _super);
                function Quarter() {
                    return _super.call(this, 0.25) || this;
                    // This can be used for other methods implemented in the parent
                    // Ex: super.parentMethod();
                }
                Object.defineProperty(Quarter.prototype, "ImageUrl", {
                    get: function () {
                        return "assets/quarter.png";
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Quarter.prototype, "Value", {
                    get: function () {
                        return this.value; // Ex call: myCoin.Value;
                    },
                    enumerable: true,
                    configurable: true
                });
                return Quarter;
            }(Coin));
            exports_1("Quarter", Quarter);
            Dime = /** @class */ (function (_super) {
                __extends(Dime, _super);
                function Dime() {
                    return _super.call(this, 0.10) || this;
                }
                Object.defineProperty(Dime.prototype, "Value", {
                    get: function () {
                        return this.value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Dime.prototype, "ImageUrl", {
                    get: function () {
                        return "assets/dime.png";
                    },
                    enumerable: true,
                    configurable: true
                });
                return Dime;
            }(Coin));
            exports_1("Dime", Dime);
            Nickel = /** @class */ (function (_super) {
                __extends(Nickel, _super);
                function Nickel() {
                    return _super.call(this, 0.05) || this;
                }
                Object.defineProperty(Nickel.prototype, "Value", {
                    get: function () {
                        return this.value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Nickel.prototype, "ImageUrl", {
                    get: function () {
                        return "assets/nickel.png";
                    },
                    enumerable: true,
                    configurable: true
                });
                return Nickel;
            }(Coin));
            exports_1("Nickel", Nickel);
            Penny = /** @class */ (function (_super) {
                __extends(Penny, _super);
                function Penny() {
                    return _super.call(this, 0.01) || this;
                }
                Object.defineProperty(Penny.prototype, "Value", {
                    get: function () {
                        return this.value;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(Penny.prototype, "ImageUrl", {
                    get: function () {
                        return "assets/penny.png";
                    },
                    enumerable: true,
                    configurable: true
                });
                return Penny;
            }(Coin));
            exports_1("Penny", Penny);
        }
    };
});
var ProductCategory = /** @class */ (function () {
    function ProductCategory() {
        this.imgPath = "assets/";
    }
    return ProductCategory;
}());
var SodaCategory = /** @class */ (function (_super) {
    __extends(SodaCategory, _super);
    function SodaCategory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Soda";
        return _this;
    }
    Object.defineProperty(SodaCategory.prototype, "ImageUrl", {
        get: function () {
            return this.imgPath + "soda.png";
        },
        enumerable: true,
        configurable: true
    });
    return SodaCategory;
}(ProductCategory));
var ChipsCategory = /** @class */ (function (_super) {
    __extends(ChipsCategory, _super);
    function ChipsCategory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Potato Chips";
        return _this;
    }
    Object.defineProperty(ChipsCategory.prototype, "ImageUrl", {
        get: function () {
            return this.imgPath + "chips.png";
        },
        enumerable: true,
        configurable: true
    });
    return ChipsCategory;
}(ProductCategory));
var CandyCategory = /** @class */ (function (_super) {
    __extends(CandyCategory, _super);
    function CandyCategory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "Candy Bar";
        return _this;
    }
    Object.defineProperty(CandyCategory.prototype, "ImageUrl", {
        get: function () {
            return this.imgPath + "candy.png";
        },
        enumerable: true,
        configurable: true
    });
    return CandyCategory;
}(ProductCategory));
/// <reference path="ProductCategory.ts" />
var Initial = /** @class */ (function () {
    function Initial() {
        this.name = "Please sleect a product";
        this.price = 0;
        // Remember that Product allows for options category, which this default product will not have
    }
    return Initial;
}());
var CocaCola = /** @class */ (function () {
    function CocaCola() {
        this.name = "Coca-Cola";
        this.price = 2.30;
        this.category = new SodaCategory();
    }
    return CocaCola;
}());
var LaysPotatoChips = /** @class */ (function () {
    function LaysPotatoChips() {
        this.name = "Lays Potato Chips";
        this.price = 1.50;
        this.category = new ChipsCategory();
    }
    return LaysPotatoChips;
}());
var HersheyBar = /** @class */ (function () {
    function HersheyBar() {
        this.name = "Hershey Chocolate Bar";
        this.price = 2.00;
        this.category = new CandyCategory();
    }
    return HersheyBar;
}());
/// <reference path="./Product.ts" />
var ProductFactory = /** @class */ (function () {
    function ProductFactory() {
    }
    ProductFactory.GetProduct = function () {
        var rand = Math.floor(Math.random() * 3);
        switch (rand) {
            case 0: return new CocaCola();
            case 1: return new LaysPotatoChips();
            case 2: return new HersheyBar();
        }
    };
    return ProductFactory;
}());
/// <reference path="./Product.ts" />
System.register("VendingMachine", ["Coin"], function (exports_2, context_2) {
    "use strict";
    var Coins, VendingMachineSize, Cell, VendingMachine;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (Coins_1) {
                Coins = Coins_1;
            }
        ],
        execute: function () {/// <reference path="./Product.ts" />
            (function (VendingMachineSize) {
                // This allows for contraint in the list of preset sizes (only 6, 9, and 12)
                // Makes the code more maintainable, all references of large can be changed here (1 location)
                // Adds readability to code
                VendingMachineSize[VendingMachineSize["small"] = 6] = "small";
                VendingMachineSize[VendingMachineSize["med"] = 9] = "med";
                VendingMachineSize[VendingMachineSize["large"] = 12] = "large";
            })(VendingMachineSize || (VendingMachineSize = {}));
            exports_2("VendingMachineSize", VendingMachineSize);
            Cell = /** @class */ (function () {
                function Cell(product) {
                    this.product = product;
                    this.stock = ko.observable(3);
                    this.sold = ko.observable(false); // Becomes true when stock is 0
                    // Keyword public makes the product variable a CLASS LEVEL property that is public, with the same name (product)
                }
                return Cell;
            }());
            VendingMachine = /** @class */ (function () {
                function VendingMachine() {
                    var _this = this;
                    this.paid = ko.observable(0); // This makes this property able to be data binded to an HTML element
                    // Look in bootstrapper.ts to see how we connect bindings between HTML tags and TS objects
                    this.selectedCell = ko.observable(new Cell(new Initial()));
                    this.cells = ko.observableArray([]);
                    // This conditional will rerun everytime ANY operator/field changes in value
                    this.canPay = ko.pureComputed(function () { return _this.paid() - _this.selectedCell().product.price >= 0; });
                    this.acceptedCoins = [new Coins.Quarter(), new Coins.Dime(), new Coins.Nickel(), new Coins.Penny()];
                    this.select = function (cell) {
                        cell.sold(false);
                        _this.selectedCell(cell);
                    };
                    this.acceptCoin = function (coin) {
                        // Because this is an arrow function, we don't need the "this" keyword
                        // arrow functions ALWAYS refer this to the object the function is INSIDE of
                        var oldTotal = _this.paid();
                        _this.paid(oldTotal + coin.Value);
                    };
                    this.pay = function () {
                        if (_this.selectedCell().stock() < 1) {
                            alert("Sorry we are out of " + _this.selectedCell().product.name);
                            return;
                        }
                        // Update the amount the user paid by deducting cost of product
                        var currentPaid = _this.paid();
                        _this.paid(Math.round(((currentPaid - _this.selectedCell().product.price) * 100)) / 100);
                        // Update the stock after purchase
                        _this.selectedCell().stock(_this.selectedCell().stock() - 1);
                        _this.selectedCell().sold(true);
                    };
                }
                Object.defineProperty(VendingMachine.prototype, "size", {
                    // This does not need to be the value of ko.observable()
                    // because the UI will NOT update from array changes
                    set: function (givenSize) {
                        this.cells([]); // This will reset the value of the array to be empty
                        for (var i = 0; i < givenSize; i++) {
                            var product = ProductFactory.GetProduct();
                            this.cells.push(new Cell(product));
                        }
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(VendingMachine.prototype, "Paid", {
                    get: function () {
                        return this.paid();
                    },
                    enumerable: true,
                    configurable: true
                });
                return VendingMachine;
            }());
            exports_2("VendingMachine", VendingMachine);
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
        }
    };
});
System.register("bootstrapper", ["VendingMachine"], function (exports_3, context_3) {
    "use strict";
    var VM, machine;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [
            function (VM_1) {
                VM = VM_1;
            }
        ],
        execute: function () {
            machine = new VM.VendingMachine();
            // Note that this function will look for all the ko.observable() calls in VendingMachine class, 
            // and allow their variable names to be binded in the index.html page
            machine.size = VM.VendingMachineSize.med;
            ko.applyBindings(machine); // a ko reference does not work alone, we need a type definition
            /*
            TYPE DEFINITIONS:
              - Go to https://github.com/DefinitelyTyped/DefinitelyTyped/find/master
              - Lookup the package you are trying to import (knockout.js in this case)
              - Download the file with .d.ts as the extension (naming convention for a definition)
              - We do not need a reference, as long as a .d.ts file is in the tsc directory, it will detect and add it
            */
            //let coin = new Quarter();
            //console.log(coin.Value); // This will implicity call the get Value() function from Coin.ts
            // console.log(coin.value); // This fails because the field is private!
        }
    };
});
//# sourceMappingURL=app.js.map