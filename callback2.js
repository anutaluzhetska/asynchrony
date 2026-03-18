function startWashing(mode, callback) {
    console.log(`[System]: Washing started in mode: ${mode} ...`)
    setTimeout(() => {
        console.log("The drum has stopped. The clothes are clean!")
        callback();
    }, 3000)
}
function notifyUser() {
    console.log("[Notification]: Your laundry is ready! You can pick up your clothes.")
}
startWashing("Delicate", notifyUser);
