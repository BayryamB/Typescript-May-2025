"use strict";
// Create a class BankAccount with a private property balance (number). Add methods:
// · deposit(amount: number): void
// · withdraw(amount: number): void
// · getBalance(): number
// Ensure that withdrawing more than the balance is not allowed.
class BankAccount {
    balance;
    constructor(balance) {
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
        }
    }
    getBalance() {
        return this.balance;
    }
}
const account = new BankAccount(100);
account.deposit(50);
account.withdraw(30);
console.log(account.getBalance());
const anotherAccount = new BankAccount(20);
anotherAccount.withdraw(30);
console.log(anotherAccount.getBalance());
//# sourceMappingURL=02.js.map