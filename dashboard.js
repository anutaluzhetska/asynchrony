function getUserName() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Anna Luzhetska");
        }, 1000);
    });
}
function getFriendsList() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["Snezhana", "Dima", "Maria"])
        }, 2000);
    });
}
function getLatesPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: 1, text: "My brain exploded in the first project." })
        }, 1500);
    });
}
async function loadDashboard() {
    console.log("Starting data upload...");
    try {
        const [name, friends, post] = await Promise.all(([getUserName(), getFriendsList(), getLatesPost()]));

        console.log("Користувач:", name);

        console.log("Друзі:", friends);

        console.log("Останній пост:", post.text);

    } catch (error) {
        console.log(error);
    }
}
loadDashboard();
