"use strict";
class CountedSet {
    map = new Map();
    add(item) {
        if (this.map.has(item)) {
            this.map.set(item, (this.map.get(item) ?? 0) + 1);
        }
        else {
            this.map.set(item, 1);
        }
    }
    remove(item) {
        if (this.map.has(item)) {
            this.map.set(item, (this.map.get(item) ?? 0) - 1);
            if (this.map.get(item) === 0) {
                this.map.delete(item);
            }
        }
    }
    contains(item) {
        if (this.map.has(item)) {
            return true;
        }
        return false;
    }
    getNumberOfCopies(item) {
        if (this.map.has(item)) {
            return this.map.get(item) ?? 0;
        }
        return 0;
    }
}
let countedSet = new CountedSet();
countedSet.add("test");
countedSet.add("test");
console.log(countedSet.contains("test"));
console.log(countedSet.getNumberOfCopies("test"));
countedSet.remove("test");
countedSet.remove("test");
countedSet.remove("test");
console.log(countedSet.getNumberOfCopies("test"));
console.log(countedSet.contains("test"));
// let codesCounterSet = new CountedSet<200 | 301 | 404 | 500>();
// codesCounterSet.add(404);
// codesCounterSet.add(200);
// console.log(codesCounterSet.contains(404));
// console.log(codesCounterSet.getNumberOfCopies(200));
// codesCounterSet.add(205); //TS Error
// codesCounterSet.getNumberOfCopies(350); //TS Error
//# sourceMappingURL=02.js.map