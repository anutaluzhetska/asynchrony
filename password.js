function checkPassword(password) {
    return new Promise((resolve, reject) => {
        console.log("Checking password...");

        setTimeout(() => {
            if (password === "admin123") {
                resolve("Access allowed! Welcome.")
            } else {
                reject("Error: Incorrect password!")
            }
        }, 1000);
    });
}
async function loginProcess(input) {
    try {
        const result = await checkPassword(input);

        console.log(result);
        console.log("Loading profile...");
    } catch (error) {
        console.log(error)
    } finally {
        console.log("Login attempt completed.")
    }
}
loginProcess("wrong_pass");
