"use strict";
var Days;
(function (Days) {
    Days[Days["Monday"] = 1] = "Monday";
    Days[Days["Tuesday"] = 2] = "Tuesday";
    Days[Days["Wednesday"] = 3] = "Wednesday";
    Days[Days["Thursday"] = 4] = "Thursday";
    Days[Days["Friday"] = 5] = "Friday";
    Days[Days["Saturday"] = 6] = "Saturday";
    Days[Days["Sunday"] = 7] = "Sunday";
})(Days || (Days = {}));
function reversedDayOfWeek(day) {
    console.log(Days[day] || "error");
}
reversedDayOfWeek("Monday");
reversedDayOfWeek("Tuesday");
reversedDayOfWeek("Wednesday");
reversedDayOfWeek("Thursday");
reversedDayOfWeek("Friday");
reversedDayOfWeek("Saturday");
reversedDayOfWeek("Sunday");
reversedDayOfWeek("error");
//# sourceMappingURL=reversedDayOfWeek.js.map