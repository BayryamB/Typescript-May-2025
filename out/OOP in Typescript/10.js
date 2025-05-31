"use strict";
class UserOOP {
    _username;
    constructor(username) {
        this._username = username;
    }
    get username() {
        return this._username;
    }
    set username(newUsername) {
        if (newUsername.length < 3) {
            throw new Error("Username must be at least 3 characters long.");
        }
        this._username = newUsername;
    }
}
const user1 = new UserOOP("Martin");
user1.username = "johnDoe";
console.log(user1.username);
// const user1 = new UserOOP("Martin");
// user1.username = "Do";
//# sourceMappingURL=10.js.map