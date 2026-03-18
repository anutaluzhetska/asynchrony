function findTicket (ticketId, callback) {
    console.log(`[Database]: Searching for ticket ${ticketId} ...`)
    setTimeout(() => {
        const ticket = { id: ticketId, movie: "Avatar 2", seat: "A15"};
    callback(ticket);
    }, 2000);
}
function printTicket(data) {
    console.log(`[Printer]: Printing ticket for movie: ${data.movie}, Seat: ${data.seat}. Enjoy!`)
}
findTicket(542, printTicket);
