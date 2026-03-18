function prepareCoffee(type) {
    return new Promise((resolve, reject) => {
        console.log(`We are preparing your order: ${type}...`);

        setTimeout(() => {
            if (type === "espresso") {
                resolve("Your espresso is ready!");
            } else {
                reject("Sorry, this coffee is not on the menu.");
            }
        }, 2000);
    });
}

async function orderProcess() {
    console.log("The customer approached the cash register.");

    try {
        const result = await prepareCoffee("espresso");

        console.log(result);
        console.log("Thank you for your purchase!");

    } catch (error) {
        console.log(error);
    } finally {
        console.log("The cash register is free for the next customer.");
    }
}

orderProcess();
