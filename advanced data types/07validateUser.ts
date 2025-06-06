type User1 = {
    id: number | string;
    username: string;
    passwordHash: string | string[];
    status: "Locked" | "Unlocked" | "Deleted";
    email?: string;
};

function validateUser(user: unknown) {
    return (
        user != undefined &&
        typeof user === "object" &&
        "id" in user &&
        ((typeof user.id === "number" && user.id > 100) ||
            (typeof user.id === "string" && user.id.length === 14)) &&
        "username" in user &&
        typeof user.username === "string" &&
        user.username.length >= 5 &&
        user.username.length <= 10 &&
        "passwordHash" in user &&
        ((typeof user.passwordHash === "string" &&
            user.passwordHash.length === 20) ||
            (Array.isArray(user.passwordHash) &&
                user.passwordHash.length === 4 &&
                user.passwordHash.every(
                    (el) => typeof el === "string" && el.length === 8
                ))) &&
        "status" in user &&
        (user.status === "Locked" || user.status === "Unlocked")
    );
}

// console.log(
//     validateUser({
//         id: "1234-abcd-5678",
//         username: "testing",
//         passwordHash: "123456-123456-123456",
//         status: "Unlocked",
//     })
// );

// console.log(
//     validateUser({
//         id: "20",
//         username: "testing",
//         passwordHash: "123456-123456-123456",

//         status: "Deleted",
//         email: "something",
//     })
// );
console.log(
    validateUser({
        id: 255,
        username: "Pesho",
        passwordHash: ["asdf1245", "qrqweggw", "123-4567", "98765432"],
        status: "Locked",
        email: "something",
    })
);
