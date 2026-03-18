# JavaScript Asynchrony: From Callbacks to Async/Await

This repository contains a collection of practical examples of asynchronous programming in JavaScript. The project demonstrates the evolution of approaches to processing operations: from classic callback functions to modern asynchronous functions.

---

## Main modules

### 1. Cafe and Pizzeria (Async/Await)
* **Logic**: Order processing with menu and ingredient validation.
* **Methods**: Using the `try...catch...finally` construct to handle errors and ensure session termination (clearing the cash register or refreshing the page).

### 2. Dashboard and Smart Home (Promise.all)
* **Feature**: Simultaneous execution of independent asynchronous requests.
* **Benefit**: Performance optimization through parallel execution of promises (loading profile data, activating lighting and heating systems).

### 3. Security and Login (Validation)
* **Scenarios**: Password verification, subscription status validation and access control via digital keys.
* **Principle**: Separation of logic into successful execution (`resolve`) and exception handling (`reject`).

### 4. Legacy Callbacks (Base approach)
* **Context**: Demonstration of basic asynchrony mechanisms by passing functions as arguments.
* **Examples**: Automation of everyday processes, searching for data in the database and interacting with the printer after receiving the result.

---

## Technology stack

* **Promises** — managing the states of asynchronous operations: `pending`, `resolved`, `rejected`.
* **Async/Await** — writing clean, linear and readable code.
* **setTimeout** is a programmatic simulation of network delays and long computations.

---

## How to run
1. Make sure you have **Node.js** installed.
2. Open a terminal in the project folder.
3. Run the file with the command: `node <filename>.js`.
