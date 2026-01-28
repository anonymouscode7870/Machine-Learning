function greet(name: string): string{
    return `Hello, ${name}`;
}

const userName: string = "World";
console.log(greet(userName));

// type checking example
// Annotation
let compayName: string = "OpenAI";

// Inference
let num  = 42;

console.log(`Company: ${compayName}, Number: ${num}`);