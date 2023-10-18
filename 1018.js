function printHello(){
    console.log('Hello');
}
console.log('Goodmorning');
printHello();

function log(message) {
    console.log(message);
}
log('Hello@');
log(1234);


function changeName(obj) {
    obj.name = 'coder';
}
const ellie = {name: 'ellie'};
changeName(ellie);
console.log(ellie);


function showMessage(message, from = 'unknown') {
    console.log(`${message} by {from}`);
}
showMessage('Hi!')


function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const arg of args) {
        console.log(arg);
    }
}
printAll('dream', 'coding', 'ellie');


let globalMessage = 'global';
function printMessage() {
    let message = 'Hello';
    console.log(message);
    console.log(globalMessage);
    function printAnother(){
        console.log(message);
        let childmessage = 'hello';
        console.log(childmessage);
    }
    printAnother();
}
printMessage();

