function preparePizza(name, callback) {
    console.log(`Started cooking pizza: ${name}...`)
    setTimeout (() => {
        console.log(`Pizza ${name} is ready!`)

        callback();
    }, 2000);
}

function callCustomer() {
    console.log("We are calling the client: Your order is waiting!")
}
preparePizza("Margarita", callCustomer);
