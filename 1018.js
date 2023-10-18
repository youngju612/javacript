function printHello(){
    console.log('Hello');
}
console.log('Goodmorning');
printHello();

let globalMessage = 'global';
function printMessage() {
    let message = 'Hello';
    console.log(message);
    console.log(globalMessage);
    function printAnother(){
        console.log(message);
        let childmessage = 'hello';
    }
    console.log(childmessage);
}
printMessage();

