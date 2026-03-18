function checkContent(text) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (text === "") {
                reject("Error: Empty message!")
            } else {
                resolve("Text checked")
            }
        }, 1000);
    });
}
function translateText(text) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("[UA to EN]: " + text);
        }, 1500);
    });
}
function sendEmail(message) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`The message "${message}" has been sent successfully!`);
        }, 2000);
    });
}
async function handleCommunication(userText) {
    try {
        console.log("We are starting the process...")

        const status = await checkContent(userText);
        console.log(status);

        const translated = await translateText(userText);
        console.log("The text has been translated!");

        const finalResult = await sendEmail(translated);
        console.log("Success:", finalResult);

    } catch (error) {
        console.log("Caught an error:", error);
    } finally {
        console.log("session ended");
    }
}
handleCommunication("Привіт, як справи?");
