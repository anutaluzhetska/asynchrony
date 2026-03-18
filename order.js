function validateOrder(order) {
    return new Promise((resolve, reject) => {
        console.log("Checking order...");

        setTimeout(() => {
            if (order === "margarita") {
                resolve("margherita pizza is available!")
            } else {
                reject("Sorry, we're only making Margaritas right now.")
            }
        }, 1000);
    });
}
function getIngredients() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["cheese", "tomatoes"])
        }, 1500);
    });
}
function cookPizza() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("The pizza is ready!")
        }, 2000);
    });

}
async function pizzaBusiness(orderName) {
    try {
        const status = await validateOrder(orderName);
        console.log(status);

        console.log("Starting preparation...");
        const [ingredients, readyMessage] = await Promise.all([
            getIngredients(),
            cookPizza()
        ]);

        console.log("Ingredients collected:", ingredients);
        console.log(readyMessage);
        console.log("Your order is complete!");

    } catch (error) {
        console.log(error);
        console.log("We cannot accept this order.");
    } finally {
        console.log('Thank you for choosing our pizzeria!');
    }
}
pizzaBusiness("margarita");
