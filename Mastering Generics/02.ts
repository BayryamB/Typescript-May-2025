interface CountableSet<T> {
    add(item: T): void;
    remove(item: T): void;
    contains(item: T): boolean;
    getNumberOfCopies(item: T): number;
}

class CountedSet<T> implements CountableSet<T> {
    private map: Map<T, number> = new Map<T, number>();
    public add(item: T): void {
        if (this.map.has(item)) {
            this.map.set(item, (this.map.get(item) ?? 0) + 1);
        } else {
            this.map.set(item, 1);
        }
    }
    public remove(item: T): void {
        if (this.map.has(item)) {
            this.map.set(item, (this.map.get(item) ?? 0) - 1);
            if (this.map.get(item) === 0) {
                this.map.delete(item);
            }
        }
    }
    public contains(item: T): boolean {
        if (this.map.has(item)) {
            return true;
        }
        return false;
    }
    public getNumberOfCopies(item: T): number {
        if (this.map.has(item)) {
            return this.map.get(item) ?? 0;
        }
        return 0;
    }
}

let countedSet = new CountedSet<string>();
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
