function checkSubscription(status) {
    return new Promise((resolve, reject) => {
        console.log("Checking subscription...");

        setTimeout(() => {
            if (status === "active") {
                resolve("Subscription is active");
            } else {
                reject("Error: Payment required")
            }
        }, 1000);
    });
}
function loadMovie(title) {
    return new Promise ((resolve, reject) => {

        setTimeout(()=> {
          resolve(`Movie "${title}" loaded...`)
    },1500)
});
}
async function watchMoviesProcess(userStatus, movieName) {
    try {
        const result = await checkSubscription(userStatus)
        console.log(result)

        const result1 = await loadMovie(movieName)
        console.log(result1)

        console.log("Enjoy watching!")
    } catch (error){
        console.log(error);
    } finally {
        console.log('Updating page...')
    }
}

watchMoviesProcess ("active", "Interstellar");
