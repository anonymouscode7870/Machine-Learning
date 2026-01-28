function getChai(kaisa: string | number) {
    // gurantee that kaisa is string
    if (typeof kaisa === "string") {
        return `This is a ${kaisa} chai.`; // kaise ke aage dot use krte hi sare string methods suggest kr dega
    } else {
        return `This is chai number ${kaisa}.`;// kaise ke aage dot use krte hi sare number methods suggest kr dega
    }

}       

function serving(msg?: string) {
    if (msg) {
        console.log(`serving: ${msg}`)
    } else {
        console.log("serving chai")
    }
}

function orderChai(sizeAgar: "small" | "medium" | "large"| number){
    if(typeof sizeAgar === "number"){
        console.log(`Ordering chai of size ${sizeAgar}ml`);
    }
    else{
        console.log(`Ordering a ${sizeAgar} chai`);
    }
} 


// class
class Cutting{
    serve(){
        console.log("Cutting chai served");
    }
}

class KulhadChai{
    serve(){
        console.log("Cutting chai KulhadChai served");
    }
}

function serveChai(chai: Cutting | KulhadChai){
    if(chai instanceof Cutting){
        chai.serve();
    }
    else{
        chai.serve();
    }
}

serveChai(new Cutting());
serveChai(new KulhadChai());

// type keyword
type ChaiOrder = {
    size: "small" | "medium" | "large";
    quantity: number;
    flavor?: string;
};

// type guard function
function isChaiOrder(obj: any): obj is ChaiOrder {
  return (
    obj &&
    (obj.size === "small" || obj.size === "medium" || obj.size === "large") &&
    typeof obj.quantity === "number" &&
    (obj.flavor === undefined || typeof obj.flavor === "string")
  );
}


