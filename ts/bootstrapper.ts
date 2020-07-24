
import * as VM from "./VendingMachine";

let machine = new VM.VendingMachine();
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