let suscriber : number| string = '1M'
suscriber = 1000000

console.log(`Suscribers: ${suscriber}`)

// own defined type 
let apiRequest : "success" | "failure"| "pending" = "success"
apiRequest="pending"

console.log(`API Request status: ${apiRequest}`)

// example 
let numb: string[] = ["12", "34", "56"];

let findNumb: string | undefined; // this is very important to define the type here

for(let i of numb){
    if(i == "34"){
        findNumb = i;
    }

}

console.log(`Found Number: ${findNumb}`);
