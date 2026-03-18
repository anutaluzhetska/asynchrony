function unlockDoor(key) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (key === "1234") {
                resolve("The door is open.")
            } else {
                reject("Alarm! The key is incorrect.")
            }
        }, 1000);
    });
}
function turnOnLights() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("The light is on.")
        }, 1500);
    });
}
function turnOnHeater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("The heating is working ")
        }, 2000);
    });
}
function playMusic() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Music is playing");
        }, 1000);
    });
}
async function welcomeHome(passcode) {
    try {
        const doorStatus = await unlockDoor(passcode);
        console.log(doorStatus);

        console.log("Powering up all systems...");

        const [lights, heater, music] = await Promise.all([
            turnOnLights(),
            turnOnHeater(),
            playMusic()
        ]);

        console.log(lights);
        console.log(heater);
        console.log(music);

        console.log("Welcome home, Anna!")

    } catch (error) {
        console.log(error);
    } finally {
        console.log("Security system ready")
    }
}
welcomeHome("1234");
