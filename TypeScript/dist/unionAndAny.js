"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let suscriber = '1M';
suscriber = 1000000;
console.log(`Suscribers: ${suscriber}`);
// own defined type 
let apiRequest = "success";
apiRequest = "pending";
console.log(`API Request status: ${apiRequest}`);
// example 
let numb = ["12", "34", "56"];
let findNumb; // this is very important to define the type here
for (let i of numb) {
    if (i == "34") {
        findNumb = i;
    }
}
console.log(`Found Number: ${findNumb}`);
//# sourceMappingURL=unionAndAny.js.map